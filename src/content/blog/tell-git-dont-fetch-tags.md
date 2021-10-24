---
title: "How To Tell Git Don't Fetch Tags From Remote"
author: FelicianoTech
date: 2021-10-24T13:00:00-04:00
categories:
  - "How-To"
tags:
  - "git"
---

Another quick one.
There are scenarios when you want to `git fetch` from a certain remote however you don't want to automatically pull down all of the tags.
There's a git config setting for that.

<!--more-->

Here's how to tell a single git repository to not fetch tags for a specific remote:

```bash
git config remote.<remote-name>.tagopt --no-tags
```

where `<remote-name>` should be replaced with the git remote name.

If you only want to do this as a one off when running the fetch command, you can do this instead:

```bash
git fetch --no-tags
```

Why might you do this?
My use case is when dealing with a downstream fork.
The git SemVer tags I use don't match the upstream tags.
Pulling in an upstream tag would indicate a release in my project, which isn't what I mean to do.
