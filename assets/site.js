(function () {
  var root = document.documentElement;
  var key = 'theme';
  var saved = null;
  try { saved = localStorage.getItem(key); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);

  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function label() { btn.textContent = current() === 'dark' ? 'Light' : 'Dark'; }
  label();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(key, next); } catch (e) {}
    label();
  });
})();
