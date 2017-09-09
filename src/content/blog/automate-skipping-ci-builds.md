---
title: "Automate Skipping CircleCI Builds Using a Git Hook"
date: 2017-09-08T09:00:00-04:00
author: FelicianoTech
description: |
  How to use Git hooks and `[ci skip]` or `[skip ci]` to automate skipping
  trivial CI builds.
categories: software
tags:
  - circleci
  - hacks
  - ci
---

There are times when you don't want CircleCI (CCI) to build a trivial commit. Maybe it's adding a note to the README or updating a log file. Not running a build can save container time for commits that actually need it. CCI covers this scenario by supporting the `[ci skip]` or `[skip ci]` "flags" in commit messages. However having to do this frequently will get annoying fast. Automate the process with a Git hook.

In this blog post, we're going to create an automated build skipping feature using the `commit-msg` Git hook.

<!--more-->


## Our Tools

### Git Hooks
For those not familiar, Git has a system of hooks. These are points in time, before or after a specific action in Git, where Git can run a script. For example, let's say that every time a commit is made, we wanted to make sure we are working with the latest upstream code. A Git hook could be utilized that updates master and rebases the current branch on master before any code gets committed.

### [skip ci]
As mentioned previously, CircleCI supports the CI standard commit flag of `[skip ci]`. When this flag is present in a commit message, CircleCI will not run a build. This can save on the number of containers running and total build minutes used.

### Introducing the .ciignore File
Mimicking Git's `.gitignore` file, we're going to create a `.ciignore` file for this blog post. The Git hook we're creating will use this file to know which files, directories, and patterns should be ignored when running builds.


## Implementing .ciignore

We're going to use a `.ciignore` file in the repo's root directory to tell Git that we don't want to build on CircleCI when the only changes in a commit are in the `logs/` directory. The root of our repo could look something like this:

```
$ ls -la
total 9
drwxrwxr-x 4 felicianotech felicianotech 4096 Jun 15 00:44 ./
drwxrwxr-x 4 felicianotech felicianotech 4096 Jun 15 00:44 ../
-rw-rw-r-- 1 felicianotech felicianotech    7 Jun 15 00:32 .ciignore
drwxr-xr-x 1 felicianotech felicianotech 4096 Jun  1 20:29 .circleci/
-rw-rw-r-- 1 felicianotech felicianotech  135 Jun  1 20:23 Dockerfile
drwxrwxr-x 8 felicianotech felicianotech 4096 Jun 15 00:52 .git/
drwxrwxr-x 2 felicianotech felicianotech 4096 Jun 15 00:45 logs/
-rw-rw-r-- 1 felicianotech felicianotech   43 Apr 29 22:23 main.go
-rw-rw-r-- 1 felicianotech felicianotech   20 Apr  1 16:40 README.md
-rw-rw-r-- 1 felicianotech felicianotech   31 Jun 15 00:44 test.txt
```

The `.ciignore` file goes in the root of the repo while our Git hook's file path will be `.git/hooks/commit-msg`. The contents of each of these files can be seen via the GitHub Gists below:

<script src="https://gist.github.com/felicianotech/12a4b38c594fcf3d3999de2c01f7d05e.js"></script>

**.ciignore** - This file contains a single pattern, `logs/*`. We want to skip builds for changes in the logs directory.
**.git/hooks/commit-msg** - This is our hook, a simple Bash script. Here's a quick breakdown:

1. The script starts by checking for the existence of `.ciignore`. If it 
doesn't exists, that's cool. It's business as usual.
1. We then call `git diff` to get a machine readable list of files that are staged (going to be changed in this commit).
1. We load `.ciignore` for the list of patterns to ignore.
1. We loop through the changes, removing them whenever it matches an ignore pattern.
1. If we still have changes, this means we need to actually build the commit so we exit.
1. If we reach this step, we're going to prefix the commit message (stored in file $1), with `[skip ci]`, saving us some build minutes.

Steps 4 & 5 are important because even when a change happens in a directory we want to ignore, if the main source code also changes we still want to build. Otherwise we could end up in a scenario where we add a feature and update a log file in the same commit and it never gets built. That new feature would not be tested and if you're using Continuous Deployment (CD), not deployed either.


## Notes

One thing to keep in mind is that hooks don't travel with the repo. Git hooks aren't versioned in the repository they're for. They don't get copied over when a repo is cloned or pushed. To get around this, some people keep hooks in a directory in the repo itself then symlink them into place once they clone the repo.

Using Git hooks to create a `.ciignore` file is just one example of how to utilize Git hooks to improve the daily workflow with CircleCI. Other ideas could be to use a Git hook to modify `.circleci/config.yml` upon commit to only run specific tests.

{{< repost name="The CircleCI Blog" url="https://circleci.com/blog/circleci-hacks-automate-the-decision-to-skip-builds-using-a-git-hook/" >}}
