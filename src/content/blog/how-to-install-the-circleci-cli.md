---
title: "How to Install the CircleCI CLI"
author: FelicianoTech
date: 2018-09-19T23:00:00-04:00
categories:
  - "How To"
tags:
  - "circleci"
---
CircleCI Docs and the CLI repo both contain install instructions but with lots of other info.
Here's simply how to install the CircleCI CLI:

- [Ubuntu](/blog/how-to-install-the-circleci-cli/#install-on-ubuntu)
- [macOS](/blog/how-to-install-the-circleci-cli/#install-on-macos)
- [elementary OS and Debian](/blog/how-to-install-the-circleci-cli/#install-on-elementary-os-and-debian)
- [Fedora](/blog/how-to-install-the-circleci-cli/#install-on-fedora)
- [Other Unix-like OSs](/blog/how-to-install-the-circleci-cli/#install-on-other-unix-like-operating-systems)
- Windows is not supported

<!--more-->

## Install on Ubuntu
*Ubuntu 16.04, Ubuntu 18.04+*

```bash
sudo snap install circleci docker
sudo snap connect circleci:docker docker
```

*Note: With snap packages, the docker command will use the Docker snap, not any version of Docker you may have previously installed. For security purposes, snap packages can only read/write files from within $HOME.*


## Install on macOS
*macOS 10.12+*

```bash
brew install circleci
```


## Install on elementary OS and Debian
*elementary OS 0.4+ and Debian 9+*

### Install Snapd (if needed)

```bash
sudo apt install snapd
sudo snap install core   # On Debian only
```

### Then install the snap

```bash
sudo snap install circleci docker
sudo snap connect circleci:docker docker
```


## Install on Fedora
*Fedora 28+*

### Install Snapd (if needed)

```bash
sudo dnf install snapd
```

### Then install the snap

```bash
sudo snap install circleci docker
sudo snap connect circleci:docker docker
```
```bash
```


## Install on other Unix-like Operating Systems

```bash
curl -o /usr/local/bin/circleci https://circle-downloads.s3.amazonaws.com/releases/build_agent_wrapper/circleci
chmod +x /usr/local/bin/circleci
```
