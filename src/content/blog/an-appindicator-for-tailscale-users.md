---
title: "An AppIndicator for Ubuntu Tailscale Users"
author: FelicianoTech
date: 2020-10-07T18:30:00-04:00
categories:
  - "Software"
tags:
  - tailscale
  - ubuntu
  - appindicator
feature: "tailscale-appindicator-screenshot.png"
---

I recently became a Tailscale user and was absolutely floored.
It's powered by WireGuard and is literally the simplest VPN I've ever used.
In fact, I didn't even realize it was running when I installed it.
I was waiting for a ton of config, an error, etc.
Nothing, it was running and just worked.

I wanted to make it easier to see that it was running and get my Tailscale IP address at a glance so I created an Ubuntu AppIndicator.

<!--more-->

This Tailscale AppIndicator is fairly basic as of now (I just made it) but I will add features to it as I go.
Please let me know if you'd like to see something added. For now, it shows you your device's Tailscale IP, if you're connected or not, and quick links to the Admin and Docs sites.

If you have feature requests, comments, bugs to report, etc please check out the [GitHub repository][gh-repo].
It's written in Go, distributed as a deb, and is open source (MIT licensed).

You can learn more and contribute at its [GitHub Repository][gh-repo].



[gh-repo]: https://github.com/felicianotech/tailscale-appindicator
