---
title: "How to Install Go On Raspberry Pi OS"
author: FelicianoTech
date: 2023-08-09T01:00:00-04:00
categories:
  - "How to"
tags:
  - go
  - golang
  - raspberry-pi
  - raspberry-pi-os
---

Working on homelab tasks at home, I had the need to compile some Go (Golang) code on a Raspberry Pi.
I've found varying advice online and some involved installing a bunch of extra tools.
Instead, I decided to whip up a quick shell one-liner that installs Go directory from the official <Go.dev> website for the Raspberry Pi.

*Please note, this is for the Raspberry Pi 4 running Raspberry Pi OS 64-bit.*

```bash
sudo rm -rf /usr/local/go && curl -sSL "https://go.dev/dl/go1.21.0.linux-arm64.tar.gz" | sudo tar -xz -C /usr/local
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile   # For Bash users
source $HOME/.profile                                          # For Bash users
fish_add_path /usr/local/go/bin                                # For FiSH users
```

Since I like to explain things, let's break down the one-liner so we can understand what each part does:

- `sudo rm -rf /usr/local/go` - this deletes the existing installation of Go, if there was one. This is important because a Go installation is a directory of many, many files. Saving a new Go installation on top of an existing one can cause very weird, unintentional issues.
- `curl -sSL "https://go.dev/dl/go1.21.0.linux-arm64.tar.gz"` - this downloads the Go installation as a tarball from the official Go website. Currently this line specifically downloads Go v1.21.0 compiled for the arm64 architecture. Those parts of the URL can be changed to change the version or arch.
- `| sudo tar -xz -C /usr/local` - this pipes the downloaded tarball from `curl` to tar, and extracts it to where it needs to be on the filesystem.
