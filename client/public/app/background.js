/** @format */
console.log('pjh');

chrome.tabs.onUpdated.addListener(function (id, info, tab) {
  if (tab.status !== 'complete') {
    return;
  }
  console.log(tab.url);
  if (tab.url.indexOf('saksfifthavenue') != -1) {
    console.log('is saks');
    chrome.tabs.executeScript(null, { file: 'app/foreground.js' }, () =>
      console.log('i injected')
    );
  } else {
    console.log('not saks');
  }
});

// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: 'clicked_browser_action',
    });
  });
});

chrome.runtime.onInstalled.addListener(function (object) {
  refreshContentScript();
});

function injectIntoTab(tab) {
  // You could iterate through the content scripts here
  var manifest = chrome.runtime.getManifest();
  var scripts = manifest.content_scripts[0].js;
  var styles = manifest.content_scripts[0].css;
  // injects js
  var i = 0,
    s = scripts.length;
  for (; i < s; i++) {
    chrome.tabs.executeScript(tab.id, {
      file: scripts[i],
    });
  }
  // inject css
  var j = 0,
    c = styles.length;
  for (; j < c; j++) {
    chrome.tabs.insertCSS(tab.id, {
      file: styles[j],
    });
  }
}

function refreshContentScript() {
  // Get all windows
  chrome.windows.getAll(
    {
      populate: true,
    },
    function (windows) {
      var i = 0,
        w = windows.length,
        currentWindow;
      for (; i < w; i++) {
        currentWindow = windows[i];
        var j = 0,
          t = currentWindow.tabs.length,
          currentTab;
        for (; j < t; j++) {
          currentTab = currentWindow.tabs[j];
          // Skip chrome:// pages
          if (
            currentTab.url &&
            currentTab.url.match(/(file|http|https):\/\//gi)
          ) {
            injectIntoTab(currentTab);
          }
        }
      }
    }
  );
}
