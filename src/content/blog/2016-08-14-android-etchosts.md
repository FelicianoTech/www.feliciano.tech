---
title: Editing Android’s Hosts File
author: FelicianoTech
date: 2016-08-14T18:14:59+00:00
url: /blog/android-etchosts/
dsq_thread_id:
  - 5065580853
categories:
  - Android
  - Development
tags:
  - android
  - hosts

---
Whenever I&#8217;m developing a website I frequently like to test my work on an actual mobile device. As great as [Chrome Developer Tools][1] is, nothing beats the feel of a real device.

Adding a domain name to my Nexus 6P&#8217;s `/etc/hosts` file didn&#8217;t seem to do anything. Android was not resolving my domain and I was getting nowhere. It took me awhile to figure out this little tip:

In order to get `/etc/hosts` to work on Android, the file needs to have a trailing newline character (Unix style not Windows style). Meaning the file needs to end in `\n`.

This took me a second to figure out but once I did that, the hosts file was working, even without restarting the phone as some sites suggest.

 [1]: https://developer.chrome.com/devtools