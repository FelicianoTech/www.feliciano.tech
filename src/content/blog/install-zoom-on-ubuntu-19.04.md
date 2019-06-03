---
title: "How to Install Zoom (Video Conferencing) on Ubuntu 19.04"
author: FelicianoTech
date: 2019-06-03T09:00:00-04:00
categories:
  - "How To"
tags:
  - "zoom"
  - "ubuntu-1904"
  - "ubuntu"
---

Here's how to install Zoom, a popular video chat software, on Ubuntu 19.04 "Disco".

<!--more-->

```bash
wget -O /tmp/zoom.deb https://zoom.us/client/latest/zoom_amd64.deb
sudo apt update && sudo apt install libgl1-mesa-glx libxcb-xtest0
sudo dpkg -i /tmp/zoom.deb
```

There's three steps:

1. Download the `.deb`, a package file for Ubuntu and Debian.
1. Install the two missing dependency packages needed on Ubuntu 19.04.
1. Install the `.deb`.

You can also install the 32bit version by swapping "amd64" in the URL with "i386".
