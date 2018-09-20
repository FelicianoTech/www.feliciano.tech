---
title: "How to Check If Vim Supports Python"
author: FelicianoTech
date: 2018-09-19T20:00:00-04:00
categories:
  - "How To"
tags:
  - "python"
  - "vim"
---

Sometimes you'll need to know if the installed version of Vim on your system supports Python.
This is most common when installing Vim plugins as many have a dependency on Python.
Here's how to check.

<!--more-->

Run the following in a terminal:

```bash
vim --version | grep "+python"
```

If you see:

- **no output** - Vim **doesn't** have any Python support.
- **+python3** - Vim has built-in support for Python 3.
- **+python** - Vim has built-in support for Python 2.
- **+python3/dyn** - Vim has dynamic support for Python 3.
Your results may vary.
- **+python/dyn** - Vim has dynamic support for Python 2.
Your results may vary.

You can run `python3 --version` or `python2 --version` to see the specific version that will be running.

If you are writing a Vim plugin, with Vim Script you can check for Python support like this:

```vimscript
" Python 3
if has('python3')
  " some code
endif

" Python 2
if has('python')
  " some code
endif
```

*Note: The above Vim Script functions won't detect dynamic Python support.*
