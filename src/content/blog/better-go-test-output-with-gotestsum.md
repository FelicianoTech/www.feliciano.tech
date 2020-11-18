---
title: "Better Go Test Output With GoTestSum"
author: FelicianoTech
date: 2020-11-18T14:45:00-05:00
categories:
  - "Software"
tags:
  - "gotestsum"
  - "go"
---

What's awesome about Go (golang) is that pretty much everything you need is built into the toolchain.
Running your tests is a simple matter of `go test ./...`.
Creating basic services such as building a web server is included in the standard library.
While the standard library is great, there's modules out there that provide enhanced features.
GoTestSum does this for `go test`.
It's a simple enhancement that provides a great deal of value.
Let's check it out.

<!--more-->

GoTestSum sits on top of `go test`.
It provides better, formatted test output, as well as a useful summary of all of your tests.
Behind the scenes it is running `go test --json` and then running it through one of several formatters that is offered out of the box.
Here's a side-by-side example of running `go test` and `gotestsum` for the static site generator [Gotham](https://github.com/gothamhq/gotham):

{{< figure src="/assets/img/article/gotestsum-example.gif" alt="Side by side comparison for GoTestSum" >}}

`go test` output is on the left and `gotestsum` output on the right.
For me, the output on the right is more more legible.
Also, a project with as many tests as Gotham generates a lot of output.
The summary shown at the end becomes very useful.


## Continuous Integration

A powerful feature of GoTestSum is the built-in ability to output JUnit.
JUnit is an industry standard file format to display test results and timing information.
Most CI providers such as CircleCI and Travis CI accept JUnit as an input in order to store and present test metadata to you.
CircleCI has docs for this [here](https://circleci.com/docs/2.0/collect-test-data/).
GoTestSum can output JUnit with a single flag:

```bash
gotestsum --junitfile unit-tests.xml
```


## Getting GoTestSum

Information on installing and using GoTestSum can be found on their official [GitHub repository](https://github.com/gotestyourself/gotestsum).
To summarize those, it can be installed with Go by running:

```bash
go get gotest.tools/gotestsum
```

It's also pre-installed on the [CircleCI Go Convenience Image](https://circleci.com/developer/images/image/cimg/go) and can be download from [GitHub Releases](https://circleci.com/developer/images/image/cimg/go).
