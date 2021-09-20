---
title: "Forking pyenv Part 2: Creating a Baseline"
author: FelicianoTech
date: 2021-09-23T18:30:00-04:00
categories:
  - "Software"
tags:
  - "pungi"
  - "pyenv"
  - "python"
feature: "forking-pyenv-part-2-2000x1125.png"
---

Whenever I start a significant amount of work on a codebase, I like to push up to GitHub a baseline branch.
I've [written about this before](/blog/testing-new-branches-on-circleci/) but to summarize, I like to get the lay of the land before I start creating changes.
This allows me to build confidence in the CI process and makes debugging future problems easier.

With forking pyenv, I decided it would be smart to create a solid baseline here as well.
Here's what I did.

<!--more-->

## Testing

Getting testing and my Continuous Integration (CI) process right was my first goal.
Taking a look at the current code, it looks like pyenv used both Travis CI and GitHub Actions to run tests with different approaches for each.

On Travis they ran unit tests with bats, testing their shell scripts inside and out.
These are tests you can also run locally when developing pyenv.
On GitHub Actions, testing is done by running pyenv as a user would, testing the installation and use of several Python versions.

I decided to replicate both of these test types while consolidating them on a single provider, CircleCI.
In my CircleCI config I created a test matrix for the Python versions as well as both Ubuntu LTS releases I will be testing on.
This gave me 14 variations of the job to run.
The CircleCI workflow looks like this:

```yaml
    jobs:
      - shell-tests
      - install-python:
          matrix:
            parameters:
              python-version:
                - 2.7.18
                - 3.5.10
                - 3.6.13
                - 3.7.10
                - 3.8.10
                - 3.9.5
                - 3.10.0rc1
              ubuntu-version:
                - "20.04"
                - "18.04"
          requires:
            - shell-tests
```

In the process of getting all of my tests up and running on CircleCI, I came across a bug.
pyenv assumes that the system (OS) provided Python binary will always be `python`.
This means that on modern OSs such as a newer Ubuntu release, pyenv tests fail.
Python 3 is shipped as `python3` with `python` simply not being available.
I went to report the bug only to discover that it was already opened and subsequently closed as "will not fix".
While the workaround for this issue isn't complicated, I still consider this to be a bug and thus will be the first on my list to fix in my fork.


## Swapping Out the Name pyenv

Speaking of my fork, I've decided on a name and once testing was in place, I begun the grueling process of swapping out the name "pyenv" everywhere I could in my project.
If you haven't had to do a massive name change on a project before, it's not as simple as you might think.
A quick `grep` and replace with `sed` won't necessarily be all you need to do.
Here's a few things to watch out for:

**capitalization** - make sure you are deliberate on when you should change the capitalization of letters.
pyenv for example, while a proper noun, is stylized as having a lowercase first letter (like elementary OS).
So while you'd expect to see it that way throughout the source code, there'll be instances where you're dealing with environment variables where everything might be uppercase.
In my experience, when doing find-and-replaces, always do it as a case-sensitive operation.
It may be a bit more work but can prevent bugs from slipping in later.

**GitHub (or GitLab) URLs** - it's common to find "TODO"s or links to GitHub Issues and PRs in the comments of code.
The project name is likely to be part of the GitHub org name or repo name meaning a wide-sweeping find-and-replace would swap them out for your new name leaving dead links.
Take care to look out for these and make sure you don't update them.
This is a prime example of when you'd want to leave the old project name in source code.

**Go import statements** - pyenv is written in Bash so this wasn't a problem in this project but I've run into this tricky problem when renaming a Go project.
Go uses the GitHub (or something else) repository URL as the import path to import modules.
If you fork a Go project, you need to rename all of these imports.
If you miss one and the original project is still available online, you'd be importing a package from that project instead of your own.
This can lead to hard to catch bugs where the desired effect of new code don't seem to trigger.
I'd advise going through your `go.mod` and making sure there's no references to the upstream/original project.
That's how you can confirm you got them all.

---

After all these tests and changes, I also pulled in the first upstream release into my fork and everything merged without a conflict.
Surprising but exciting.

In part three I'll share the name of my forked project, where to find it, and what the initial wave of features and fixes look like.
While still a young project, my pyenv fork will be usable by part 3 if you want to try it out so stay tuned.
