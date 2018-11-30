---
title: "I Made a Pocket Casts Desktop App for Linux"
author: FelicianoTech
date: 2018-11-30T11:15:00-05:00
tags:
  - "pocket-casts"
  - "snap"
  - "snapcraft"
feature: "pocket-casts-desktop.png"
---

I'm a long-time Pocket Casts user.
Not only do I love the Android app (it's one of the few I pay for), I use to love listening to [Russell Ivanovic](https://twitter.com/rustyshelf), the creator of Pocket Casts, talk about it on the [Material podcast](https://www.relay.fm/material).

It's everywhere - my Android phone, Android tablet, Google Cast, and even in my car with Android Auto.
Well, almost everywhere.
As most companies do, they neglected to make a desktop app for Linux (they recently made one for Windows).

I decided to whip something up.

<!--more-->

## The Pocket Casts Linux Desktop app

Full disclosure, this isn't a proper native Linux app (Pocket Casts doesn't have public APIs) and I have no affiliation with them.
Since Pocket Casts has a [very usable webapp](https://play.pocketcasts.com/web), I decided to take that and package it for desktop using Electron.
It works pretty well so far, try it out!
The install methods and screenshots are below.

## Install Pocket Casts Desktop

Right now I have only packaged this app for Linux and it's available via Snap, .deb, and the Ubuntu Software store.
You can also find the code up [on GitHub](https://github.com/felicianotech/pocket-casts-desktop-app).

### Linux Snap (Snapcraft)

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/pocket-casts)

or

```
sudo snap install pocket-casts
```

### Ubuntu Software store

Just open the Ubuntu Software app on your Ubuntu desktop and search for "Pocket Casts".

### .deb

The `.deb` files are available via [GitHub Releases](https://github.com/felicianotech/pocket-casts-desktop-app/releases).

### Other OSs

Let me know in a GitHub Issue or comment below and I'll see what I can do.


## Screenshots

{{< figure src="/assets/img/article/pc-screenshot-fullscreen-3200x1800.png" >}}

{{< figure src="/assets/img/article/pc-screenshot-new-releases-2000x1314.png" >}}
