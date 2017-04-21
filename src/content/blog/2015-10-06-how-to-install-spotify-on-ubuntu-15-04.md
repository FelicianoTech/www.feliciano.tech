---
title: How to Install Spotify on Ubuntu 15.04/15.10
author: FelicianoTech
date: 2015-10-06T18:59:22+00:00
url: /blog/how-to-install-spotify-on-ubuntu-15-04/
dsq_thread_id:
  - 4200281674
categories:
  - F/OSS
  - Linux
  - Ubuntu
tags:
  - spotify
  - ubuntu
  - ubuntu-15.04

---
_**Update:** This also works for Ubuntu 15.10_

I&#8217;m not a big fan of music streaming services. I prefer to buy and own my music. I&#8217;ve lived in New York for far too long to risk not having access to my music because I&#8217;m in a tunnel. I&#8217;ll occasionally use Pandora though because I&#8217;m a big fan of the <a href="https://en.wikipedia.org/wiki/Music_Genome_Project" target="_blank">Music Genome Project</a>.

People keep sending me links to Spotify however and I like it, a little. I found out that they have an Ubuntu desktop however. Now I like it a lot. Problem is, you need to do a little to get it to work.<!--more-->

Spotify provides <a href="https://www.spotify.com/us/download/linux/" target="_blank">instructions</a> on their website to get their desktop client to work on Linux-based systems. They specifically target however Ubuntu 14.04. If you&#8217;re reading this, you&#8217;re probably like me and run much newer releases. If you follow their instructions and try to start Spotify, nothing happens. Trying via the terminal will show that we&#8217;re missing a specific version of a certain library. Here&#8217;s how to install Spotify on Ubuntu 15.04 with Spotify&#8217;s instructions plus the extra steps needed:

<pre>sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys D2C19886
echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update
wget -P ~/Downloads http://ftp.au.debian.org/debian/pool/main/libg/libgcrypt11/libgcrypt11_1.5.0-5+deb7u3_amd64.deb
sudo dpkg -i ~/Downloads/libgcrypt11_1.5.0-5+deb7u3_amd64.deb
sudo apt-get install spotify-client</pre>

Enjoy your music.