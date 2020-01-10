---
title: "Quick Tip: Create a CircleCI Baseline Build on New Branches"
author: FelicianoTech
date: 2020-01-10T17:45:00-05:00
categories:
  - "tips"
tags:
  - circleci
---

Over the years I've developed a little habit when working on projects tested via CircleCI.
I push the git branch to GitHub... without any changes.
It's simple, weird, but works.
Here's what I mean.

<!--more-->

When it comes to implementing Continuous Integration (CI) for your project, the name of the game is determinism.
That is, creating builds from commits that are reproducible now, tomorrow, and next year.
Nothing should be flaky or change out on us.
While 100% determinism is important, in reality it's like 100% test coverage, the goal itself is more important than it actually achieving it.
I bring this up because there's always going to be variables in a build, either externally or internally.
Whenever I work on a new feature branch, I like to create a baseline build in order to compare with later.

```bash
git checkout -b my-new-feature
git push -u origin my-new-feature
```

This pushes my brand new branch up to GitHub which CircleCI will start building.
The commit building will be the exact same commit that was on master, but with the new branch name.
Here's what this does for me:

1. This essentially re-runs `master` in order to make sure that it's still a passing build. While it shouldn't happen, occasionally a branch that was passing a month ago might not pass now for some external reason. This allows me to rule out external changes before I start pushing up my own changes.
1. This provides a fresh baseline for the time it takes for the build to complete. As I work on my branch, I can then see how the changes I'm making is effecting build time.
1. Lastly, this allows me to see if anything weird might happen with the running pipeline and my branch name. For projects that have complex CircleCI config, there can be multiple workflows with various branch filters. Sometimes a certain branch name causes unintended side effects in your workflow depending on what regex filters you are using. Simple CircleCI projects won't really need to look at this but it's something to think about.

So that's why I push a brand new feature branch to GitHub before I even make changes.
Hopefully you find this tip useful as well.
