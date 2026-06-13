const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 8000);

const pageRoutes = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/sleep-system/", "sleep-system.html"],
  ["/sleep-system.html", "sleep-system.html"],
  ["/about/", "about.html"],
  ["/about.html", "about.html"],
  ["/who-lumivox-is-for/", "who-lumivox-is-for.html"],
  ["/who-lumivox-is-for.html", "who-lumivox-is-for.html"],
  ["/fitbit-inspire-3-vs-xiaomi-smart-band-10/", "fitbit-inspire-3-vs-xiaomi-smart-band-10.html"],
  ["/fitbit-inspire-3-vs-xiaomi-smart-band-10.html", "fitbit-inspire-3-vs-xiaomi-smart-band-10.html"],
  ["/how-to-build-bedroom-wind-down-automation/", "how-to-build-bedroom-wind-down-automation.html"],
  ["/how-to-build-bedroom-wind-down-automation.html", "how-to-build-bedroom-wind-down-automation.html"],
  ["/kasa-smart-plug-setup-for-sleep-routines/", "kasa-smart-plug-setup-for-sleep-routines.html"],
  ["/kasa-smart-plug-setup-for-sleep-routines.html", "kasa-smart-plug-setup-for-sleep-routines.html"],
  ["/404.html", "404.html"],
  ["/guides/", "guides/index.html"],
  ["/guides/starter-sleep-automation-under-250/", "guides/starter-sleep-automation-under-250/index.html"],
  ["/guides/beginner-smart-home-sleep-system-checklist/", "guides/beginner-smart-home-sleep-system-checklist/index.html"],
  ["/guides/wearable-sleep-data/", "guides/wearable-sleep-data/index.html"],
  ["/_preview/article-template/", "_templates/article-page.html"],
]);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function parsePage(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { page: {}, content: source };

  const page = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    page[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return { page, content: match[2] };
}

function parseIncludeArgs(source) {
  const args = {};
  const pattern = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let match;
  while ((match = pattern.exec(source))) {
    args[match[1]] = match[2] ?? match[3] ?? "";
  }
  return args;
}

function renderVariables(source, context) {
  return source
    .replace(/\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}/g, "$1")
    .replace(/\{\{\s*page\.([\w-]+)\s*\|\s*default:\s*site\.([\w-]+)\s*\}\}/g, (_, pageKey, siteKey) => context.page[pageKey] || context.site[siteKey] || "")
    .replace(/\{\{\s*page\.([\w-]+)\s*\|\s*default:\s*page\.([\w-]+)\s*\}\}/g, (_, pageKey, fallbackKey) => context.page[pageKey] || context.page[fallbackKey] || "")
    .replace(/\{\{\s*page\.([\w-]+)\s*\}\}/g, (_, key) => context.page[key] || "")
    .replace(/\{\{\s*include\.([\w-]+)\s*\}\}/g, (_, key) => context.include?.[key] || "")
    .replace(/\{\{\s*content\s*\}\}/g, context.content || "");
}

function renderConditionals(source, context) {
  return source.replace(/\{%\s*if\s+([\s\S]*?)\s*%\}([\s\S]*?)\{%\s*endif\s*%\}/g, (_, condition, body) => {
    const includeMatch = condition.match(/^include\.([\w-]+)$/);
    if (includeMatch) return context.include?.[includeMatch[1]] ? body : "";

    const navMatch = condition.match(/^page\.nav\s*==\s*'([^']+)'$/);
    if (navMatch) return context.page.nav === navMatch[1] ? body : "";

    return "";
  });
}

function renderIncludes(source, context) {
  return source.replace(/\{%\s*include\s+([\w-]+\.html)([\s\S]*?)%\}/g, (_, filename, argSource) => {
    const includeContext = { ...context, include: parseIncludeArgs(argSource) };
    return renderTemplate(read(path.join("_includes", filename)), includeContext);
  });
}

function renderTemplate(source, context) {
  return renderVariables(renderIncludes(renderConditionals(source, context), context), context);
}

function renderPage(filename) {
  const { page, content } = parsePage(read(filename));
  const site = {
    title: "Lumivox",
    description: "Smart living systems that connect wearable data with your home environment.",
  };
  let rendered = renderTemplate(content, { page, site });
  let layoutName = page.layout || "default";

  while (layoutName) {
    const layout = parsePage(read(path.join("_layouts", `${layoutName}.html`)));
    rendered = renderTemplate(layout.content, { page, site, content: rendered });
    layoutName = layout.page.layout;
  }

  return rendered;
}

function resolveStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const candidate = path.resolve(root, `.${decoded}`);
  if (!candidate.startsWith(root + path.sep)) return null;

  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    const indexPath = path.join(candidate, "index.html");
    return fs.existsSync(indexPath) ? indexPath : null;
  }
  return fs.existsSync(candidate) ? candidate : null;
}

const server = http.createServer((request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (pageRoutes.has(url.pathname)) {
      response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
      response.end(renderPage(pageRoutes.get(url.pathname)));
      return;
    }

    const staticPath = resolveStaticPath(url.pathname);
    if (!staticPath) {
      response.writeHead(404, { "Content-Type": mimeTypes[".html"] });
      response.end(renderPage("404.html"));
      return;
    }

    const extension = path.extname(staticPath).toLowerCase();
    response.writeHead(200, { "Content-Type": mimeTypes[extension] || "application/octet-stream" });
    fs.createReadStream(staticPath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error.stack);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Lumivox local preview: http://127.0.0.1:${port}`);
});
