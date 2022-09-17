---
title: "Better Vim Environment on Ubuntu"
author: FelicianoTech
date: 2022-06-26T09:00:00-05:00
tags:
  - vim
---


<!--more-->






Vim is my go to editor whether I'm using a desktop or remotely logged into a server.
I have it setup with my favorite color theme, my dictionary file for spellchecking, and an awesome Go plugin.
Everything works fairly well.
Since I occasionally run different shells and typically edit root owned files, things can get weird.
Either something opens in the wrong editor or I do get Vim, but without my customizations.


sudoedit

sudo update-alternatives --config editor

/usr/bin/vim.basic
