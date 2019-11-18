---
title: "6 Common CircleCI Gotchas & Myths"
author: FelicianoTech
date: 2019-11-18T10:00:00-04:00
categories:
  - Tips
tags:
  - circleci
---

CircleCI is by far the best Continuous Integration (CI) and Continuous Delivery (CD) platform out there for most people.
While I do work for CircleCI, I truly believe this.
That being said, there's a few things that tend to trip up new users (and sometimes veteran users as well).

Here's a few CircleCI gotchas and myths that I tend to see with new users or complicated CI builds.

<!--more-->

- [Each step runs in its own shell](#1-each-step-runs-in-its-own-shell)
- [Binaries in secondary images aren't available in primary image](#2-binaries-in-secondary-images-aren-t-available-in-primary-image)
- [Sometimes CircleCI is too fast](#3-sometimes-circleci-is-too-fast)
- [Docker knowledge is required to use CircleCI](#4-docker-knowledge-is-required-to-use-circleci)
- [CircleCI doesn't support X language](#5-circleci-doesn-t-support-x-language)
- [CircleCI doesn't support monorepos](#6-circleci-doesn-t-support-monorepos)


## Common Gotchas

### 1. Each step runs in its own shell
Every step in a CircleCI config file runs in a brand new, non-interactive, non-login shell.
This means that any environment variable (envars) set or exported in a previous step will not be available in the next step.
This also applies to the current working directory.
If you `cd` into some PATH in a previous step, the next step will place you back at the default CircleCI working directory.
Here's an example:

```yaml
    steps:
	  - run: |
	      export TEST_VAR="Hey"
		  cd /var/log
		  echo $TEST_VAR               # This prints "Hey"
		  pwd                          # This prints "/var/log"
	  - run: |
		  echo $TEST_VAR               # This prints nothing ""
		  pwd                          # This prints "~/project", the default working directory
```

To persist envars, they have to be exported in a file that gets sourced at each step.
Since CircleCI doesn't source `.profile` or `.bashrc`, a CircleCI specific file is used and its PATH is set in the environment variable `BASH_ENV`.
You can learn how to use this envar via CircleCI Docs [here](https://circleci.com/docs/2.0/env-vars/#using-bash_env-to-set-environment-variables).

### 2. Binaries in secondary images aren't available in primary image
When using the Docker executor in CircleCI, more than one image can be used together.
Typically you'll see a language image used as the primary image and a database image used as a secondary image.
It'll look something like this:

```yaml
jobs:
  build:
    docker:
	  - image: circleci/golang:1.13
	  - image: circleci/mariadb:10.2
```

In this scenario, every step in your config is run inside of the Go Docker image.
Running `go version` will work just fine and output the version of Go.
Running `mariadb-client` however will not work.
That binary is available in the MariaDB image, which you cannot run commands from.
The MariaDB image here is only available to you via TCP/IP, specifically port 3306 which is the port for MariaDB and MySQL.

To use the database, `mariadb-client` has to be installed in the primary image, the Go image here, or accessed from Go code.
Also, the database would need to be access via TCP, specially using "127.0.0.1:3306" as the host.
This is because most databases use a socket by default, which is a file, and not available between Docker images.

### 3. Sometimes CircleCI is too fast
Speaking of databases, sometimes a step in CircleCI will appear flaky.
Sometimes it will work and sometimes it won't.
When using a server, service, or background process (such as a database), you may try to use the service before it is ready.
This will cause the next step to fail because it ran too fast, before the service is ready.

CircleCI solves this problem by pre-installing a tool called [Dockerize](https://github.com/jwilder/dockerize) for you.
Among other features, Dockerize allows you to wait on a specific TCP port to be ready before you proceed in your build.
You can learn how to use Dockerize via CircleCI Docs [here](https://circleci.com/docs/2.0/databases/#using-dockerize-to-wait-for-dependencies).


## Myths

### 4. Docker knowledge is required to use CircleCI
Docker is mentioned very frequently in CircleCI Docs and even in this blog post.
Don't let it fool you, you don't need to understand Docker to use CircleCI.
Whatever you do to install, run, and test your software locally, you can do on CircleCI.

For example, as an Ubuntu user, most software I use is installed locally via Apt.
Anything I need in CircleCI can be installed via Apt, and then I run it using the same commands I use locally.
The fact that this all happens in a Docker container or a VM is irrelevant.

Stick to what you already know about Linux, macOS, or Windows, and get your CircleCI config to just work.
Later, you can go back to optimize and start to worry about specific technologies.
Docker knowledge doesn't hurt, but it isn't needed.


### 5. CircleCI doesn't support X language
CircleCI provides Docker Convenience Images for about 10 different programming languages.
Our machine images also include many languages.
These languages aren't the exclusive list of what runs on CircleCI by any means.

CircleCI can run any programming language and any framework that runs on Linux, macOS, or Windows.
Basically, CircleCI can run virtually anything.

If one of the CircleCI images is missing something, install it.
You're free to customize the Docker images or machine images in your config and you can even make your own custom Docker image with anything you want in it.


### 6. CircleCI doesn't support monorepos
This is also not true.
CircleCI integrates with GitHub and Bitbucket so that, when a commit is pushed, CircleCI kicks off a new pipeline and places that commit's code in it.
What you do with it after is up to you.

Let's use a Node.js project for example.
In a "normal" repo, you might run `npm install`, followed by `npm test`.
In a monorepo, you do the same thing, you may need to just `cd` into a specific directory first.
To automate this, one method I see people do is to use git to determine which directory has changes.
Some use commit messages to determine this.
Either way, with the directory (or directories) determined, you can proceed normally.

Can CircleCI make this easier in the future? Sure, but it's still possible.
In fact, with the introduction of [CircleCI Orbs](https://circleci.com/orbs/) it's going to get easier than ever to work with monorepos in CircleCI.


## Summary

There's some common gotchas when using CircleCI and some myths that lead people astray.
I hope this post helped a bit in that regard.

Have any of your own tips, gotchas, etc?
Leave them in the comments and I might write a second edition of this post in the future.
