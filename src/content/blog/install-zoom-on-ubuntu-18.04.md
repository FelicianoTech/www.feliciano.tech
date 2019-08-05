---
title: "How to Install Zoom (Video Conferencing) on Ubuntu 18.04"
author: FelicianoTech
date: 2018-09-06T00:00:00-04:00
categories:
  - "How To"
tags:
  - "zoom"
  - "ubuntu"
  - "ubuntu-1804"
---

Here's how to install Zoom, a popular video chat software, on Ubuntu 18.04.

<!--more-->

**Update:** I created a script to make this even easier.
Please see [my new blog post](https://www.feliciano.tech/blog/install-and-update-zoom-on-ubuntu/).

---

```bash
wget -O /tmp/zoom.deb https://zoom.us/client/latest/zoom_amd64.deb
sudo apt update && sudo apt install libxcb-xtest0
sudo dpkg -i /tmp/zoom.deb
```

There's three steps:

1. Download the `.deb`, a package file for Ubuntu and Debian.
1. Install a missing dependency package needed on Ubuntu 18.04.
1. Install the `.deb`.

You can also install the 32bit version by swapping "amd64" in the URL with "i386".
