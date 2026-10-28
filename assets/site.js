/* Pin <-> row sync. The portrait and the pinout table are two views of one fact:
   hovering or focusing either highlights the other. Keyboard reachable because
   every pad in the portrait is a focusable element with its own name. */
(function () {
  var pads = Array.prototype.slice.call(document.querySelectorAll('.portrait [data-pin]'));
  var rows = Array.prototype.slice.call(document.querySelectorAll('tr[data-pin]'));
  if (!pads.length || !rows.length) return;

  var padByPin = {}, rowByPin = {};
  pads.forEach(function (p) { padByPin[p.getAttribute('data-pin')] = p; });
  rows.forEach(function (r) { rowByPin[r.getAttribute('data-pin')] = r; });

  function show(pin) {
    if (padByPin[pin]) padByPin[pin].classList.add('is-on');
    if (rowByPin[pin]) rowByPin[pin].classList.add('is-on');
  }
  function clear(pin) {
    if (padByPin[pin]) padByPin[pin].classList.remove('is-on');
    if (rowByPin[pin]) rowByPin[pin].classList.remove('is-on');
  }

  pads.concat(rows).forEach(function (el) {
    var pin = el.getAttribute('data-pin');
    el.addEventListener('mouseenter', function () { show(pin); });
    el.addEventListener('mouseleave', function () { clear(pin); });
    el.addEventListener('focus', function () { show(pin); });
    el.addEventListener('blur', function () { clear(pin); });
  });
})();
