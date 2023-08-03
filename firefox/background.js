browser.tabs.onCreated.addListener(function(tab) {
  if (tab.url === "about:newtab") {
    browser.tabs.update(tab.id, { url: "https://simplist.page" });
  }
});