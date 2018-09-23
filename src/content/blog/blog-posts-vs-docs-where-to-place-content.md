---
title: "Blog Posts vs Docs - Where to Place Content?"
author: FelicianoTech
date: 2018-09-23T15:00:00-04:00
categories:
  - "Documentation"
---
Whether it's with a co-worker or someone I meet at a meetup, I tend to discuss one of three topics:
Open Source, Community, or Documentation.
When we talk docs, we end up talking Developer Relations / Advocacy, and content generation.
Time and time again I've been asked the same question:

> “How do I know if X should be a blog post or a Pull Request (PR) to documentation?”

It's not a simple question because it can depend on your company's/project's culture and the audience you have.

That being said, I've answered this long enough times that I've put together questions you can ask yourself to determine where content can live.

<!--more-->


## Is this commentary?

If you're writing about software and you're providing lots of opinion or hype, it should be a blog post.
Commentary doesn't belong in documentation.

For example, early in 2017 I wrote a post for [CircleCI][cci] called [Why Developers Are Moving to Yarn][why-yarn].
This post covered some of the technical abilities for both Yarn and npm, observaton research, and yet it was a blog post.
This piece of content was a blog post because I was providing my opinion on why there was a lot of momentum swinging over to Yarn.
I was capitalizing on active discussion in the blogosphere, which leads to the next question to ask yourself.


## Is this current events or news?

If you're writing about a new release of software, a feature that launched, or an impending End Of Life (EOL), it's a blog post.
Of course, your documentation should cover the details of a new feature, but if you're announcing it with language such as, "this week feature X is now available", it should be a blog post.

Notice how blog posts normally have a published date and docs don't.
This is because blog posts should be "timely".
Some *clever* marketers will remove dates from their blogs to make their content appear evergreen.
Don't do that, you're usually providing outdated information to the reader which isn't right.
No body wants to read a newspaper from two months ago.

The next two questions are probably the best distinctions between blog posts and docs.


## Do I want to maintain this?

For both CircleCI's blog as well as my own, the most common type of post I make are guides / tutorials.
I like to teach things.
I believe these kind of posts can easily live in either a blog or documentation.
The big question is are you (or a team) going to maintain it?
The best way to explain this is with an example.

Let's say you write a blog post for ACME company on how to integrate ACME's product with WordPress.
Great, people may find it useful but the catch is WordPress is an active project.
Inevitably the software will change, especially with regard to internal plugin APIs or external APIs.

The guide you wrote can be invalid a mere few month later if WordPress happens to change something.
I believe that content in documentation should always be maintained.
If you write it, maintain it.
If you accept a PR from a contributor, you now are responsible for maintaining that guide.

If you plan on maintaining a guide, make it a doc.
Otherwise, make it a blog post.


## Am I writing about the "why" or the "how"?

Content that is information heavy and contain all the steps on **how** to do something is a doc and belongs in documentation.
Diving into the **why** a feature works a certain way or why certain decisions were made tend to make for great blog posts.

In my experience, people tend to visit docs in order to get started with a product or when they're having issues and they need a reference or user manual.
They're in need of something specific so having content that is to the point with a high signal to noise ratio is very helpful.

Blog posts tend to be reserved for when a person's in learning or discovery mode.
They likely have time to read more "fluff" if it's entertaining, adds to their education, or adds more context for a better understanding.


## Content Reusability

There's no rule saying you can't make both a blog post and a doc!
The most efficient Content Marketers and Developer Advocates do just that.

Much of the content I create comes from working on a demo or a side projects.
I take that code, experience, and learnings, and I distilled it down to it's core.
I then make a version of it that would be useful as a blog post and then a version of it that would be useful as a doc or an addition to an existing doc.

The same content can exists in multiple places.
Just cater your approach and language.


## Summary

Ask about your content...

1. Is it commentary?
  - Yes - it's a blog post
  - No - it's a doc
1. Is it current events or news? Is it "timely"?
  - Yes - its a blog post
  - No - it's a doc
1. Are you going to maintain it with updates?
  - Yes - it's a doc
  - No - it's a blog post
1. What are you writing about?
  - The "why" - It's a blog post
  - The "how" - It's a doc



[cci]: https://circleci.com
[why-yarn]: https://circleci.com/blog/why-are-developers-moving-to-yarn/
