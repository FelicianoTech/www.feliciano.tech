---
title: 'How to Install Docker on Ubuntu 19.04 "Disco"'
author: FelicianoTech
date: 2019-06-01T01:00:00-04:00
categories:
  - "tutorial"
tags:
  - "docker"
  - "ubuntu"
  - "ubuntu-1904"
---

I haven't blogged in two months.
I'll mark my return with a short but useful post.

I installed Ubuntu 19.04 on my new desktop (post coming soon) and ran into a snag.
Installing Docker by following [their docs](https://docs.docker.com/install/linux/docker-ce/ubuntu/) failed.
Docker (the company) doesn't have a build of Docker (the product) available for Ubuntu 19.04 "Disco Dingo" yet.

So my options were:

1. Just use the distro provided package of Docker. It's old, Docker v18.09.
1. Use the Snap package. It's even older at v18.06.
1. Install the testing version of Docker at v19.03.0-beta5. This is what I'll do below.

## Here's how to install Docker on Ubuntu 19.04 (as of June 1st, 2019):

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu disco stable test"
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
sudo adduser $(whoami) docker  
```

Once Docker builds a package for Ubuntu 19.04, we won't have to install the testing/beta anymore.
Until then, this is how to get Docker installed.
