---
title: "Install the Linode CLI on Linux via Snap"
date: 2018-10-23T15:30:00-04:00
author: FelicianoTech
categories:
  - "Software"
tags:
  - "linode"
  - "linode-cli"
---

If you run a Linux distribution (distro) and you want to install the brand new Linode CLI, here's an easy and safe way to do so via a snap package.

<!--more-->

Back in 2017 Linode [announced their new v4 API][linode-api-post].
This new API (still in development I believe) puts the old one to shame.
It's much more "RESTful" than the old one and enables many more features that the old one simply didn't have.

Building on the shoulders of the new API came the new [Linode Developer Website][linode-dev-site], the new [Linode Manager Preview][linodians-manager-preview] available at <https://cloud.linode.com>, and of course, the new Linode CLI.

The new Linode CLI, written in Python, is very useful.
Its features and how to use them are detailed via [Linode Docs][docs].
While it can be installed via `pip`, if you don't already have `pip` installed or want a more secure way to run the CLI, you can install it via a snap.

You can install the `linode-cli` via snap for Ubuntu 16.04, Ubuntu 18.04+, elementary OS 5, Debian 9+, Fedora 28+, and more:

```bash
sudo snap install linode-cli
```

As with all snaps, it will be auto-updated and sandboxed from the rest of your system meaning secure.
More information on why you should be using snaps [here][why-snaps].


The source for this snap can be found [here][gh-linode-cli-snap] while the source for Linode's CLI itself can be found [here][gh-linode-cli].



[linode-api-post]: https://www.linode.com/community/questions/11221/linode-rest-api-v4-early-access
[linode-dev-site]: https://developers.linode.com/
[linodians-manager-preview]: https://linodians.com/blog/new-linode-manager-preview/
[docs]: https://www.linode.com/docs/platform/api/using-the-linode-cli/
[why-snaps]: https://www.fossmint.com/what-are-ubuntu-snaps-and-how-are-they-important/
[gh-linode-cli-snap]: https://github.com/felicianotech/linode-cli-snap
[gh-linode-cli]: https://github.com/linode/linode-cli
