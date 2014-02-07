chrome.tabs.getSelected(null, function(tab) {
  document.getElementById('id_url').value = tab.url;
});
