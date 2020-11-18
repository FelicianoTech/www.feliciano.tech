---
title: "Using GoReleaser on CircleCI for Continuous Deployment"
author: FelicianoTech
date: 2020-11-17T19:30:00-05:00
categories:
  - "Software"
tags:
  - "goreleaser"
  - "go"
  - "circleci"
  - "circleci-orbs"
---

The GoReleaser CircleCI orb makes it very simple to compile and publish Go projects on CircleCI.
Here's a quick look.


<!--more-->

In GoReleaser's own words, "Deliver Go binaries as fast and easily as possible. GoReleaser builds Go binaries for several platforms, creates a GitHub release and then pushes a Homebrew formula to a tap repository." It also supports automated publishing of [Linux Snaps](/blog/what-are-linux-snap-packages-why-use-them/), `.deb` packages, rpm packages, and more.
CircleCI orbs on the other hand are reusable snippets of CircleCI configuration, the stuff that powers your Continuous Integration.

This GoReleaser CircleCI orb makes it simple to install GoReleaser in a CI builds and use it to make a release.
You can find the official orb page [here][gor-dh] and the GitHub repository [here][gh-repo].

Here's an example CircleCI config using the GoReleaser orb job to publish on git tags:

```yaml
version: 2.1

orbs:
  gor: hubci/goreleaser@1.0

workflows:
  # General workflow for regular commits
  main:
    jobs:
      - test
      - gor/release:
          version: "0.147.1"
          go-version: "1.15.5"
          dry-run: true
  # Workflow for releasing with git tags
  release:
    jobs:
      - test:
          filters:
            branches:
              ignore: /.*/
            tags:
              # Simplified SemVer regex
              only: /^v\d+\.\d+\.\d+$/
      - gor/release:
          version: "0.147.1"
          go-version: "1.15.5"
          filters:
            branches:
              ignore: /.*/
            tags:
              # Simplified SemVer regex
              only: /^v\d+\.\d+\.\d+$/

jobs:
  test:
    docker:
      - image: cimg/go:1.15.5
    steps:
      - checkout
      - restore_cache:
          keys:
            - go-mod-v1
      - run:
          name: "Download Dependancies"
          command: cd src && go mod download
      - run:
          name: "Run Tests"
          command: cd src && go test
      - save_cache:
          key: go-mod-v1
          paths:
            - "/go/pkg/mod"
```

It's completely open source.
Please submit feedback and feature requests on GitHub.



[gor-dh]: https://circleci.com/developer/orbs/orb/hubci/goreleaser
[gh-repo]: https://github.com/hubci/goreleaser-orb
