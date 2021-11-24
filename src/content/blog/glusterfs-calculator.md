---
title: "I Hacked Together a GlusterFS Calculator"
author: FelicianoTech
date: 2021-11-24T00:00:00-05:00
categories:
  - "Projects"
tags:
  - "gluster"
---

I'm doing some work to modernize my server infrastructure on Linode for all things FelicianoTech and Revidian.
After not using this tech for several years, I'm ready to run a GlusterFS cluster again for shared storage.
Some things have changed and making sure I understand "Dispersed Volumes" and what that would look like in terms of nodes, bricks, and storage space was heavy on my mind.
I decided to make a quick calculator for Gluster Dispersed Volumes so I can play around with some numbers and see how they affect each other.
If you would like to try it out yourself, you can find it [here](/projects/gluster-calc/).

Just keep in mind, it's fresh, unpolished code.
There's no error checking and it only does Dispersed Volumes specifically.
If there's any interests in this, let me know.
In the future I can add polish, other volume types, and maybe even some dynamically generated diagrams?
Who knows. :shrug:
