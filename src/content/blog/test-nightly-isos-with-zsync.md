---
title: "Install zsync on Linux via Snap"
date: 2018-10-10T19:00:00-04:00
author: FelicianoTech
categories:
  - "Software"
tags:
  - "zsync"
---

`zsync` is a tool that enables incremental downloads.
Useful when frequently downloading large files where only parts of the file change.
Many of us like to test nightly ISO images of our favorite Linux distributions.
This is a perfect use-case of `zsync`.

You can learn more about `zsync` via this [OMG! Ubuntu article][zsync].

<!--more-->

I've been using this tool for many years now and decided to "snap it".
Snaps allow you to install software on various Linux distributions with a single package.
They automatically update as well meaning you're always running fresh software.

The source for this snap can be found [here][gh-zsync-snap].
You can install `zsync` via snap for Ubuntu 16.04, Ubuntu 18.04+, elementary OS 0.4+, Debian 9+, Fedora 28+, and more:

```bash
sudo snap install zsync
```



[zsync]: https://www.omgubuntu.co.uk/2013/01/how-to-update-an-ubuntu-daily-iso-using-zsync
[gh-zsync-snap]: https://github.com/felicianotech/zsync-snap
