---
title: "Introducing para: A package metrics tool"
author: FelicianoTech
date: 2020-08-11T12:00:00-04:00
categories:
  - "Software"
tags:
  - "halseylabs"
  - "para"
---

`para` is short for Packages and Releases Analytics.
It's a simple tool to solve a simple problem for those who release software via Snaps, Brew, GitHub Releases, etc.
Metrics and availability.

<!--more-->

If you release software via Brew or GitHub Releases, `para` lets you view metrics from those platforms so you can see how well those packages are doing.
Here's an example of pulling the metrics for the static site generator [Gotham](https://github.com/gothamhq/gotham):

```bash
Brew data:
The number of installs in the last 30 days is: 4

GitHub data:
v0.6.0:
gotham-v0.6.0-linux-amd64-checksum.txt: 0
gotham-v0.6.0-linux-amd64.tar.gz: 2
gotham-v0.6.0-macos-amd64-checksum.txt: 0
gotham-v0.6.0-macos-amd64.tar.gz: 3
v0.5.0:
gotham-v0.5.0-linux-amd64-checksum.txt: 0
gotham-v0.5.0-linux-amd64.tar.gz: 2
gotham-v0.5.0-macos-amd64-checksum.txt: 0
gotham-v0.5.0-macos-amd64.tar.gz: 0
```

Don't have a software project yet? No worries, `para` is still helpful for you.
When you're still in the naming phase, `para check` will check if a name is available on Snap, Brew, Chocolatey, and NPM.
This way you can easily find a name that's available without hacking to tack on a username or some other weird suffix to your project's name.

`para` is still very much a work-in-progress with only an unpolished v0.1.0 release so far.
Snap metrics isn't yet supported but it's on the roadmap.
It's written in Go, packed as a raw binary, deb and snap, currently supports Linux and macOS on amd64, and is open source (MIT licensed).

You can learn more and contribute at its [GitHub Repository](https://github.com/halseylabs/para).
