---
title: How to install Google Chrome in Ubuntu 13.04
author: FelicianoTech
date: 2013-04-27T06:12:25+00:00
url: /blog/how-to-install-google-chrome-in-ubuntu-13-04/
dsq_thread_id:
  - 4085922540
categories:
  - Ubuntu
tags:
  - google-chrome
  - how-to
  - ubuntu-13.04

---
Will the launch of Ubuntu 13.04 now upon us, some people have realized that Google Chrome doesn&#8217;t correctly install in a fresh copy of 13.04. This is due to a missing library that Chrome  currently depends on, _libudev0_. On the issue, the release notes for Ubuntu 13.04 says:

> The official Google Chrome installer is built against libudev0 instead of the libudev1 available in Ubuntu 13.04. This should be fixed with Chrome 28 which is still in testing. We recommend that you install the open source chromium-browser from the Ubuntu Software Center until Google releases the fix for this issue. (Google: #226002).

Until Google releases a build of Chrome that fixes this issue (rumor is Google Chrome v28 should have the fix), you can simply install the missing library. In Terminal, type and enter:

<pre>sudo apt-get install libudev0</pre>

If you prefer to install the libudev0 library via a Debian package, you can get the 32-bit package [here][1] and the 64-bit package [here][2].

With almost identical features, support for Unity&#8217;s webapps feature, and pure open-source goodness, you can also heed Canonical&#8217;s suggestion and install Chromium instead.

 [1]: https://launchpad.net/ubuntu/+source/udev/175-0ubuntu19/+build/4325790/+files/libudev0_175-0ubuntu19_i386.deb "libudev0 32-bit"
 [2]: https://launchpad.net/ubuntu/+source/udev/175-0ubuntu19/+build/4325788/+files/libudev0_175-0ubuntu19_amd64.deb "libudev0 64-bit"