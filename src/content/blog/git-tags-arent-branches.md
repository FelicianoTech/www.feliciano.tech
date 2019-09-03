---
title: "What Git Tags Are and Aren't"
author: FelicianoTech
date: 2019-09-03T09:00:00-04:00
tags:
  - "git"
---

I see this incorrect concept on Git tags all the time so I decided to write a quick blog post.
Many people believe that when you create a Git tag, that you are tagging a branch or that a tag now belongs to a branch.
This is false.
Git tags have nothing to do with branches.

<!--more-->

In Git, branches are an ordered list of commits.
Each commit is a snapshot of your code.
Commits are referenced as a hash, which can be unsightly.
For example, here's a commit hash from this very website:

```
c2b16e5895efb0f182aaccb0a8ea719f1cf06184
```

To make it easier to work with commits, they are commonly referred to by the first 7 characters.
So the above commit can then be referred to as `c2b16e5`.
This still can be hard to read but more importantly, lacks context.
What does this commit mean?

A Git tag is an alias to a commit.
It's a way to refer to a commit with a name that means something to you.
For anyone that understands networking and/or basic Internet underpinnings, a Git tag is to commit hashes what domain names are to IP addresses.

**Q. So why don't git tags refer to any branch?**

Earlier I mentioned that "branches are an ordered list of commits".
They also have a "head" which is the very tip of the branch, the most recent commit, and where development continues.
Tags refer to one, single, commit.
There's no commit before to look at nor one after.
It's a single commit in a single point in time.

Tags don't refer to a branch because its commit could in theory be in multiple branches.
Branches are created from other branches, they diverge, are merged, and so on.
A commit can start in one branch, be copied into a new branch, and may eventually be merged into two more branches.
Regardless of which branches a commit may exist in, it'll still have that tag referring to it.

A tag points to one commit.
Branches are irrelevant.

**Q. Why does this matter?**

For some people doing basic Git things, it probably doesn't.
For others who are using Git-based tools for CI or deployment workflows, having this knowledge will save you debugging time and ensure what you expect to happen is actually happening.
