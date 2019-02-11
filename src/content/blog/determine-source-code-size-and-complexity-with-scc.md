---
title: "Determine Source Code Size and Complexity with SCC"
author: FelicianoTech
date: 2019-02-11T10:00:00-05:00
tags:
  - "scc"
  - "snap"
  - "snapcraft"
---

I came across a pretty cool tool I wanted to share called Sloc, Cloc and Code or rather, SCC.
It describes itself as: "scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go".

I'm working on a project with a very old codebase.
I knew there was going to be a lot of code, but I wanted to better understand what I was working with.
`scc` allows me to see each programming language that the code uses, number of lines, comments, files, etc.
It's a very fast and useful tool.

Here's what it looks like and how to install and use it.

<!--more-->

## SCC

`scc` is written in Go by Ben Boyter.
The project's GitHub repository can be found [here](https://github.com/boyter/scc).

To show you what `scc` can do, I ran it on the source code for the [CircleCI CLI](https://github.com/CircleCI-Public/circleci-cli):

```
~/R/C/circleci-cli (master|✔) $ scc .
───────────────────────────────────────────────────────────────────────────────
Language                 Files     Lines     Code  Comments   Blanks Complexity
───────────────────────────────────────────────────────────────────────────────
Go                          48     10312     8246       345     1721        701
YAML                        40      1405     1343        15       47          0
JSON                        14      1207     1205         0        2          0
Markdown                     7       400      246         0      154          0
Shell                        4       129       70        28       31          2
License                      3       234      196         0       38          0
Dockerfile                   1         3        2         0        1          0
Makefile                     1        53       41         0       12          1
gitignore                    1        23       17         3        3          0
───────────────────────────────────────────────────────────────────────────────
Total                      119     13766    11366       391     2009        704
───────────────────────────────────────────────────────────────────────────────
Estimated Cost to Develop $346,723
Estimated Schedule Effort 10.258514 months
Estimated People Required 4.003627
───────────────────────────────────────────────────────────────────────────────
```

Pretty cool right?
For the work it has to do, it's pretty damn fast and supports over 200 languages.
Try it out!


## Install SCC

### Linux Snap (Snapcraft)

The easiest way to use `scc` on Linux is via a Linux Snap which I have created myself.
[Not familiar with Snaps?](https://www.feliciano.tech/blog/what-are-linux-snap-packages-why-use-them/)

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/scc)

or

```
sudo snap install scc
```

### macOS, Windows, and Linux

`scc` has binaries available on their [GitHub Releases page](https://github.com/boyter/scc/releases).


## Contribution

`scc` is written in Go and licensed under the MIT license as well as the Unlicense.
The repository can be found [here](https://github.com/boyter/scc).

The `scc` snap is licensed under the MIT license and the repository can be found [here](https://github.com/felicianotech/snap-scc).
