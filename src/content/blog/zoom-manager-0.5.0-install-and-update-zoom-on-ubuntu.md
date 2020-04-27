---
title: "Zoom Manager v0.5.0: How to Install & Update Zoom on Ubuntu"
author: FelicianoTech
date: 2020-04-26T20:00:00-04:00
categories:
  - "How To"
tags:
  - "zoom"
  - "zoom-mgr"
  - "ubuntu"
  - "ubuntu-2004"
---

Zoom has quickly become the most popular video conferencing software during the 2020 Coronavirus Pandemic.
I have a few blog posts discussing how to install Zoom on Ubuntu Linux and specifically on how to use Zoom Manager to do so.
Here's what it is and what's new.

<!--more-->

Zoom Manager (`zoom-mgr`) is a script I made to install Zoom for you and to check for an update if you already have it installed.
I created it because the company behind Zoom only provides a `.deb` file on their website.
There's no package manager to install it nor do they tell you the dependency packages you need.
Zoom Manager handles all of that for you.

Recently I released Zoom Manager v0.5.0.
This release does a few things:

- fixes a bug with Ubuntu 19.10
- adds support for Ubuntu 20.04
- Zoom Manager can now update itself!

You can check it out [on GitHub][gh-zoom-mgr].

Note, if you have a version of Zoom Manager older than v0.5.0, you need to update it manually, by basically following the install instructions again.
Then, from now on it will check for updates of itself whenever it checks for Zoom updates.
Basically, when you run `./zoom-mgr update`.



[gh-zoom-mgr]: https://github.com/felicianotech/zoom-mgr
