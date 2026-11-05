/* Aviso de cookies y Meta Pixel de Cocina Libre: Navidad.
   El píxel solo se carga si la persona acepta. El ID NO se guarda en este archivo:
   se pega en PIXEL_ID en el momento del deploy (nunca en el chat ni en GitHub público). */
(function () {
  var PIXEL_ID = 'PEGA-AQUI-EL-ID-DEL-PIXEL';
  var KEY = 'cl_navidad_cookies';
  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  function loadPixel() {
    if (!PIXEL_ID || PIXEL_ID.indexOf('PEGA-AQUI') === 0 || window.fbq) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
    if (document.body.hasAttribute('data-viewcontent')) fbq('track', 'ViewContent');
  }

  function choose(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    var b = document.getElementById('cl-cookies'); if (b) b.remove();
    if (v === 'si') loadPixel();
  }

  if (saved === 'si') { loadPixel(); return; }
  if (saved === 'no') return;

  document.addEventListener('DOMContentLoaded', function () {
    var d = document.createElement('div');
    d.id = 'cl-cookies';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-label', 'Aviso de cookies');
    d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:88px;z-index:20;max-width:560px;margin:0 auto;background:#fff;color:#25301f;border:1px solid #e9e1d1;border-radius:14px;padding:14px 16px;box-shadow:0 10px 30px rgba(0,0,0,.18);font:15px/1.45 "DM Sans",system-ui,sans-serif';
    d.innerHTML = 'Usamos cookies para medir la publicidad de este sitio. Puedes aceptar o rechazar. <a href="privacidad.html" style="color:#3F5B3A">Más información</a>' +
      '<div style="display:flex;gap:10px;margin-top:10px"><button id="cl-no" style="flex:1;padding:10px;border-radius:10px;border:1px solid #3F5B3A;background:#fff;color:#3F5B3A;font-weight:700;cursor:pointer">Rechazar</button>' +
      '<button id="cl-si" style="flex:1;padding:10px;border-radius:10px;border:0;background:#3F5B3A;color:#fff;font-weight:700;cursor:pointer">Aceptar</button></div>';
    document.body.appendChild(d);
    document.getElementById('cl-si').onclick = function () { choose('si'); };
    document.getElementById('cl-no').onclick = function () { choose('no'); };
  });
})();
