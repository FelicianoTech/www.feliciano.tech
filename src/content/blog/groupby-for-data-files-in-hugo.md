---
title: "GroupBy For Data Files in Hugo"
author: FelicianoTech
date: 2019-11-20T08:30:00-04:00
categories:
  - How To
tags:
  - hugo
  - static-sites
  - ssg
---

I recently had the need to list out a bunch of locations on a page with Hugo.
With over 100 locations to display, I wanted to group them by state on the page creating a kind of directory.
The first thing that came to mind was Hugo's [GroupBy](https://gohugo.io/templates/lists/#group-content) function.

Unfortunately I've learned that the `GroupBy` function only works on Hugo Pages while I'm storing all of these locations in a Hugo Data File.
Here's how I solved this problem.

<!--more-->

Now, my solution is no where near as neat as having a 1st class `GroupBy` function for data files would be, but at least it works.
For the purpose of this example I'll refer to these locations I'm trying to list as public libraries.
Here's how a single location would look in my YAML data file:

```yaml
# /data/libraries.yml

- name: "New York Public Library"
  phone: "(212) 555-0123"
  address:
    street1: "476 5th Ave"
	street2: ""
	city: "New York"
	state: "NY"
	zip: "10018"
```

In a layout file, I then create a slice called "states" and loop through all locations, adding the state for each one to the slice.
Once that's done I use the Hugo functions [uniq](https://gohugo.io/functions/uniq/) and [sort](https://gohugo.io/functions/sort/) to order the states alphabetically while removing duplicates.
Here's what that part looks like:

```hugo
{{ $states := slice }}
{{ range .Site.Data.libraries }}
	{{ $states = $states | append .address.state }}
{{ end }}
{{ $states = uniq $states | sort }}
```

To render the directory of libraries I use a nested loop.
In Hugo terms, a range inside of a range.
The outer range looks like this:

```hugo
{{ range $states }}
	{{ $state := . }}
```

While the inner one looks like this:

```hugo
	{{ range where $.Site.Data.libraries "address.state" $state }}
```

Putting it all together, I was able to create a `libraries.html` layout file to display all of the locations, grouped by state.
Here's what the layout file looks like:

```hugo
{{ /* /layouts/_default/libraries.html */}}

{{ $states := slice }}
{{ range .Site.Data.libraries }}
	{{ $states = $states | append .address.state }}
{{ end }}
{{ $states = uniq $states | sort }}

<h2>Directory of Libraries in the United States</h2>
<ul>
{{ range $states }}
	{{ $state := . }}
	<li>{{ . }}
	{{ range where $.Site.Data.libraries "address.state" $state }}
		<ul>
			<li>{{ .name }}
				<ul>
					<li>{{ .phone }}</li>
					<li>{{ .address.street1 }}<br />
						{{ .address.city }} {{ .address.state }}, {{ .address.zip }}</li>
				</ul>
			</li>
		</ul>
	{{ end }}
	</li>
{{ end }}
</ul>
```

If you needed a way to group data files by a specific key in Hugo, I hope this was helpful.
