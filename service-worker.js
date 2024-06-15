chrome.runtime.onInstalled.addListener(function() {
  chrome.sidePanel.setOptions({
    path: 'sidebar.html',
    enabled: true
  });
});

chrome.action.onClicked.addListener(() => {
  console.log('Button clicked');
  const url = 'http://121.199.79.7:40042/#/chat';
  chrome.tabs.create({ url });
});
