---
title: "Import Public SSH Keys From GitHub"
author: FelicianoTech
date: 2021-07-29T21:40:00-04:00
categories:
  - "Software"
tags:
  - "ssh"
  - "github"
---

Here's a quick one.

Recently I needed to give one of my co-workers access to my personal Linux server.
SSH felt like the easiest way to do that but I needed his public key.
GitHub makes that easy.

<!--more-->

If you take someone's GitHub profile URL and append `.keys`, you will get a plain text page with their public SSH keys.
At least the ones known to GitHub.
We can use this feature to quickly give someone access to a server.

From the machine (and user) that you want to give access to, run this:

```bash
curl -sSL "https://github.com/<gh-username>.keys" >> ~/.ssh/authorized_keys
```

where `<gh-user>` is the person's GitHub username.
Obviously, check and then double check that you have the correct username.
That's it, they will now have access via SSH.

*Note: This is a simple way to provide access to a server.
Something like a personal project or some one off resource.
I don't suggest this method for something highly confidential or sensitive.
There are better, more secure ways to do such a thing, especially in a business atmosphere.*
