---
title: "How to Install Java 8 on macOS"
author: FelicianoTech
date: 2023-01-24T02:00:00-05:00
categories:
  - How To
tags:
  - java
---

Let's get straight to the "how" and stick around if you want to know the "why".

```bash
brew tap homebrew/cask-versions
brew install --cask temurin8
```

Now here's some information on why this works and what it does.

<!--more-->

## Why installing Java 8 on an M1 Mac is a little weird

I needed to install Java 1.8 a.k.a. OpenJDK v8 on my MacBook Pro and it was more annoying than it should be.
I believe this to be because OpenJDK v8 is fairly old and I'm using an M1 mac.

Anyway, Eclipse took over AdoptOpenJDK, my normal provider of Java, and renamed the organization Adoptium.
Their project name for maintaining Java is apparently called Temurin?
None of these names include the words "Java" or "OpenJDK" anymore, thus making my search for instructions difficult.

This all boils down to using Homebrew casks, the binary download feature, to download OpenJDK, now called Temurin, v8.
In case anyone was wondering, this entire adventure was for Android Studio support. :grimacing:
