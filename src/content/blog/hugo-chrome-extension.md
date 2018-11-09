---
title: "I Made a Hugo Chrome Extension"
author: FelicianoTech
date: 2018-11-09T10:00:00-05:00
categories:
  - "Projects"
tags:
  - "hugo"
  - "chrome"
---

I made a very simple Google Chrome Extension for people who build websites with the [Hugo static site generator][hugo] (SSG) and [launched it](https://www.producthunt.com/posts/hugo-chrome-extension) on Product Hunt.

This first release has two main features:

1. The extension icon "lights up" whenever you're browsing a Hugo-built website.
1. You can search the Hugo documentation from Chrome's Omnibox (address bar).

![Hugo doc search example](/assets/img/article/hugo-screencast.gif)

## Install

You can view and install the Chrome extension via the [Chrome Web Store][cws].

## Code & Feedback

This Chrome extension is completely open source and [available on GitHub][gh].
As this extension ask for broad permissions (to check if each site was built with Hugo) you are more than welcome to dig through the code to make sure it's safe, or even pack it an run it yourself.

If you have any feedback or feature requests, please comment on this post or let me know in a [GitHub Issue][gh-issue].



[hugo]: https://gohugo.io/
[cws]: https://chrome.google.com/webstore/detail/hugo-the-extension-you-re/hbaembbfbmpbjgkgcjcfonnimlekbfea
[gh]: https://github.com/felicianotech/hugo-browser-extension
[gh-issue]: https://github.com/felicianotech/hugo-browser-extension/issues
