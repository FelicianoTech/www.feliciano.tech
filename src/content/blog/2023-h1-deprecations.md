---
title: "Deprecating Zoom Manager & my AWS Docker Image"
author: FelicianoTech
date: 2023-01-12T00:00:00-05:00
---

Unfortunately I am deprecating two projects of mine, both of which have many users.
The good news is that I have chosen great alternate solutions for each.

<!--more-->

## Deprecating Zoom Manager (`zoom-mgr`)

I launched Zoom Manager back in [April 2020](/blog/zoom-manager-0.5.0-install-and-update-zoom-on-ubuntu/).
It was a very simply project to solve a simple problem.
Like most commercial software vendors, Zoom doesn't give the same effort to Linux users as other OSs.
On Ubuntu Zoom doesn't manage updates for itself.
Zoom Manager was a small Bash script to manage installing and updating Zoom on an Ubuntu system.

I'm deprecating the project since I've found one that does the job better.

My recommendation is to replace Zoom Manager with a tool called [deb-get by Martin Wimpress](https://github.com/wimpysworld/deb-get), an Ubuntu veteran.
Not only does `deb-get` cleanly handle the installation and updates of Zoom, but it does so for many, many other projects as well.


## Deprecating my AWS Docker Image (`cibuilds/aws`)

I've been working at CircleCI now for many, many years.
When we launched CircleCI 2.0, Docker images became a crucial part of how we did business.
A big missing piece of software was the AWS CLI.
So I created a lightweight build system and several Docker images including [cibuilds/aws](https://github.com/cibuilds/aws).
The build system was adapted and now in use at CircleCI.

Since then, we now have an [official CircleCI AWS image](https://github.com/CircleCI-Public/cimg-aws) which means my own private image is no longer needed.
If you use my image, I would strongly suggest switching over to the CircleCI one, `cimg/aws`.
Same purpose, better supported, and will likely be a bit faster due to CircleCI's caching at scale.

Thanks for tagging along.
