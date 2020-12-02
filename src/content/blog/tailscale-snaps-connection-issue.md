---
title: "How to Fix Linux Snap Connectivity Issues When Tailscale Is Installed"
author: FelicianoTech
date: 2020-12-02T14:00:00-04:00
categories:
  - How To
tags:
  - snaps
  - snapcraft
  - tailscale
  - wireguard
---

I have tons of snaps installed on my Ubuntu desktop machine (36 to be exact).
A couple of months ago I noticed that they stopped working correctly.
It was strange because some things would work, like working with files on the filesystem, but anything involving Internet connectivity was failing.
It turns out installing the Tailscale VPN broke Internet connectivity for my snaps.
Here's a quick fix.

<!--more-->

Tailscale, a VPN powered by WireGuard, works great all by itself.
They have an advanced feature though called [Magic DNS](https://tailscale.com/kb/1081/magic-dns?q=magic) that is very cool but also happens to break snaps.
The changes that Tailscale makes to DNS resolving on the local machine break DNS resolving for snaps.
Until the Tailscale team can fix this issue, the temporary solution is to turn off Magic DNS support using the Tailscale CLI:

```bash
tailscale up --accept-dns=false
```

Tailscale's Magic DNS will no longer work but your snaps will.
Thanks to [@joonas_fi](https://twitter.com/joonas_fi) who shared the fix on the open GitHub Issue: https://github.com/tailscale/tailscale/issues/683
