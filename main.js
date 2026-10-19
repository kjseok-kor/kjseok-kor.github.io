/* Hash-based views: #about, #publications, #news, #cv. No hash = cover. */
(function () {
  var VIEWS = ['about', 'publications', 'news', 'cv'];
  var root = document.documentElement;

  function currentView() {
    var v = (location.hash || '').replace('#', '');
    return VIEWS.indexOf(v) >= 0 ? v : 'cover';
  }

  function apply() {
    var v = currentView();
    root.setAttribute('data-view', v);
    var links = document.querySelectorAll('[data-nav]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === v) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
    document.title = v === 'cover'
      ? document.querySelector('.name').textContent.trim()
      : document.querySelector('.name').textContent.trim() + ' · ' + v.charAt(0).toUpperCase() + v.slice(1);
    window.scrollTo(0, 0);
  }

  /* "#" (the name link) should return to the cover without leaving a bare "#" in the URL. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#"]');
    if (!a) return;
    e.preventDefault();
    history.pushState(null, '', location.pathname + location.search);
    apply();
  });

  window.addEventListener('hashchange', apply);
  window.addEventListener('popstate', apply);
  apply();
})();
