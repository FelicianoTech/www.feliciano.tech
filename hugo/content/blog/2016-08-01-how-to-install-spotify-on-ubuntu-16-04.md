---
title: How to Install Spotify on Ubuntu 16.04
author: FelicianoTech
date: 2016-08-01T14:57:22+00:00
url: /blog/how-to-install-spotify-on-ubuntu-16-04/
dsq_thread_id:
  - 5031404389
categories:
  - F/OSS
  - Linux
  - Ubuntu
tags:
  - spotify
  - ubuntu
  - ubuntu-16.04

---
**Update [Sept 19, 2016] &#8211; Spotify updated their Linux build (finally!) and it looks like these instructions are no longer needed. The [official instructions][1] should work now.**

Spotify provides [instructions][1] on their website to get their desktop client to work on Linux-based systems. However they specifically target Ubuntu 14.04. If you’re reading this, you’re probably like me and run much newer releases. If you follow their instructions and try to start Spotify, nothing happens. Trying via the terminal will show that we’re missing a specific version of a certain library. Here’s how to install Spotify on Ubuntu 16.04 with Spotify’s instructions plus the extra steps needed:

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys D2C19886
    echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
    sudo apt-get update
    wget -P ~/Downloads http://ftp.us.debian.org/debian/pool/main/libg/libgcrypt11/libgcrypt11_1.5.0-5+deb7u4_amd64.deb
    sudo dpkg -i ~/Downloads/libgcrypt11_1.5.*
    sudo apt-get install spotify-client
    

Enjoy your music.

 [1]: https://www.spotify.com/us/download/linux/