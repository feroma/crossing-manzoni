export default ({ app }) => {
  // Inizializza dataLayer
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  // Imposta consent mode default
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'security_storage': 'granted',
    'functionality_storage': 'granted'
  });
}
