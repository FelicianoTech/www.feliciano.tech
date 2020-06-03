---
title: "I Made a New Gravatar Go Module/Library"
date: 2020-06-03T14:30:00-04:00
author: FelicianoTech
categories:
  - "Projects"
tags:
 - go
 - golang
 - gravatar
feature: "go-gravatar-1000x563.jpg"
---

I'm writing a project in Go where I'll have an entire user system.
Logins, passwords, etc.
As I narrowed down the feature list for the MVP, I decided I didn't want to support proper profile picture management.
Instead, for the MVP I will only support Gravatar and made a quick Go module for it.

<!--more-->

For those who don't know, Gravatar is a Globally Recognized - avatar, a great system for users to use the same profile picture across the Internet.
Learn more about them [here](https://en.gravatar.com/).

Doing some quick research, I saw that there was a few existing Go libraries for Gravatar including one [made by Automattic themselves](https://github.com/Automattic/go-gravatar).
Each one at a different problem, all fixable.
My biggest concern was that the best three all seemed to be abandoned, with last commits from 2 - 6 years ago.
This means they haven't been updated to support newer versions of Go and Go module support in particular.

I made my own Gravatar module for Go generically called `go-gravatar` which you can find at <https://github.com/revidian-cloud/go-gravatar>.
The initial release only supports Gravatar images, which is their main feature, the avatars you see around the Internet.
I will be adding support for profiles in the future.

Unlike other Gravatar modules on GitHub, my module does actually follow Gravatar's rules when it comes to converting an email to a hash, max picture size, etc.
Like all my open source projects, feedbacks, Issues, and PRs are welcomed!
