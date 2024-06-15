console.log('Background script is running');

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    // 加载拓展时打开一个新标签页
    chrome.tabs.create({ url: 'http://121.199.79.7:40042/#/chat' });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openTab') {
        chrome.tabs.create({ url: message.url });
        sendResponse({ response: "New tab opened" });
    }
});

// chrome.action.onClicked.addListener(handleActionClick);

// chrome.action.onClicked.addListener((tab) => {
//     chrome.tabs.create({ url: 'http://121.199.79.7:40042/#/chat' });
// });
