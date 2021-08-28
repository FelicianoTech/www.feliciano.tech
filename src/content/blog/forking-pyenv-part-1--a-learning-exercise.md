---
title: "Forking pyenv Part 1: A Learning Exercise"
author: FelicianoTech
date: 2021-08-28T16:00:00-04:00
categories:
  - "Software"
tags:
  - "pungi"
  - "pyenv"
  - "python"
feature: "forking-pyenv-part-1-2000x1125.png"
---

`pyenv` is a very popular Python version manager that is maintained by people who are most certainly more knowledgable in Python than I am.
So I decided I am going to fork the project all by myself. :smile:
It may sound silly but I actually have some practical use cases that can come from this exploratory fork.
I decided that I'll document my journey with this project as I go.
Let's start with part 1, the "why".

<!--more-->

## pyenv Pain Points

I lead the effort in creating and maintaining Docker and VM images at CircleCI.
In both our VM Linux image and Docker Python image, we use `pyenv` to install the Python version(s) that we need.
We quickly learned that using version managers for programming languages at CircleCI has many great benefits with pyenv being no exception.
In the past couple years though there's been some recurring pain points that I'd like to tackle.

1. **New Python Release Timeliness** - at CircleCI, our goal is to make new Docker images available for new releases of Python, Go, Ruby, etc within 48 hours.
pyenv can't install a new Python release unless it "knows" about it first.
So someone needs to make a PR to pyenv and get it merged before pyenv can be able to install the new version.
This process has taken more than 48 hours on many occasions.
2. **Breaking Changes** - pyenv 2.0 launched with a breaking change that well.... broke on CircleCI.
pyenv is generally installed by `git clone`ing the repo and running the `master` branch.
So we automatically pulled in the major release and things broke.
Honestly, git tags are available for releases so ultimately I'd say this is our own fault.
Even if we had to stray away from the install instructions for increased reliability.
3. **Lack of Python Binaries** - pyenv only downloads source and then compiles Python during install.
There's actually several good reasons to do this and in CircleCI Images, this is fine because the time it takes to do all of this is during image creation.
The user won't see it - unless they want to change the version.
Then there's a 6+ minute installation as the Python version gets compiled and installed.
In the Continuous Integration (CI)  world, this can be a lifetime.
4. **Linux/Ubuntu support** - only via Homebrew is installing and setting up pyenv a 1-step process.
While now technically cross-platform, Homebrew is still the macOS package manager.
Getting pyenv setup on Ubuntu or other distros requires multiple steps and the need to keep track of several individual dependencies yourself.
Very doable of course, but leaves a lot of room for error.
5. **Testing** - this one always perks up our ears at CircleCI.
As new versions of Python are added to pyenv, they aren't directly tested.
Only a limited list in the GitHub Actions workflow is tested.
This means that what is most likely the most common type of PR submitted by contributors, Python versions, aren't tested.

### Help?

So what does this mean?
Well no project is perfect.
I know my personal projects surely aren't.
Some of the problems here can just be dealt with or worked around.
With a project as widely used as pyenv though, I wanted to do more.
I reached out to the project to see if and how CircleCI could contribute.
Either with money or what I was more interested in, code.
No dice.
While they didn't seem interested, something good came out of the discussion.
A frequent contributor was given write access.
These means more people to review PRs and get things merged.

These pain points have led me to consider forking the project multiple times.
Each time I decide against it because forking is a lot of work.
I can try to submit PRs here and there and patch things when we need to.
It's good enough, probably.

Then recently, a bunch more ideas and questions came floating into my head.


## A Learning Exercise

Through my work at CircleCI I've learned that more and more languages have some sort of version manager.
Python has pyenv (of course), Ruby has rbenv (where pyenv was forked from btw), Node.js has nvm, etc.
Even Go, a language I felt didn't even need a version manager now has one floating out there.
Why?

I'm curious as to:

- Why do people want/need these?
- Why don't newer languages have something like this as part of their toolchain considering how popular they are?
- How do version managers work?
There's different techniques out there.
What's the pros and cons of each?
- Why don't we make one for all languages?

I'm really interested in getting answers to at least some of these questions.
Forking pyenv and forcing myself to learn more about its inner workings and the kinds of problems they face when supporting users sounds like a fun and informative project.

So that's what I will do.
