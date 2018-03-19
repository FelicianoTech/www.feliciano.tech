---
title: ""
author: FelicianoTech
date: 2018-01-02T09:00:00-05:00
categories:
  - ""
tags:
  - ""
feature: "something.png"
---

Service tag:

you can find it under the laptop, under the little metal cap/cover
you can find it digitalyy by running:

`sudo sudo dmidecode -s system-serial-number`

or for the express service code

`echo $((36#$(sudo dmidecode -s system-serial-number)))`

you can find it in the BIOS under "System Information"

Dell PPA;

dell.archive.ubuntu.com/ubuntu xenial


Recovery images:
XPS 13 9350 / Precision 5510 Ubuntu Recovery Image
