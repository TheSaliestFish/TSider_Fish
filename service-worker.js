chrome.runtime.onInstalled.addListener(function() {
  chrome.sidePanel.setOptions({
    path: 'sidebar.html',
    enabled: true
  });
});
