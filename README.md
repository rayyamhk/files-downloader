# files-downloader
![alt text](https://i.imgur.com/HWNUCV6.png)
![alt text](https://i.imgur.com/Fq3erf1.png)\
A chrome extension that can help you download all files on your current tab with given url pattern and filename extension in one click


## URL Pattern
A Regular Expression is created, i.e. ``new RegExp(pattern)``, to filter out all urls which are matched with the given pattern.

## Filename Extension
Filter out all files with correct filename extension. If the filename extension is jpg, jpeg, png, the chrome extension searches all ``<img>`` tags on current tab. Otherwise, it only searches all ``<a>`` tags.
