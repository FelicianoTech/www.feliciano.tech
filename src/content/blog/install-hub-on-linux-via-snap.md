---
title: "Install hub on Linux via Snap"
date: 2018-10-04T21:30:00-04:00
author: FelicianoTech
---

`hub` is a command-line tool that wraps Git in order to extend it with extra features and commands that make working with GitHub easier.
You can learn more about `hub` on its [homepage][hub].

<!--more-->

I came across this tool and thought it was pretty cool and useful so I decided to "snap it".
Snaps allow you to install software on various Linux distributions with a single package.
They automatically update as well meaning you're always running fresh software.

The source for this snap can be found [here][gh-hub-snap].
You can install `hub` via snap for Ubuntu 16.04, Ubuntu 18.04+, elementary OS 0.4+, Debian 9+, Fedora 28+, and more:

```bash
sudo snap install --classic hub
```



[hub]: https://hub.github.com/
[gh-hub-snap]: https://github.com/felicianotech/hub-snap
