---
title: "Why Developers Are Moving to Yarn"
date: 2017-06-08T09:00:00-04:00
author: FelicianoTech
description: Yarn is an NPM alternative that is taking the dev world by storm. Here's why.
tags:
  - Engineering
---

{{< figure src="/assets/img/article/yarn-logo.png" class="aligncenter" >}}

The JavaScript world changes every second. To say a lot has happened in the past year would be an understatement. Among those changes was that [Angular2 was released][angular-post], [Node.js 7.0.0 was released][nodejs-post], and the feature set for [ECMAScript 2016 (ES7)][ecma-post] was finalized. In October 2016, Facebook, Exponent, Google, and Tilde released something unexpected, an [npm][npm-link] replacement they dubbed [Yarn][yarn-site].

[angular-post]: https://blog.thoughtram.io/angular/2016/09/15/angular-2-final-is-out.html
[nodejs-post]: https://nodejs.org/en/blog/release/v7.0.0/
[ecma-post]: http://www.ecma-international.org/ecma-262/7.0/index.html
[npm-link]: https://github.com/npm/npm
[yarn-site]: https://yarnpkg.com/

<!-- more -->

## Npm Problems and Yarn Solutions

Yarn isn't a fork of npm but rather a reimagining of it. Large projects--like the ones Facebook and Google have--magnify the issues developers might face when using `npm`.

### Potential problems with npm

* nested dependencies (fixed in npm 3)
* serial installation of packages
* single package registry (npmjs.com ever go down for you?)
* requires network to install packages (though we can create a makeshift cache)
* allows packages to run code upon installation (not good for security)
* indeterminate package state (you can't be sure all copies of the project will be using the same package versions)

### Yarn solutions

* multiple registries - Yarn reads and installs packages from both `npmjs.com` as well as [Bower][bower-site]. In the event one goes down, your project can continue to be built in CI without issue
* flat dependency structure - simpler dependency resolution means Yarn finishes faster and can be told to use a single version of certain packages, which uses less disk space
* automatic retries - a single network request failing won't cause an install to fail. Requests are retried upon failure, reducing red builds due to temporary network issues
* parallel downloads - Yarn can download packages in parallel, reducing the time builds take to run
* fully compatible with npm - switching from npm to Yarn is a no friction process
* `yarn.lock` - keeps dependencies locked to specific versions similar to Gemfile.lock in the Ruby world

[bower-site]: https://bower.io/

### yarn.lock

Yarn introduces a lockfile, `yarn.lock`, to manage JavaScript packages. This is possibly the most useful feature of Yarn for developers working in teams. In `package.json`, package versions could be specified as a range, or without a version at all. This can cause an issue where different developers on the same team are using different versions of the same package. Any CI-trained engineer knows that the ability to reproduce an environment, with the exact same dependencies, is crucial for efficient debugging and onboarding of new team members. Borrowing from package managers such as [Bundler][bundler-site], Yarn creates a `yarn.lock` file that records the exact version of every package you are using for your project. Committing this lockfile to your VCS ensures that all developers working on the project, if they are using Yarn, will be using the same versions of every package.

[bundler-site]: http://bundler.io/

## Using Yarn on CircleCI

Switching from npm to Yarn is painless since they're compatible. We first wrote about Yarn in [December][orig-yarn-post] where we showed the best way to download and install Yarn for use in your builds. Since then, we have continued to show our support for Yarn: Yarn is now pre-installed in our [CircleCI Ubuntu 14.04 (trusty) image][trusty-doc]. Yarn can be used on CircleCI the same way as your local environment, by simply using the `yarn` command. Instructions for caching can be found in our [Yarn doc][yarn-doc].

[orig-yarn-post]: https://circleci.com/blog/install-and-use-yarn-the-npm-replacement-on-circleci/
[trusty-doc]: https://circleci.com/docs/1.0/build-image-trusty/#yarn
[yarn-doc]: https://circleci.com/docs/1.0/yarn/

## npm to Yarn Cheatsheet

{{< figure src="/assets/img/article/yarn-cheatsheet.png" class="aligncenter" >}}

## Summary

Yarn addresses issues such as indeterminate dependencies, network issues/npmjs being down, and parallel downloads in order to provide more value over npm. Npm, however, is a victim of its own success. As more people shift over to Yarn and other registries, npm servers can be more available. Both package managers are great and eventually lead to improving one another.

***Fun fact:*** *On your local machine, npm can install Yarn! `npm install --global yarn`. The Yarn Team does not recommend this method of installation.*

---
*This post was originally published on [circleci.com](https://circleci.com/blog/why-are-developers-moving-to-yarn/).*
