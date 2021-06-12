---
title: "Introducing arc: A Helpful CircleCI and GitHub tool"
author: FelicianoTech
date: 2021-06-12T16:00:00-04:00
categories:
  - "Software"
tags:
  - "arc"
  - "circleci"
  - "github"
---

I use CircleCI, GitHub, and git pretty much daily.
Even on the weekends.
So, I'm always coming up with ways I could make my life easier and small tasks faster.
This is where arc comes in.
Small features to make the daily workflow a little bit better.

<!--more-->

Today, arc is at v0.1.1 and does very little but I have big plans.
Currently, arc has the following features:

- Can open your current repository in CircleCI and/or GitHub in your browser
- Can give you the status page status of both CircleCI and GitHub. This is helpful when you think one of the services might be having a problem. You can check up on them without even leaving the terminal.
- Can tell you which orbs your CircleCI config is using.


## Roadmap

I plan to continually add features to arc as I come up with them.
Here's what I specially have in mind for the near future:

- Easy install CircleCI related git hooks. For example, I wrote [this blog post](https://circleci.com/blog/circleci-hacks-validate-circleci-config-on-every-commit-with-a-git-hook/) back in 2017 about automatically validating your CircleCI config on ever commit. arc will allow you to easily instal/until that git hook for you.
- Tell you if there's newer versions of orbs that you are using in your CircleCI config.
- Give you recommendations on improving your CircleCI config.
- Serve as the backend binary that powers my [CircleCI VIM plugin](https://github.com/felicianotech/vim-circleci).


arc is very new and under active development.
If you have feature requests, comments, bugs to report, etc please check out the [GitHub repository][gh-repo].
It's written in Go, packed as a raw binary, deb, and supports Linux, macOS, and Windows on amd64, and is open source (MIT licensed).

You can learn more and contribute at its [GitHub Repository][gh-repo].



[gh-repo]: https://github.com/hubci/arc
