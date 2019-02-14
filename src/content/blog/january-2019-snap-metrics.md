---
title: "My January 2019 Linux Snap Package Metrics"
author: FelicianoTech
date: 2019-02-14T09:00:00-05:00
categories:
  - "foss"
tags:
  - snap
  - snapcraft
  - series
---

I maintain a few Snap packages (installable Linux software packages) and I've been very interested in the metrics that [Snapcraft][snapcraft] (the Snap Store) provides.
It's a (minor) indicator of how large the snap user base is (or at least growth) as well as how useful a snap may or may not be.
In October I started this [Linux Snap Package Metrics](/blog/october-2018-snap-metrics/) series and I'll be updating every month with the numbers until someone tells me otherwise :smile:.

*P.S. I missed a month, but I had a baby so that's probably a good excuse.*

Here's the metrics for snaps I maintain for the past month:

<!--more-->

| Snap | # Active Devices | % Change | Top 3 Distros |
| --- | --- | --- | --- |
| [circleci](https://Snapcraft.io/circleci) | 696 | <span style="color:green">+9.95%</span> | Ubuntu, Linux Mint, elementary OS |
| [hub](https://Snapcraft.io/hub) | 760 | <span style="color:green">+306.42%</span> | Ubuntu, Linux Mint, Zorin |
| [linode-cli](https://Snapcraft.io/linode-cli) | 43 | <span style="color:green">+168.75%</span> | Ubuntu, Linux Mint, Arch |
| [pocket-casts](https://Snapcraft.io/pocket-casts) | 305 | <span style="color:green">+435.09%</span> | Ubuntu, elementary OS, Linux Mint |
| [scc](https://Snapcraft.io/scc) | 16 | n/a (new) | Ubuntu, Linux Mint |
| [zsync](https://Snapcraft.io/zsync) | 109 | <span style="color:green">+70.31%</span> | Ubuntu, Zorin |

There's a couple items of note here.

1. The `hub` snap exploded by 306%. It has overtaken the `circleci` snap as the most used.
2. The Pocket Casts snap also exploded by a gigantic 435%. I'm happy to see people finding use in it.
3. I've created a new snap, `scc`. You can learn more about it [here](https://www.feliciano.tech/blog/determine-source-code-size-and-complexity-with-scc/).



[snapcraft]: https://Snapcraft.io
