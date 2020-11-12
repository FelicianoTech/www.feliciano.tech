---
title: "My November 2020 Linux Snap Package Metrics"
author: FelicianoTech
date: 2020-11-11T20:30:00-05:00
categories:
  - "foss"
tags:
  - snap
  - snapcraft
  - series
---

I maintain a several [Snap packages](/blog/what-are-linux-snap-packages-why-use-them/) (installable Linux software packages) and I've been very interested in the metrics that [Snapcraft][snapcraft] (the Snap Store) provides.
It's a (minor) indicator of how large the snap user base is (or at least growth) as well as how useful a snap may or may not be.
Plus, it's a nice feeling to see the usage of something I've made go up.
In October of 2018 I started this [Linux Snap Package Metrics](/blog/october-2018-snap-metrics/) series and I'm trying to report back every few months with the numbers.

Here's the metrics for snaps I maintain for the past month:

<!--more-->

| Snap | # Active Devices | % Change |
| --- | --- | --- |
| [circleci](https://Snapcraft.io/circleci) | 1,797 | <span style="color:green">+13.1%</span> |
| [cu-ddns](https://Snapcraft.io/cu-ddns) | 44 | <span style="color:red">-4.3%</span> |
| [gotham](https://Snapcraft.io/gotham) | 14 | <span style="color:green">+27.3%</span> |
| [hub](https://Snapcraft.io/hub) | 3,780 | <span style="color:red">-11.6%</span> |
| [linode-cli](https://Snapcraft.io/linode-cli) | 124 | <span style="color:green">+3.3%</span> |
| [para](https://Snapcraft.io/para) | 16 | <span style="color:green">+300.0%</span> |
| [pocket-casts](https://Snapcraft.io/pocket-casts) | 788 | <span style="color:green">+4.1%</span> |
| [scc](https://Snapcraft.io/scc) | 530 | <span style="color:green">+18.3%</span> |
| [sonar](https://Snapcraft.io/sonar) | 79 | <span style="color:green">+618.2%</span> |
| [zsync](https://Snapcraft.io/zsync) | 222 | <span style="color:red">-0.9%</span> |

There's a couple items of note here:

- I'm starting to see a regular drop in usage of `hub`. I attribute this to GitHub launching their alternative and more "official" `gh` CLI. It's a shame but that's life.
- Two of my projects, [para](/blog/introducing-para/) and [Sonar](https://github.com/felicianotech/sonar) had huge jumps. I'm not too sure why. They're newer projects so maybe it just took time for search engines to find it?

<!--There's a single item of note here:-->



[snapcraft]: https://Snapcraft.io
