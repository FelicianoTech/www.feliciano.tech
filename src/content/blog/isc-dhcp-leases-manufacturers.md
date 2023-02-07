---
title: "Populate Manufacturers for 'isc-dhcp-server' Leases"
author: FelicianoTech
date: 2023-02-06T20:30:00-05:00
categories:
  - meta
---

I ran `dhcp-lease-list` on my Ubuntu router to pull up the list assigned IPs it has given out on my network.
There is a manufacturer column in the output that is empty.
Above the whole table, there's a message:

"To get manufacturer names please download http://standards.ieee.org/regauth/oui/oui.txt to /usr/local/etc/oui.txt"

The problem is, that URL doesn't work.

<!--more-->

In my research, I saw that the URL for that file has moved and this isn't the first time either.
The current URL that works is <https://standards-oui.ieee.org/oui/oui.txt>.
Download this file to `/usr/local/etc/out.txt` and then run `dhcp-lease-list` again and you'll be golden.

Here's a quick one-liner you can copy and paste:

```bash
sudo wget -O /usr/local/etc/oui.txt "https://standards-oui.ieee.org/oui/oui.txt"
```
