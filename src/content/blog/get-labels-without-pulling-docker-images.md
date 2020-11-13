---
title: "Get Labels Without Pulling Docker Images"
author: FelicianoTech
date: 2020-11-12T20:30:00-05:00
categories:
  - "Software"
tags:
  - "sonar"
  - "docker"
  - "docker-hub"
---

For whatever reason, there will be occasions when you want to view the labels for a Docker image.
Typically you would run `docker inspect` to do this however that only works for local images.
Here's what you can do to view the labels for remote Docker images.

<!--more-->

To view the labels for a Docker image, the image needs to be pulled first.
For example, to view the labels for an image you already have locally:

```bash
docker inspect <MY_IMAGE> | jq -r '.[0].Config.Labels'
```

where `<MY_IMAGE>` is the name and tag of the local image.


## Retrieving labels for remote Docker images

You can get the labels for a remote Docker image (on Docker Hub) via the registry API.
This is a few involved steps including getting a token, then retrieving the latest manifest for that image, getting the digest SHA, and then using that to get a map of labels.
Or you can use a one-liner with a tool called Sonar.

[I introduced Sonar](/blog/introducing-sonar/) a few months ago and with the v0.10.0 release labels can now be listed for a remote image.
You can list all labels for an image or just a single one by specifying the key.
Here's an example using the GoReleaser Docker image:

```bash
$ sonar labels list goreleaser/goreleaser:latest

org.opencontainers.image.created: 2020-11-12T17:17:03Z
org.opencontainers.image.source: https://github.com/goreleaser/goreleaser
org.opencontainers.image.version: 0.147.0
com.github.actions.color: blue
com.github.actions.icon: terminal
com.github.actions.name: goreleaser
maintainer: Carlos Becker <goreleaser@carlosbecker.com>
repository: http://github.com/goreleaser/goreleaser
com.github.actions.description: Deliver Go binaries as fast and easily as possible
homepage: http://goreleaser.com
org.opencontainers.image.name: goreleaser
org.opencontainers.image.revision: c39c8208f094ab854e4e7c8d70d8b74fef85fcb5

$ sonar labels get goreleaser/goreleaser:latest maintainer

maintainer: Carlos Becker <goreleaser@carlosbecker.com>
```

I hope this is helpful.
You can learn how to download and install Sonar and contribute at its [GitHub Repository][gh-repo].



[gh-repo]: https://github.com/felicianotech/sonar
