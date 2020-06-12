---
title: "Here's How to Restore Older Versions With Linux Snaps"
date: 2020-06-12T14:30:00-04:00
author: FelicianoTech
categories:
  - "Projects"
tags:
 - snap
 - ubuntu
 - linux
---

Here's a quick one.
Sometimes when using software you may want to use an older release.
Perhaps there's a regression in the newest release or maybe you want to test something specifically with an older version.
Either way, there's an easy way to do this when that software is installed via a Linux snap.

<!--more-->

To go back to the last version of the software you used before the update, you can run:

```bash
sudo snap revert <snap-name>
```

What if you want to go further back? A specific release?
First you can list all revisions available, then revert to a specific revision:

```bash
snap list <snap-name>  --all
sudo snap revert <snap-name> --revision=<revision-number>
```
