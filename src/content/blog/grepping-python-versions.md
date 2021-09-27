---
title: "Grepping Python Version Sometimes Fails"
author: FelicianoTech
date: 2021-09-27T11:30:00-04:00
categories:
  - "Fixes"
tags:
  - "python"
  - "grep"
---

Another quick one.
I was recently trying to verify that the Python version I expect to be installed actually was while in a CI environment.
The command `python --version | grep "<version>"` does the job.... most of the time.
I found out that for some reason, Python 2 outputs the version info to stderr instead of stdout.
This meant that my grep check would fail even when the Python version was correct.

To correctly check the Python version with grep for Python 3 AND Python 2, you can redirect the output like this:

```bash
python --version 2>&1 | grep "<version>"
```
