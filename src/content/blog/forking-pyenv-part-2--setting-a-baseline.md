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

<!--more-->

Notes:

- setting up CircleCI so I can make sure I have solid tests before I start changing anything
  - from gh actions
    - these test test what a pyenv user would do when installing a python version
  - from travis
    - these are the shell/bats tests
- while creating tests, discovered the system python needs to be python and not python3 bug
  - upstream closed this issue without resolving it
