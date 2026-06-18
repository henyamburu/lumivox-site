function plausibleTrack(name, props = {}) {
  if (typeof plausible === 'function') {
    plausible(name, { props });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('nav') && !event.target.closest('#mobile-menu')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const year = document.getElementById('current-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('video[data-track-name]').forEach(function (video) {
    let hasStarted = false;

    video.addEventListener('play', function () {
      if (!hasStarted) {
        hasStarted = true;
        plausibleTrack('Video Played', {
          video: video.dataset.trackName || video.id || 'unknown'
        });
      }
    });

    video.addEventListener('ended', function () {
      hasStarted = false;
    });
  });

  const fitCheck = document.querySelector('[data-fit-check]');
  if (fitCheck) {
    const result = fitCheck.querySelector('[data-fit-result]');
    const submit = fitCheck.querySelector('[data-fit-submit]');
    const questionNames = ['tracker', 'tired', 'simple', 'apps', 'routine'];

    function trackHomepage(action, label) {
      plausibleTrack('Homepage Interaction', {
        category: 'homepage',
        action,
        label
      });
    }

    function getAnswers() {
      const formData = new FormData(fitCheck);
      return questionNames.map(function (name) {
        return formData.get(name);
      });
    }

    function updateFitCheckUrl(answers) {
      if (!window.history || typeof window.history.replaceState !== 'function') return;

      const url = new URL(window.location.href);
      questionNames.forEach(function (name, index) {
        if (answers[index]) {
          url.searchParams.set(name, answers[index]);
        } else {
          url.searchParams.delete(name);
        }
      });
      window.history.replaceState(null, '', url.toString());
    }

    function restoreFitCheckFromUrl() {
      const params = new URLSearchParams(window.location.search);
      questionNames.forEach(function (name) {
        const value = params.get(name);
        if (!value) return;

        const input = fitCheck.querySelector('input[name="' + name + '"][value="' + value + '"]');
        if (input) {
          input.checked = true;
        }
      });
    }

    function renderFitResult(options) {
      const shouldScroll = options && options.scroll;
      const answers = getAnswers();
      const answered = answers.filter(Boolean);
      updateFitCheckUrl(answers);

      if (answered.length < questionNames.length) {
        if (result) {
          result.hidden = false;
          result.innerHTML = '<h3>Finish the fit check</h3><p>Please answer all five questions so the result is useful.</p>';
          if (shouldScroll) {
            result.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        return;
      }

      const fitScore = answers.filter(function (value) { return value === 'fit'; }).length;
      const notScore = answers.filter(function (value) { return value === 'not'; }).length;
      let label = 'maybe_fit';
      let message = 'Start with the guide on what wearable sleep data can and cannot tell you before buying anything.';
      let href = '/guides/wearable-sleep-data/';
      let cta = 'Read the Sleep Data Guide';

      if (answers.includes('not') && (notScore >= 2 || answers[4] === 'not')) {
        label = 'not_fit';
        message = 'Lumivox may not be the right starting point if you need medical diagnosis, treatment, or a full smart-home platform.';
        href = '/who-lumivox-is-for/';
        cta = 'See Who Lumivox Is For';
      } else if (fitScore >= 4 && answers[4] === 'fit') {
        label = 'good_fit';
        message = 'Lumivox may be a good fit. Start with the beginner sleep system and run a simple 7-night bedroom routine test.';
        href = '/sleep-system/';
        cta = 'See the Starter System';
      }

      if (result) {
        result.hidden = false;
        result.dataset.trackCategory = 'homepage';
        result.dataset.trackAction = 'fit_check_completed';
        result.dataset.trackLabel = label;
        result.innerHTML = '<h3>' + (label === 'good_fit' ? 'Good fit' : label === 'not_fit' ? 'Not the first stop' : 'Maybe fit') + '</h3><p>' + message + '</p><a href="' + href + '">' + cta + '</a>';
        if (shouldScroll) {
          result.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      if (submit) {
        submit.dataset.trackLabel = label;
      }
      trackHomepage('fit_check_completed', label);
    }

    restoreFitCheckFromUrl();
    if (getAnswers().filter(Boolean).length === questionNames.length) {
      renderFitResult({ scroll: false });
    }

    fitCheck.addEventListener('change', function () {
      if (!fitCheck.dataset.started) {
        fitCheck.dataset.started = 'true';
        trackHomepage('fit_check_started', 'first_answer');
      }
      updateFitCheckUrl(getAnswers());
    });

    fitCheck.addEventListener('submit', function (event) {
      event.preventDefault();
      renderFitResult({ scroll: true });
    });

    if (submit) {
      submit.addEventListener('click', function () {
        renderFitResult({ scroll: true });
      });
      submit.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          renderFitResult({ scroll: true });
        }
      });
    }

    fitCheck.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && event.target.matches('input[type="radio"]')) {
        event.preventDefault();
        renderFitResult({ scroll: true });
      }
    });
  }
});

/* =====================================================================
   Article reading aids — reading-progress bar + scroll-spy TOC.
   Progressive enhancement: if the markup isn't present, nothing runs.
   ===================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  var article = document.querySelector('.article-page .article-body') ||
                document.querySelector('.article-page');
  if (!article) return;

  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Reading-progress bar ---------------------------------------- */
  var progressWrap = document.createElement('div');
  progressWrap.className = 'reading-progress';
  progressWrap.setAttribute('aria-hidden', 'true');
  var progressBar = document.createElement('div');
  progressBar.className = 'reading-progress__bar';
  progressWrap.appendChild(progressBar);
  document.body.appendChild(progressWrap);

  function updateProgress() {
    var rect = article.getBoundingClientRect();
    var top = rect.top + window.pageYOffset;
    var height = article.offsetHeight;
    var winH = window.innerHeight;
    var scrolled = window.pageYOffset - top + winH * 0.25;
    var total = height - winH * 0.5;
    var pct = total > 0 ? (scrolled / total) : 0;
    pct = Math.max(0, Math.min(1, pct));
    progressBar.style.width = (pct * 100).toFixed(2) + '%';
  }

  /* ---- Scroll-spy TOC ---------------------------------------------- */
  var toc = document.querySelector('.article-toc');
  var links = [];
  var targets = [];

  if (toc) {
    toc.querySelectorAll('a[href^="#"]').forEach(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      if (!id) return;
      var el = document.getElementById(id);
      if (el) {
        links.push(link);
        targets.push(el);
      }
    });
  }

  var activeLink = null;
  function setActive(link) {
    if (link === activeLink) return;
    if (activeLink) activeLink.classList.remove('is-active');
    activeLink = link;
    if (activeLink) activeLink.classList.add('is-active');
  }

  function updateSpy() {
    if (!targets.length) return;
    var offset = 110; // account for fixed nav + breathing room
    var current = 0;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].getBoundingClientRect().top - offset <= 0) {
        current = i;
      } else {
        break;
      }
    }
    // If we're at the very bottom, highlight the last section
    if (window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2) {
      current = targets.length - 1;
    }
    setActive(links[current]);
  }

  /* Smooth, offset-aware jumps when clicking a TOC link */
  links.forEach(function (link, idx) {
    link.addEventListener('click', function (e) {
      var el = targets[idx];
      if (!el) return;
      e.preventDefault();
      var y = el.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });
      if (history.replaceState) {
        history.replaceState(null, '', link.getAttribute('href'));
      }
      setActive(link);
    });
  });

  /* ---- rAF-throttled scroll loop ----------------------------------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateProgress();
      updateSpy();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateProgress();
  updateSpy();
});
