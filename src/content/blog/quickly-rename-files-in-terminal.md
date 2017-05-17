---
title: "Quickly Rename Files in Terminal"
author: FelicianoTech
date: 2017-05-17T12:00:00-04:00
---

Every now and then I create a file on the command-line and fat finger it. When I create a readme for a project, I might type `README.mdss` instead of `README.md` for example. When it comes time to fix it, I do the following:

```
mv ~/Repos/felicianotech/my-project/README.mdss ~/Repos/felicianotech/my-project/README.md
```

It works, and autocompletion helps, but **I'm lazy**. Here's a quicker way to rename that same file:

```
mv ~/Repos/felicianotech/my-project/README.md{ss,}
```

The curly braces tell your command-line shell Bash (or in my case, Fish), to expand the second command to the first command. Less typing. ;)
