---
title: "How to Install Zoom (Video Conferencing) on Ubuntu 18.04"
author: FelicianoTech
date: 2018-09-06T00:00:00-04:00
categories:
  - "How To"
tags:
  - ""
---

Here's how to install Zoom, a popular video chat software, on Ubuntu 18.04.

<!--more-->

```bash
wget -O /tmp/zoom.deb https://zoom.us/client/latest/zoom_amd64.deb
sudo apt update && sudo apt install libxcb-xtest0
sudo dpkg -i /tmp/zoom.deb
```

There's three steps:

1. Download the `.deb`, a package file for Ubuntu and Debian.
1. Install a missing dependancy package needed on Ubuntu 18.04.
1. Install the `.deb`.

You can also install the 32bit version by swapping "amd64" in the URL with "i386".
