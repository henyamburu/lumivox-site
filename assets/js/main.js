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
});
