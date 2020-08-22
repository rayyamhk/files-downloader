chrome.runtime.onMessage.addListener(({ urls }) => {
  urls.forEach((url) => {
    const options = {
      url,
      saveAs: false,
    };
    chrome.downloads.download(options);
  });
});
