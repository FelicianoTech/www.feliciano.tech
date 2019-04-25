---
title: "Automatic Timezones on the Ubuntu Desktop"
author: FelicianoTech
date: 2019-04-01T19:00:00-05:00
tags:
  - "ubuntu"
---

There's a setting in Ubuntu called "Automatic Time Zone".
Even if you have it set to "On", there's a good chance it doesn't work.
Here's why and how to fix it.

<!--more-->

I travel every now and then around the United States changing timezones as I go.
I run Ubuntu 18.04 on my laptop and I noticed that my time wouldn't correct itself as it would on my phone.
Opening the Settings app, I click "Details", and then "Date & Time", so that I can correct the time.
I noticed that there's a setting called "Automatic Time Zone" that exists and it's already on, so why isn't this working?

Turns out, there's a User Experience (UX) bug going on here.
There's another setting located in "Privacy" called "Location Services.
This controls whether or not Ubuntu can determine (through cellular, GPS, WiFi, etc) its location which is needed for automatically determining the timezone.

This bug was reported and "fixed" in Gnome [Bug Tracker](https://gitl.gnomeNOME/gnome-controrge_requests/165).
So in either the Ubuntu 19.04 or 19.10 releases (I don't know which) the "Automatic Time Zone" setting will be grayed out when location services is off.
The problem there is that it still won't tell you the issue, but at least it's a step in the right direction I guess.


## The Solution

For automatic timezone changing to work in Ubuntu, go to the Settings app, Privacy, and then make sure "Location Services" is on.
Then, go to Details, then Date & Time, and make sure that "Automatic Time Zone" is turned on.
The feature will then instantly kick in.
Enjoy.
