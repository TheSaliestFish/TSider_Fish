chrome.runtime.onInstalled.addListener(function() {
  chrome.sidePanel.setOptions({
    path: 'sidebar.html',
    enabled: true
  });
});

chrome.action.onClicked.addListener(() => {
  console.log('Button clicked');
  const url = 'http://gpt.yuki.uno';
  chrome.tabs.create({ url });
});
