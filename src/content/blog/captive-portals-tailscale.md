---
title: "Starbucks WiFi Not Working? Using Tailscale?"
author: FelicianoTech
date: 2021-09-19T15:00:00-04:00
categories:
  - "Fixes"
tags:
  - "tailscale"
  - "starbucks"
  - wi-fi
---

Here's a really quick one I wanted to share.
Today I rode to Starbucks to get a nice weekend work session in.
I'm working on some fun stuff such as Pungi, Revidian Auto, etc.
I logged in to my MacBook Pro, connected to "Starbucks WiFi", and the WiFi login/redirect screen never popped up.
This happens on occasion and there's a few troubleshooting steps you can do to fix it.
I won't go over them here (let me know in the comments if you want me to) but I will go over how I fixed this weird Tailscale and captive portal issue.

<!--more-->

I spent a long, long time trying to figure this out until I realized I'm running Tailscale and maybe, just maybe, it's the problem.
I didn't think it would be since I'm running Tailscale on my Android phone and Starbucks WiFi works just fine.
I disconnect from Tailscale and lo and behold, the Starbucks WiFi redirect opens up and I get access to the Internet.

Tailscale is doing something with DNS that Starbucks WiFi doesn't like when it comes to setting up its captive portal.

## The Fix

If you use Tailscale on Mac, just disconnect, connect to WiFi and login if you need to, and then you can reconnect Tailscale without issue.

This same problem seems to be for all captive portals that engage its redirect based on DNS.
This means in addition to Starbucks, you might run into this issue on hotel WiFi, airport WiFi, etc.
Tailscale is aware of the issue and it's being tracked via [this GitHub Issue](https://github.com/tailscale/tailscale/issues/1634).
