---
title: "3 Ways to Rename a Go Module"
author: FelicianoTech
date: 2024-04-09T14:00:00-05:00
description: "I've had to rename a Go module and all of the import statements a few times now, so I figured I might as well document it."
tags:
  - go
  - golang
---

I maintain a [Go module for importing Gravatar images](https://github.com/gopherlibs/gpic).
Last year I added support for GitHub profile images as well, so I renamed the project to gPic.
I also created a fork of the static site generator Hugo called Gotham.
I am now doing a rewrite of that project called Strawberry.
I've had to rename the Go module in each of these cases.
When using many import statements from a module in code, renaming can quickly become a tedious task.
Over time, I've found three ways to rename the module across all of your files, quickly.


## The Replace Directive

The first method to "rename" a module is actually not renaming it at all.
I consider this more of applying an alias to the module name.
As such, myself and many others consider this method temporary and it's typically used to force a certain version of a module or when you make a temporary fork of a module for some small changes.

The `replace` directive is used in a `go.mod` file and looks like this:

```bash
replace golang.org/x/net v1.2.3 => example.com/fork/net v1.4.5
```

You can find a more detailed explanation and a few more examples in the official [Go Module Reference](https://go.dev/ref/mod#go-mod-file-replace).


## The GoLand IDE

When doing some research, I learned that the [GoLand IDE](https://www.jetbrains.com/go/) can do module renaming for you.
I use Vim but I was willing to download and install GoLand just to try this feature out.
Turns out, the IDE isn't free so I never tried it.
However, the [GoLand website mentions how to do this](https://www.jetbrains.com/help/go/rename-refactorings.html#rename_go_modules_names) and many on StackOverflow say it works.
If you're already using this IDE, I would suggest using this method.


## Custom Bash Script

This is the method I used.
I found a [GitHub gist](https://gist.github.com/iamucil/7578dc7df7d72e1d78c8f5543db3fbcc) someone made showing how to do the rename with Bash.
This was exactly what I needed.
It uses standard Unix commands in order to inspect each Go source file and make the necessary changes.
However, I ran into a few edge cases when used in a large project.
To solve for this, [I made my own Gist](https://gist.github.com/felicianotech/b5f72b5b1606560033422e452bfc0dda).
It shows how to use the script in its Bash comment.
I've embedded the Gist below:

<script src="https://gist.github.com/felicianotech/b5f72b5b1606560033422e452bfc0dda.js"></script>

The changes in my script are:

1. It allows reading the old and new module paths from the command-line.
1. I use two slightly different `sed` commands. This is to help find the import statements while ignoring the URL when listed in a comment or some other form.

I hope this helps someone.
