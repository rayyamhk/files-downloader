const Download = document.querySelector('#download-btn');

Download.addEventListener('click', () => {
  const pattern = document.querySelector('input[name="pattern"]').value;
  const extension = document.querySelector('input[name="extension"]').value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { pattern, extension });
  })
});
