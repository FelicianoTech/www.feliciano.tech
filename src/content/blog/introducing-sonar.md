---
title: "Introducing Sonar: A Docker / Docker Hub utility"
author: FelicianoTech
date: 2020-08-28T12:15:00-04:00
categories:
  - "Software"
tags:
  - "sonar"
  - "docker"
  - "docker-hub"
---

Sonar is a Docker utility tool useful for when you want to learn more about your Docker images.
You can list and compare Docker images, their tags, and pull metrics from Docker Hub.

<!--more-->

If you manage Docker images, particularly on Docker Hub, Sonar allows you to quickly query information about those images and set data.
You can set an image's Docker Hub description and readme right from the command-line, get info on number of pulls and stars, and even delete Docker tags from Docker Hub in-mass if needed.

Here's an example of using Sonar to delete tags on Docker Hub that are less than 24 hours old:

```bash
$ sonar tags delete felicianotech/test --field=date --lt=24h

You are about to permanently delete 3 of 3 tags. Continue? [y/yes/n/no]
```

Here's an example of listing all tags of an image with their total size:

```bash
$ sonar tags list hubci/gotham --sum-size

0.6.0-node
0.6.0
0.6-node
0.6
0.5.0-node
0.5.0
0.5-node
0.5
0.4.0-node
0.4.0
0.4-node
0.4
0.3.0-node
0.3.0
0.3-node
0.3
0.2.2-node
0.2.2
0.2-node
0.2
0.2.1-node
0.2.1
0.2.0-node
0.2.0
0.1.0-node
0.1.0
0.1-node
0.1
====================
Tags: showing 28 of 28
Total size: 10.1 GiB
```

Sonar is fairly new and under active development.
If you have feature requests, comments, bugs to report, etc please check out the [GitHub repository][gh-repo].
It's written in Go, packed as a raw binary, deb and snap, and supports Linux, macOS, and Windows on amd64, and is open source (MIT licensed).

You can learn more and contribute at its [GitHub Repository][gh-repo].



[gh-repo]: https://github.com/felicianotech/sonar
