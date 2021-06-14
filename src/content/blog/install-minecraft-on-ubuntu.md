---
title: "Install Minecraft on Ubuntu"
author: FelicianoTech
date: 2021-06-13T21:00:00-04:00
categories:
  - "Software"
tags:
  - "minecraft"
  - "ubuntu"
---

I tried doing this today and ran into a small hitch.
The official Minecraft website gives you a .deb file to install.
No package manager or instructions.
A couple blog posts I found had instructions that worked, but gave instructions which I felt were too long or installed unnecessary things.

Here's how to install Minecraft Java Edition on Ubuntu, short and sweet.

<!--more-->

```bash
sudo apt install default-jre
curl -sSL "https://launcher.mojang.com/download/Minecraft.deb" -O /tmp/Minecraft.deb
sudo dpkg -i /tmp/Minecraft.deb
```

If you already have a working Java installation, you can skip the first step.
