---
title: "What Are Linux Snap Packages? Why Use Them?"
author: FelicianoTech
date: 2018-11-14T10:00:00-05:00
tags:
  - "snap"
  - "snapcraft"
---

I'm been using Snap packages to install software on my laptop more and more.
They're extremely useful and more people should be using them though not everyone understands them yet.
Here's a quick post on what they are and why you'd want to use them.

<!--more-->

## What are Linux Snap packages?

Snap is a new package manager for Linux, an alternative to Apt, rpm, yum, etc.
I specifically use the word Linux as opposed to any one distro because they are designed to run on many, many distributions.
You can install Snap packages on Ubuntu, various Ubuntu flavors, Debian, elementary OS, Fedora, Linux Mint, and more.

Inspired by how applications are installed on mobile operating systems such as Android and iOS, snaps are installable apps, CLIs, GUIs, etc that are installed from the [Snap Store](https://snapcraft.io/store) in a managed and secure fashion.
For example, on the 10+ distros that are supported, here's how you would install [Docker](https://www.docker.com/) or the [Linode CLI](https://www.linode.com/docs/platform/api/using-the-linode-cli/):

```
sudo snap install docker
sudo snap install linode-cli
```


## Why use Snap packages?

These features are why I think snap packages are great:

### Auto-updating

Snap packages automatically update (you can change this).
This enables you to always run the latest version.
You don't need to work about dependency conflicts either when updating since snap packages are isolated.
Which brings us to the next feature.

### Secure

Snap packages are much more secure than their non-snap counterparts.
How? Well auto-updates mean security issues are patched quickly but more importantly, snaps are isolated from the rest of your system.
They have their own file system and can't interfere with other apps on your machine.
Even if you purposely installed a malicious app, it can't escape outside of its silo.
Nothing is ever 100% secure of course, but using snaps means you're more protected than you were before.

###  Channels

Made popular by Google Chrome (and now the Google Play Store), snaps support channels.
Snaps let you install the stable version of an app but let you easily switch to a beta or nightly channel (if the app has one) if you desire.
You can switch back and forth between channels whenever you want too, lots of flexibility there.

### Packaging is easy for developers

Why does this matter to you?
Many proprietary software (and some open source ones) don't provide packages for Linux.
With the Linux market fragmented, they may just provide an Ubuntu package or none at all.
Snaps are easy to make and target multiple distros making it easier for developers to actually deliver Linux users the software everyone else gets to use.
This means software such as Slack, Spotify, Skype, Visual Studio Code (VS Code), Discord, and more are now easily available on Linux. :tada:


## Start Installing Snaps

I've made several snaps myself:

- [Linode CLI](/blog/install-linode-cli-on-linux-via-snap/)
- [hub](/blog/install-hub-on-linux-via-snap/) (GitHub's CLI)
- [zsync](/blog/test-nightly-isos-with-zsync/)
- [CircleCI CLI](https://www.feliciano.tech/blog/how-to-install-the-circleci-cli/)

You can find the complete library of snaps in the [Snap Store](https://snapcraft.io/store) and on Ubuntu, in the Software Center.

`snap info <snap-name>` can be run to learn more about any specific snap right from your terminal.
