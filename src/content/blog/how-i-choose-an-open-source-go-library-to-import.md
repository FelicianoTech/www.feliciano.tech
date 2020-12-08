---
title: "How I Choose an Open Source Go Library to Import"
author: FelicianoTech
date: 2020-12-08T13:00:00-05:00
categories:
  - Open Source
tags:
  - go
  - open-source
---

One of my favorite things about coding is thinking you're going to have to write some complex code to solve a very specific problem and then discovering an open source library that does that exact thing for you.
How great is that!?
The thing is, not all open source projects compare the same when it comes to reliability and future proofing.
Here's my quick rundown of what I look for in a Go (golang) open source library before I choose to import it into my code.

<!--more-->

## My List

### 1. GitHub Stars

I know what you're thinking, GitHub stars aren't everything and don't represent quality.
This is true.
They are a flawed metric because 1) popularity != quality and 2) they never go down.
The number of stars a project has (for the most part) only ever goes up.

I still use GitHub stars as a minor indicator of a project's sustainability.
The more popular a project is, the more likely it is to get contributors, the more likely the maintainer will continue with it, and the more likely someone will take it over if the project gets dropped.

### 2. go.mod and go.sum files

Once upon a time there was a scurry to develop dependency solutions for Go.
The old way of always pulling in the latest version of code into a Go project was error prone and a mess.
While several solutions were produced, an official solution eventually landed, [Go Modules](https://blog.golang.org/using-go-modules).

Per the way Go Modules work, a `go.mod` file and a `go.sum` file should be committed along with a project's code.
Seeing a project without these files or just the former tells me that they're not up with the times.
Either the maintainer is not very in tune with modern Go development or they haven't had the time or interest to bring the project up to standards.
Either way, this is a red flag for me.

### 3. Git Tags

This is a twofer.
Firstly, I believe that most projects written in any language should be utilizing Git tags.
They are a useful tool to snapshot your repository.
They allow you to provide additional context to a commit outside of the code itself.
They aren't for every situation though.
If you have a project with "releases", especially downloadable assets, use them.
If you have a project that does rolling releases that is oblivious to the user, such as a website, then maybe tags won't be as useful.

For Go projects, tags are a must though.
I mentioned using Go Modules in item #2 in this list.
Go Modules use Git tags under the hood as part of its versioning system.
Modules are expected to use Git tags that contain [SemVer](https://semver.org/) versions to convey to users of a library when backwards incompatible, feature, or patch changes are done.

I expect a proper Go library that I use to not only have a Git tag published, but to regularly use them when appropriate.
I've seen many projects create a single tag, over a year ago, at a users request, and then never create another one.
Then they have 50+ PRs merged adding tons of new features and bug fixes, without ever having a new tag.
That's not how this should work.

### 4. Godoc Link

Code should be documented, regardless of language.
I feel lucky to use a language such as Go that makes it very easy to know how to document code and where to view that documentation.
When a Go project is a library that is intended to be used by other Gophers (Go developers), it's crucial to have it documented.
Go has a tool called [Godoc](https://blog.golang.org/godoc) to aid in generating these docs and [a website](https://pkg.go.dev/) for finding and viewing these docs.
An open source Go library that has Go docs greatly improves the experience of other Gophers.
Write docs and then link off to those docs from your `README.md`.

### 5. Tests

Write tests for your code.
I prefer to use projects that have tests written.
I can feel more confident that it won't break on me in the future.
Similar to item #2 on this, it also helps me be more confident in the developer of the library in that they know what they are doing when it comes to modern software engineering.

### 6. Continuous Integration (CI)

Having tests are only have the battle.
Running those tests frequently, especially for contributors submitting PRs, is also very important.
Whenever I look at a project, I quickly check to see if they are using CircleCI, Travis CI, GitHub Actions, etc.

### 7. A Responsive Maintainer

Lastly, I look for a responsive maintainer in the project.
I get very nervous when I see a project with several issues or PRs open, some 9+ months old within a response from the maintainer.
It definitely gives an impression that the project is abandoned.

To be clear, I don't think have many open issues is bad.
I don't even think having old open issues is bad.
I do think they they should be responded to.
Something as simple as, "I see this and am working on it" or "I will work on this in 3 months after I first complete 'X'" are all great ways to let users know you are there and the project is still alive.


## Improve Your Go Library for Open Source Users

While the 7 items above are what I look for in an open source Go library, they aren't a strict yes or no.
If a project doesn't do one or more of these things, I might still use them anyway.
Especially when they're the only option, then I don't really have a choice do I. :smile:

I do think that these should be points that a library maintainer should strive for.
For example, even in my own projects I haven't done so well with code documentation and tests.
This is something that I'm actively trying to change.
I'm using my own list here in order to make my Go projects better and I hope you can too! :thumbsup:

Do you have your own things you check for?
Please let me know in the comments.
