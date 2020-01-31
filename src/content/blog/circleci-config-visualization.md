---
title: "CircleCI Configuration Visualization"
author: FelicianoTech
date: 2020-01-31T13:00:00-05:00
categories:
  - "diagrams"
tags:
  - circleci
feature: "circleci-concept-structure.png"
---

I've heard from some people that they don't quite understand the relationship between CircleCI concepts like pipelines, workflows, jobs, and steps.
The first of which is brand new to CircleCI.
Here's a visualization (or diagram) of these CircleCI concepts and how they fit together.
<!--more-->

The visualization above is a low resolution version.
You can find a high resolution version [here](https://drive.google.com/open?id=1Nm_Liz_7EuT41FhlxNSUz3kkWM-rjHHA) as well as the PDF version [here](https://drive.google.com/open?id=1prYBPnciiWMaHAjgyzZkx-jJcykq5-5L).

Here's a brief explanation of the terms:

**pipeline** - This is an instance of running a CircleCI configuration (config) file. It is not defined in the config itself but the result of running workflows in the config when there is a trigger.

**trigger** - Something that causes a pipeline to run. The trigger is most commonly a `git push` to a VCS provider such as GitHub. It can also be a Scheduled Workflow or an API call.

**workflow** - A workflow runs a git commit (via a branch or tag) through an ordered set of jobs. Jobs can be organized in parallel and/or many levels of hierarchy.

**job** - A collection of steps that will run in a specified execution environment (executor). Either a Docker container or a virtual machine (VM).

**step** - The smallest unit in a CircleCI pipeline, it runs shell commands. These shell commands are typically Bash commands but a step can be configured to run something else. In CircleCI Orbs, steps go by the name `commands` instead but they work the same.
