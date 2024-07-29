---
title: "Quirk: CircleCI Namespaces Are Case Sensitive"
author: FelicianoTech
date: 2024-07-29T16:00:00-04:00
category: Quirks
tags:
  - circleci
---

Here's one that puzzled me for a quick minute.
I was on [Struggle SaaS's](https://strugglesaas.com/) GitHub page to fix an article's typo (thanks, [Joe](https://www.linkedin.com/in/drazisil/)).
While there, I noticed that the CircleCI status page on the readme was looking a bit wonky.
Clicking through, I got a 404 error on CircleCI.
Positive that I was logged in and the project existed, I started troubleshooting.
It turns out that the error was a matter of case sensitivity.

Not long ago, I changed my GitHub username… kind of.
My username was `felicianotech` on GitHub, back when it had to be lowercase.
I recently learned that this restriction is no longer in place, so I changed my username to `FelicianoTech`.
On GitHub usernames/org names/namespaces aren't case-sensitive.
The change was purely aesthetic.
All links will continue to work as before.

Even though it shouldn't matter, CircleCI URLs broke.
Updating the CircleCI badge and links to match the proper casing of letters in the URL fixed the issue.
