---
title: "How to Install Go on Linux or macOS"
author: FelicianoTech
date: 2024-07-10T18:00:00-04:00
tags:
  - go
  - golang
leadIn: "Most of my blog posts are for future me when I forget something. This is no exception. Here are a few ways to install Go."
---

The official [Go (Golang) website](https://go.dev) provides downloadable binaries for Go as well as shell commands, but it's only partially helpful and doesn't offer any other options.
Here are a few ways you can install Go on your machine.
I wrote a similar post on [how to do this for Raspberry Pi OS](/blog/install-go-on-raspberry-pi-os/).

<!--more-->

This post covers the ["manual way"](#the-manual-way), [Snap](#snap), and [Homebrew](#homebrew).


## The Manual Way

This method applies to most Linux and macOS machines for the broadest range of CPUs.
You'll want to find your download URL from the Go website or fill in the blanks of this URL:

`https://go.dev/dl/go<version>.<os>-<arch>.tar.gz`

- `<version>` is the Go version
- `<os>` is 'linux' or 'darwin' if you have Linux or macOS respectively
- `<arch>` is 'amd64', 'arm64', etc, based on your CPU.

Here's an example of the one-liner that will install or replace the Go version you have on your machine:

```bash
sudo rm -rf /usr/local/go && curl -sSL "https://go.dev/dl/go1.22.5.linux-amd64.tar.gz" | sudo tar -xz -C /usr/local
```

Let's break this down so we can understand what each part does:

- `sudo rm -rf /usr/local/go` - this deletes the existing installation of Go, if there was one. This is important because a Go installation is a directory of many, many files. Saving a new Go installation on top of an existing one can cause very weird, unintentional issues.
- `curl -sSL "https://go.dev/dl/go1.22.5.linux-amd64.tar.gz"` - this downloads the Go installation as a tarball from the official Go website. Currently this line specifically downloads Go v1.22.5 compiled for the amd64 architecture. Those parts of the URL can be changed.
- `| sudo tar -xz -C /usr/local` - this pipes the downloaded tarball from `curl` to tar, and extracts it to where it needs to be on the filesystem.

We're not done just yet. Go's bin directory needs to be added to your PATH so that binaries built and "installed" by Go can be easily found and run.
This step is only required on the first installation.

```bash
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile   # For Bash users
source $HOME/.profile                                          # For Bash users

fish_add_path /usr/local/go/bin                                # For FiSH users
```


## Snap

[I'm no longer a fan of Snaps](/blog/breaking-up-with-snap/), but if you are, it does make installing & updating Go extremely easy.
Snap doesn't support macOS but Ubuntu and most Linux distributions work as long as `snap`/`snapd` is installed.

```bash
sudo snap install --classic go
```

That's it. Easy.
Most snaps have channels that allow you to track different releases for a project.
The Go snap is one of these.
This enables you always to run the latest Go release (snaps update automatically) or stick to the Go v1.22 channel and get those releases but not bump to v1.23 when it comes out next month.
Pretty neat. You can view the channels available by running:

```bash
snap info go
```


## Homebrew

As far as I'm concerned, any developer on macOS should already have Homebrew and its `brew` command installed.
This method should also apply to Linux but I personally have never run Homebrew on a Linux machine.
(I should test it out one day).

The `brew` installation of Go will be similar to `snap`.
You can install Go with one line like so:

```bash
brew install go
```

This will always give you the latest version.
Like `snap`, you can stick to specific minor versions but this would need to be done with the install command.
For example, to stick to v1.22 releases only, you can run:

```
brew install go@1.22
```


## Test Installation

After installation, you can check if it works with the industry gold standard test; Run the version command. 😀

```bash
go version
```

If you get output with the Go version you expected, it works!

I also suggest making sure Go's bin directory is correctly in your `PATH`.
The best way to do this is to install something with Go and then try to run that binary directly.
For this example, let's install my favorite go test runner, [GoTestSum](https://github.com/gotestyourself/gotestsum).

```bash
go install gotest.tools/gotestsum@latest
gotestsum --help
```

If GoTestSum's help text prints out, your Go installation works properly.
Now GO build something.
