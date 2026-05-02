(function () {
  if (window.__apgDataEventTrackingLoaded) return;
  window.__apgDataEventTrackingLoaded = true;

  var SENSITIVE_EVENTS = {
    email_click: true,
    phone_click: true,
    whatsapp_click: true
  };

  function safeText(value) {
    return (value || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  }

  function isSensitiveText(value) {
    return /@|\b\+?\d[\d\s().-]{5,}\d\b/.test(value || '');
  }

  function safeHref(element, eventName) {
    if (!element || !element.href || SENSITIVE_EVENTS[eventName]) return undefined;

    try {
      var url = new URL(element.href, window.location.href);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined;
      if (isSensitiveText(url.href)) return undefined;
      return url.href;
    } catch (error) {
      return undefined;
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || typeof target.closest !== 'function') return;

    var element = target.closest('[data-event]');
    if (!element || typeof window.gtag !== 'function') return;

    var eventName = safeText(element.getAttribute('data-event'));
    if (!/^[A-Za-z0-9_]+$/.test(eventName)) return;

    var label = safeText(element.innerText || element.textContent || element.getAttribute('aria-label') || eventName);
    if (SENSITIVE_EVENTS[eventName] || isSensitiveText(label)) {
      label = eventName;
    }

    var params = {
      event_category: 'engagement',
      event_label: label,
      page_path: window.location.pathname
    };

    var href = safeHref(element, eventName);
    if (href) params.link_url = href;

    window.gtag('event', eventName, params);
  });
})();
