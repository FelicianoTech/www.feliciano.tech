---
title: "Custom Sort Hugo Single Pages"
author: FelicianoTech
date: 2019-10-25T10:00:00-04:00
categories:
  - How To
tags:
  - hugo
  - static-sites
  - ssg
---

When building a static website with Hugo, a frequent need is to sort the pages in some way.
I've seen in the docs and in forum posts how to do that on list pages where you're iterating through pages with `range`, but not to do that from a single page template.
Here's how you can change the sort on single pages in order to change which pages `.NextPage`, `.NextInSection` and related, point to.

<!--more-->

Hugo has a default sort order for pages.
Without any interaction from you, pages will be sorted by "Weight", "Date", "LinkTitle", and finally "FilePath" ([ref][1]).
On list pages (the homepage and `_index.html` pages of sections) the sort order can be changed by adjusting `range`.
On `single` pages, which is the template used when viewing an individual page that isn't an index, there is no `range` loop present so that can be altered.
Here's how you can do it instead.

It is common for a `single` template page to use `.NextInSection` and `.PrevInSection` like this:

```hugo
{{ with .NextInSection }}
	<a title="Next page in {{ .Section }}" href="{{ .Permalink }}">Next</a>
{{ end }}

{{ with .PrevInSection }}
	<a title="Previous page in {{ .Section }}" href="{{ .Permalink }}">Previous</a>
{{ end }}
```

This will only use Hugo's default sort to create the "timeline" of which page comes after the other.
If you don't like the default sort and you have a small section, setting the `weight` in each page's front matter will help as weight is the most important factor in the default sort.
Otherwise we can take advantage of [Page Methods][2] to change the order.

We can use the `.Next` and `.Prev` Page Methods together with a sort function to create a new page order.
The sort functions are things like `ByTitle`, `ByLength`, or the flexible `ByParam`.
Here's an example using `.ByTitle`:

```hugo
{{ $pages := where site.RegularPages "Section" .Section }}
{{ with $pages.ByTitle.Next . }}
	<a title="Next page in {{ .Section }}" href="{{ .Permalink }}">Next</a>
{{ end }}

{{ with $pages.ByTitle.Prev . }}
	<a title="Previous page in {{ .Section }}" href="{{ .Permalink }}">Previous</a>
{{ end }}
```

That's how you can customize sort in a single page template.
It's not as simple as if `.NextInSection.ByTitle` could exist, but it's simple enough and works.



[1]: https://gohugo.io/templates/lists/#default-weight-date-linktitle-filepath
[2]: https://gohugo.io/variables/pages/
