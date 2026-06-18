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
