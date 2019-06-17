---
title: "Introducing cu-ddns"
author: FelicianoTech
date: 2019-06-17T12:30:00-04:00
categories:
  - "Software"
tags:
  - "cloud-unpacked"
  - "linode"
  - "dns"
feature: "cu-ddns.png"
---

`cu-ddns` is a dynamic DNS client that uses VPS cloud providers such as Linode for DNS.
This tool allows pointing a DNS hostname such as `home.example.com` to an IP address that may change regularly.
The typical scenario is having a domain name point to your home IP address however those that travel a lot would find it useful as well.

`cu-ddns`, which stands for "Cloud Unpacked Dynamic DNS" (more on that in the future), is a project I made over the weekend.
It's still very much a work-in-progress with only an unpolished v0.1.0 release so far.
It's written in Go, packed as a raw binary, deb and snap, currently supports Linux on amd64 or armhf, and is open source (MIT licensed).

You can learn more and contribute at its [GitHub Repository](https://github.com/cloud-unpacked/cu-ddns).
