---
title: "Trying out Development Builds of Hugo"
author: FelicianoTech
date: 2019-03-27T15:00:00-07:00
tags:
  - "hugo"
---

Hugo has fairly frequent releases.
It's one of the many things I like about it.
Once in awhile though you may want to test out the in-development version of Hugo.
Maybe there's a new feature or bug fix that's merged that you just can't wait to use, or maybe there's a larger change coming that the development team needs help testing.
Maybe you just like living wildly.
Regardless of your reason, here's three ways to run the development version of Hugo.

*This is specifically showing you how to use unreleased, probably buggy software. Keep that in mind.*

<!--more-->

## Via Snap

If you're already using the Hugo snap (which if you're using Linux, is an easy & quick install) then trying out the development build of Hugo is very simple.
Simply tell SnapD to switch to the edge channel.

```
sudo snap refresh hugo --channel=extended/edge
```

Switching back is just as simple:

```
sudo snap refresh hugo --channel=extended/stable
```


## Via Docker

I maintain a Docker image for Hugo that is designed to run well for CI environments like CircleCI but can be used in other places as well.
To use Hugo v0.54.0 for example, you'd use the Docker image tag of `cibuilds/hugo:0.54`.
As of yesterday I added a new tag that will always contain a development version of Hugo that's built at least once every 24 hours.
You can use it by using the Docker image tag `cibuilds/hugo:nightly`.


## Via Compiling

Lastly, you can always compile Hugo's `master` branch yourself to get a development build.
For this to work, you need to have a recent version of Go installed and the Go bin directory added to your PATH.
Instructions on this can be found [here](https://golang.org/doc/install).
Git will also need to be installed.

### Install Mage

Hugo uses Mage as its local build tool.
This will need to be installed first.

```
git clone https://github.com/magefile/mage
cd mage
go run bootstrap.go
```

### Install Hugo

```
git clone https://github.com/gohugoio/hugo.git
cd hugo
HUGO_BUILD_TAGS=extended mage install
```

This will install a development version of Hugo Extended (CGO support).
You can install Hugo non-extended by just running `mage install` instead.

### Switching Back

To switch back to the normal version of Hugo you had installed, you'll need to delete the new binary you created.
It'll be located in the `bin` directory of your `GOPATH`.
If you're unsure, you can run `which hugo` and that will show you where the binary is located.
Then use `sudo rm` to delete it.
For example for me, this is what I would need to run:

```
sudo rm /home/felicianotech/go/bin/hugo
```

I didn't need to use `sudo` here but depending on where your binary is installed you might.


## Test Hugo

Now that you know how to do this, guess what?
Bep, the lead maintainer of Hugo, is calling for people to help test the upcoming v0.55 release.
Help test and view his post [here](https://discourse.gohugo.io/t/please-help-test-hugo-0-55/17742?u=felicianotech).
