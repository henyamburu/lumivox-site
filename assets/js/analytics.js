(function () {
  function safeText(element) {
    return (element.textContent || "").replace(/\s+/g, " ").trim();
  }

  function trackEvent(eventName, payload) {
    console.log("[Lumivox Tracking]", eventName, payload);

    // Future Cloudflare Zaraz support
    if (window.zaraz && typeof window.zaraz.track === "function") {
      window.zaraz.track(eventName, payload);
    }

    // Future GA4 support
    if (window.gtag && typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    // Local hook for testing or future custom listeners.
    window.dispatchEvent(new CustomEvent("lumivox:track", {
      detail: {
        eventName: eventName,
        payload: payload
      }
    }));
  }

  document.addEventListener("click", function (event) {
    const trackedElement = event.target.closest("[data-track]");

    if (!trackedElement) return;

    const eventName = trackedElement.dataset.track;
    const linkText = safeText(trackedElement);
    const destination = trackedElement.dataset.destination || trackedElement.getAttribute("href") || "";
    const trackingId = trackedElement.dataset.trackId || trackedElement.id || "";
    const category = trackedElement.dataset.category || "general";
    const label = trackedElement.dataset.label || linkText || trackingId || eventName;

    const payload = {
      tracking_id: trackingId,
      category: category,
      label: label,
      destination: destination,
      page: window.location.pathname,
      link_text: linkText,

      // GA4-friendly aliases for future use.
      event_category: category,
      event_label: label,
      destination_url: destination,
      page_path: window.location.pathname
    };

    trackEvent(eventName, payload);
  });
})();
