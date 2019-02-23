---
title: "Hugo Operating System & Architecture Stats"
author: FelicianoTech
date: 2019-02-22T22:30:00-05:00
categories:
  - ""
tags:
  - "hugo"
---

[Hugo](https://GoHugo.io) is a static site generator (SSG) and it is awesome.

I'm working on a Hugo project and it made me wonder, "Which operating systems is Hugo used the most on?".
So I [created a poll on the Hugo forums][hugo-forum-results] to find out.
I then decided to take it a step further and enlist the help of some GitHub data as well.

Below you'll find all of my results.

<!--more-->

## OS Usage Based on Forum Results

I created a poll asking the Hugo Forums to share which OS they use Hugo on.
I used the supported OSs listed on the Hugo readme as the options, with the addition of an 'Other' option.
You can find this poll [here][jekyll-forum-results].

Someone mentioned how they would be curious to see Jekyll's version of these results so I create the same poll over in their forums.
You can find the Jekyll version [here][jekyll-forum-results].

Here's how they compare:

<div id="forum-results-chart" style="background-color:white;padding:20px;width:100%;height:350px"></div>

This data is mostly for show.
It can be inaccurate because:

- perhaps only a certain type of user who prefers a certain OS uses forums
- the sample size is small, 30 for Hugo and 22 for Jekyll


## OS & Arch Usage Based on GitHub Releases Downloads

GitHub Releases downloads don't have any stats shown on their pages.
I have found out however that this information is available via the GitHub API.
While prepping to write a little something to pull the data I needed from the GitHub API, I came across a project called [Github Release Stats](https://www.somsubhra.com/github-release-stats/) (they left the 'h' lowercase, not me :smile:).

Awesome. I used this neat little project to pull stats for the last two Hugo releases, v0.53 and v0.54.0.
The broken out data can be found in a table below, but first I wanted to show pie charts based on OS downloads, CPU bitrate, and CPU arch.

### By Operating System

<div id="os-chart" style="width:100%;height:350px">
</div>

### By Bitrate and Architecture

<div id="bitrate-chart" style="display:inline-block;width:49%;height:350px">
</div>

<div id="arch-chart" style="display:inline-block;width:49%;height:350px">
</div>

As with my previous notes, these numbers aren't completely accurate.
Many Hugo users on Linux will install via Snap, Deb, or RPM packages.
Many macOS users will install via Brew.
And so on. The data above is strictly GitHub Releases downloads.


<!-- Load Google Charts -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
	// Load the Visualization API and the corechart package.
	google.charts.load('current', {'packages':['corechart', 'bar']});

	// Set a callback to run when the Google Visualization API is loaded.
	google.charts.setOnLoadCallback(drawForumResultsChart);
	google.charts.setOnLoadCallback(drawOSChart);
	google.charts.setOnLoadCallback(drawBitrateChart);
	google.charts.setOnLoadCallback(drawArchChart);

	function drawForumResultsChart(){
	
		var data = google.visualization.arrayToDataTable([
			['SSG', 'Linux', 'macOS', 'Windows', 'Android', 'Other'],
			['Hugo', 8, 14, 6, 1, 1],
			['Jekyll', 9, 9, 3, 0, 1]
		]);

		var options = {
			chart: {
				title: "Hugo & Jekyll OS Usage",
				subtitle: "Based on forum polls",
			},
			bars: 'horizontal',
			chartArea: {width: '100%', height: '100%'}
		};

		var chart = new google.charts.Bar(document.getElementById('forum-results-chart'));
		chart.draw(data, google.charts.Bar.convertOptions(options));
	}


	function drawOSChart() {

		var data = new google.visualization.DataTable();

		data.addColumn('string', "OS");
		data.addColumn('number', "Downloads");

		data.addRows([
			["Linux", 41224],
			["Windows", 30561],
			["macOS", 2703],
			["*BSD", 349]
		]);

		var options = {
			'title': "Hugo v0.53/v0.54.0 Downloads by OS"
		};

		var chart = new google.visualization.PieChart(document.getElementById('os-chart'));
		chart.draw(data, options);
	}


	function drawBitrateChart() {

		var data = new google.visualization.DataTable();

		data.addColumn('string', "Bitrate");
		data.addColumn('number', "Downloads");

		data.addRows([
			["64-bit", 73224],
			["32-bit", 1613]
		]);

		var options = {
			'title': "Hugo v0.53/v0.54.0 Downloads by Bitrate"
		};

		var chart = new google.visualization.PieChart(document.getElementById('bitrate-chart'));
		chart.draw(data, options);
	}

	function drawArchChart() {

		var data = new google.visualization.DataTable();

		data.addColumn('string', "Arch");
		data.addColumn('number', "Downloads");

		data.addRows([
			["x86", 74203],
			["ARM", 634]
		]);

		var options = {
			'title': "Hugo v0.53/v0.54.0 Downloads by Architecture"
		};

		var chart = new google.visualization.PieChart(document.getElementById('arch-chart'));
		chart.draw(data, options);
	}
</script>


## The Broken Down Results

Here's the actual numbers per each release binary/tarball that I found.

| OS | Hugo v0.53 | Hugo v0.54.0 | Total |
| --- | --- | --- | --- |
| DragonFlyBSD 64bit | 58 | 23 | 81 |
| FreeBSD 32bit | 24 | 6 | 30 |
| FreeBSD 64bit | 79 | 31 | 110 |
| FreeBSD ARM | 22 | 3 | 25 |
| Linux 32bit | 376 | 156 | 532 |
| Linux 64bit | 27,850 | 12,260 | 40,110 |
| Linux ARM | 233 | 120 | 353 |
| Linux ARM64 | 173 | 56 | 229 |
| macOS 32bit | 24 | 8 | 32 |
| macOS 64bit | 1,781 | 890 | 2,671 |
| NetBSD 32bit | 12 | 3 | 15 |
| NetBSD 64bit | 11 | 7 | 18 |
| NetBSD ARM | 7 | 5 | 12 |
| OpenBSD 32bit | 11 | 2 | 13 |
| OpenBSD 64bit | 23 | 7 | 30 |
| OpenBSD ARM | 11 | 4 | 15 |
| Windows 32bit | 393 | 193 | 586 |
| Windows 64bit | 18,353 | 11,622 | 29,975 |
| --- | --- | --- | -- |
| Total | 49,441 | 25,396 | 74,837 |


[hugo-forum-results]: https://discourse.gohugo.io/t/which-os-do-you-use-hugo-on/16911?u=felicianotech
[jekyll-forum-results]: http://talk.jekyllrb.com/t/which-os-do-you-use-jekyll-on/2622?u=felicianotech
