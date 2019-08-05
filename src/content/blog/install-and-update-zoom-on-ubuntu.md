---
title: "How to Install & Update Zoom (Video Conferencing) on Ubuntu"
author: FelicianoTech
date: 2019-08-05T08:50:00-04:00
categories:
  - "How To"
tags:
  - "zoom"
  - "zoom-mgr"
  - "ubuntu"
---

Zoom provides a desktop Linux client but it's just a `.deb` file.
You need to install it and its dependencies as well as keep track of updates yourself.
To help with the first part, I've written blog posts on how to install Zoom for [Ubuntu 18.04][zoom-ubuntu1804] as well as [Ubuntu 19.04][zoom-ubuntu1904].
That didn't help me keep track of updates and I noticed I was quickly several versions behind.

To solve this problem, I wrote a little script called `zoom-mgr` (Zoom Manager).
It's a small Bash script that you can run from your home directory to easily install or update Zoom on Ubuntu.
You can check it out [on GitHub][gh-zoom-mgr].



[zoom-ubuntu1804]: https://www.feliciano.tech/blog/install-zoom-on-ubuntu-18.04/
[zoom-ubuntu1904]: https://www.feliciano.tech/blog/install-zoom-on-ubuntu-19.04/
[gh-zoom-mgr]: https://github.com/felicianotech/zoom-mgr
