---
title: "Stable to Oldstable, the Quick Debian 10 Apt Fix"
author: FelicianoTech
date: 2021-08-18T13:30:00-04:00
categories:
  - "Fixes"
tags:
  - "debian"
  - "debian-10"
---

During my day job at CircleCI, I've noticed more and more users running into an issue.
With the recent release of Debian 11 "Bullseye", the maintainers made a change to the Debian 10 repositories that is causing a breaking issue.

## The Error

Here's the error you'd see:

| InRelease' changed its 'Suite' value from 'stable-updates' to 'oldstable-updates

## The Fix

To fix it, you just need to run:

`apt-get update --allow-releaseinfo-change`

This will acknowledge the change that Debian made and allow you to continue to use Apt as normal.
Depending on your circumstances, switching to Debian 11 would be a solution as well.
