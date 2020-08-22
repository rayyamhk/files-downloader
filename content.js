function filesDownloader(pattern, extension) {
  const urls = [];
  const patternRegExp = new RegExp(pattern);
  const extRegExp = extension !== '' ? new RegExp(`.+[.]${extension}`) : new RegExp();

  if (/^(jpg|jpeg|png)$/.test(extension)) {
    const imgTags = document.querySelectorAll('img');
    imgTags.forEach((imgTag) => {
      const src = imgTag.src;
      if (patternRegExp.test(src) && extRegExp.test(src)) {
        urls.push(src);
      }
    });
  }

  const aTags = document.querySelectorAll('a');
  aTags.forEach((aTag) => {
    const href = aTag.href;
    if (patternRegExp.test(href) && extRegExp.test(href)) {
      urls.push(href);
    }
  });

  chrome.runtime.sendMessage({ urls });
}

chrome.runtime.onMessage.addListener(({ pattern, extension }) => {
  filesDownloader(pattern, extension);
});
