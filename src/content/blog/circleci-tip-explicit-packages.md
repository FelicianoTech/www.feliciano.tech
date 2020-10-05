---
title: "CircleCI Tip: Use Explicit Packages"
author: FelicianoTech
date: 2020-10-05T19:00:00-04:00
categories:
  - "tips"
tags:
  - circleci
---

Here's a short but useful tip to apply to your CircleCI config.
Be explicit about what Apt, Yum, etc packages that your build requires.

<!--more-->

Many projects will have build dependencies installed via a package manager.
For example, if you're building a project on an Ubuntu or Debian-based OS and you need to manipulate JSON, you might be using [jq](https://stedolan.github.io/jq/) from the `jq` apt package.
If you find a Docker image to build on that pre-installs `jq`, great!
What if the image maintainer removes that dependency?
Your build will suddenly fail.

You can take control and make your config more robust by including a line to install these packages yourself.
Something like this:

```yaml
      - run:
	      name: "Install Dependencies"
		  command: sudo apt-get update && sudo apt-get install -y yq
```

If the build image you're using continues to work as it always has, not a problem.
This will try to install the package, see it's already there, and ignore.
However, if the build image suddenly changes, your project's dependency will be installed and still available to the rest of your build.

A small extra step now that can save you debugging time in the future.
