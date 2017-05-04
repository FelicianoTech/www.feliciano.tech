---
title: "Introducing Docker Hugo - a CircleCI 2.0 Ready Docker Image"
author: FelicianoTech
date: 2017-05-04T14:00:00-04:00
categories: foss
---

I've created and maintain several websites that are statically-generated with [Hugo][hugo-url] (including the one you're reading right now). I build and test these sites with [CircleCI][cci-url]. With CircleCI 2.0, the build process is heavily Docker based. I made a Docker image for use with CircleCI that has Hugo to build the site and [HTMLProofer][proofer-url] to test it.<!-- more -->

The repository to create the images can be found [on GitHub][dh-gh-url] while the images themselves are on [Docker Hub][dh-dh-url]. An example CircleCI config to use this image can be found in the project's [README][readme-url].

Unlike some Hugo Docker images that are currently floating around, I am maintaining images for the last 3 minor releases of Hugo. This means that your image won't disappear during the next Hugo release forcing you to upgrade before you are ready.

## The Plan

I created this image with building on CircleCI in mind. In the future, I plan to not only make the image better on CircleCI when possible, but make the image easy to use locally with the Docker CLI as well as on Travis CI.

**Note: While this image may not be easy to use locally with the Docker CLI yet, CircleCI 2.0 does have a [local builds][local-url] feature which serves the same purpose.**



[hugo-url]: https://gohugo.io
[cci-url]: https://circleci.com
[proofer-url]: https://github.com/gjtorikian/html-proofer
[dh-gh-url]: https://github.com/felicianotech/docker-hugo
[dh-dh-url]: https://hub.docker.com/r/felicianotech/docker-hugo/
[readme-url]: https://github.com/felicianotech/docker-hugo/blob/master/README.md
[local-url]: https://circleci.com/docs/2.0/local-jobs/
