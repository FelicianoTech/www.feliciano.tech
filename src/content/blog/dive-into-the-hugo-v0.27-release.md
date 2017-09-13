---
title: "Dive into the Hugo v0.27 Release"
author: FelicianoTech
date: 2017-09-11T11:12:07-04:00
categories: foss
---

Hugo v0.27 has been released today. Let's dive into what's new, get links to download, and more.

<!--more-->

## What's New?

### Related Content

The crown jewel of the Hugo v0.27 release is the ability to generate [related content](https://gohugo.io/content-management/related/) via Hugo. If you use Hugo to build a blog (this very website for example) then the ability to show related blog posts at the bottom of your current post is extremely useful. This helps keep readers engaged and on your website by surfacing older content they would enjoy but might not otherwise find.

Example usage:

```
{{ $related := .Site.RegularPages.Related . | first 5 }}
{{ with $related }}
<h3>See Also</h3>
<ul>
	{{ range . }}
	<li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
	{{ end }}
</ul>
{{ end }}
```

### Calculate Time Duration

Hugo has introduced two new functions to work with displaying the time between two timestamps. `time.Duration` and `time.ParseDuration` are now template functions.

### Ternary Function Support

A new template function has been added to support "ternary conditions". This means that in addition to use `ge`, `gt`, `le`, etc to compare two arguments, you can now use `conditional` as a ternary operation.

### Built on CircleCI 2.0

Wanting to take advantage of CircleCI 2.0's ["Manual Approval" Jobs](https://circleci.com/docs/2.0/workflows/#holding-a-workflow-for-a-manual-approval), Hugo is now being built on CircleCI 2.0.

### Multiple Config File Support

Due to support for chaining multiple configuration files landing in [Viper](https://github.com/spf13/viper), Hugo itself now supports chaining config files.

## Install Hugo

### Via Package Manager

- **Apt** - `apt-get install hugo` *note: Typically older versions*
- **SnapCraft** - `snap install hugo`
- **Brew** - `brew install hugo`

### Via Download

- Deb: <https://github.com/gohugoio/hugo/releases/download/v0.27.1/hugo_0.27.1_Linux-64bit.deb>
- Linux Tarball: <https://github.com/gohugoio/hugo/releases/download/v0.27.1/hugo_0.27.1_Linux-64bit.tar.gz>
- macoS Tarball: <https://github.com/gohugoio/hugo/releases/download/v0.27.1/hugo_0.27.1_macOS-64bit.tar.gz>
- Windows Zip: <https://github.com/gohugoio/hugo/releases/download/v0.27.1/hugo_0.27.1_Windows-64bit.zip>

### Via Docker

Hugo can be used locally and in a Continuous Integration (CI) environment via the "Docker Hugo" Docker image:

- [GitHub](https://github.com/felicianotech/docker-hugo)
- [Docker Hub](https://hub.docker.com/r/felicianotech/docker-hugo/)

A blog post on how to use this image can be found below.

More options are available on the [GitHub Release Page](https://github.com/gohugoio/hugo/releases/tag/v0.27).

## More Information

- **[Release Post](https://gohugo.io/news/0.27-relnotes/)** - Official Hugo release blog post.
- **[GitHub Release Page](https://github.com/gohugoio/hugo/releases/tag/v0.27.1)** - Release page and additional download links from GitHub.
- **[Hugo Forum](https://discourse.gohugo.io/)** - Hugo's Discourse forum.
- **[Hugo Docs](https://gohugo.io/documentation/)** - Hugo's Documentation website.
- **[Build, Test, Deploy a Hugo Website](https://circleci.com/blog/build-test-deploy-hugo-sites/)** - Learn how to build, test, and deploy a Hugo generated website with [CircleCI](https://circleci.com) and [Docker Hugo](https://feliciano.tech/blog/introducing-docker-hugo/).
