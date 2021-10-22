---
title: 'Fixing "Developer Cannot Be Verified" for macOS CLIs'
author: FelicianoTech
date: 2021-10-22T19:30:00-04:00
categories:
  - "Fixes"
tags:
  - "macos"
  - "cli"
---

Many devs using a fairly recent version of macOS has likely run into the following error:

```text
"SOME PROGRAM" cannot be opened because the developer cannot be verified.

macOS cannot verify that this app is free from malware.
```

Here's how to fix it.

<!--more-->

When it comes to GUI apps, this isn't too big of a deal.
Trying to run them will give you this message but then the option to go ahead and run the application anyway.
This isn't the case for command-line tools that aren't signed by the developer.
Here's what to do to bypass this warning:

```bash
xattr -d com.apple.quarantine <path-to-executable>
```

If you're not sure exactly where it is, you can run this instead:

```bash
xattr -d com.apple.quarantine $(which <my-cli>)
```

When you download an executable from a source such as Google chrome, macOS applies a file system attribute to that file that marks it as being in quarantine.
This is where that warning comes from.
The command I gave above removes that attribute from the file.

I feel like I need to mention, while this is annoying, Apple did implement this to protect you from yourself.
If you do this, please make sure you know what you're running and trust the source.
