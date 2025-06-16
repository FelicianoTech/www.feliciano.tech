---
title: "WTF Just Happened? A New Maintainer Appears"
author: FelicianoTech
date: "2025-06-16T17:00:00-04:00"
categories:
  - "Open-Source"
tags:
  - wtf
  - wtfutil
feature: "wtf-new-maintainer.jpg"
featureHide: false
---

[WTF](https://github.com/wtfutil/wtf) a.k.a. WTFutil is a dashboard for those who live in their terminal.
It's a TUI (text-based user interface) that divides up your screen into widgets that are then fed data from modules.
These modules can be local commands, weather data, Jira cards, GitHub issues, etc.
No, I did not come up with the name. 😄

<!--more-->

The WTF project has been dormant for quite awhile now.
A common affliction of long-standing open-source projects.
The last PRs merged were in early 2024 however most users haven't got the fruits of that labor.
Those changes weren't "shipped" because the last release of the project was back in 2023.
The project needs some TLC.

I've been added as the lead maintainer to the project by Chris Cummer, the creator, in order to provide that TLC.
This will be a potential stepping stone.
If my time on WTF goes well then we'll move to transferring the project over to me completely.

With that out of the way, I've put together a little project kickoff plan.
I've shared it on GitHub but I wanted to share it here as well.


## 2025 Project Update

I am aiming to get this project we all enjoy up and running again.
Here are my immediate plans & priorities:

1. **Unblock tooling & CI** \- I want to make sure that GitHub Actions workflows are working, unit tests are passing, and GoReleaser is working. I've already merged a contributor PR on this topic two days ago.
2. **Dependency updates (patches only)** \- Update Go and dependencies for patch releases only. Any minor or major releases will wait.
3. **Fix major bugs** \- Issues where entire modules aren't working will be fixed. This is major showstoppers only. There may be cases where this isn't feasible. We'll make a best effort.
4. **First 2025 release** \- Here is where the first release in \~2 years comes out. This allows us to patch security issues, some dependency bugs, and major WTF bugs for current users. This will also serve as a test run for the deployment pipeline and future releases.
5. **Dependency updates (all & pinning)** \- Major and minor releases for dependencies, including Go, will happen here. We'll also pin some tooling to make workflows less fragile moving forward.  
6. **Bug fixes** \- More bug fixes here. Severity is less important and ease of fixing is more important here.
7. **Second 2025 release** \- Hopefully this is a solid release for even new users to be able to use.

After these 7 steps is when I think we can go back to adding new features/modules.
We can also start asking big questions such as:

* what major changes need to be made?  
* v1? v2?  
* plugins/extensibility?

Thoughts? Feedback? Please share.
My priorities may not be your priorities and I'd like to hear what others are thinking.
You can comment on this agenda directly on WTF's [GitHub Discussion page](https://github.com/wtfutil/wtf/discussions/1725).
