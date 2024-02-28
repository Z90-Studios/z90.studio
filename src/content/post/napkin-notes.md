---
publishDate: 2024-02-22T19:30:00Z
title: (Napkin) UI Text-to-Speech Ideas
excerpt: Ideas regarding the Napkin Atlas project's use of Text-to-Speech.
tags:
  - napkin
  - atlas
  - artificial intelligence
---

POSTGRES VERSION 16

I want to be able to use speech to text to manipulate the graph data.
Ideally, I would be able to create layers (projects) with individual commands
that can do some of the following:
- Create new layers (projects)
- Add labels to nodes/edges from other projects or node metadata
  - For example, I should be able to say "Show me labels on the nodes" and have it automatically
    create a set of labels for the current view (by default, configurable) or for all. This should
    trigger a workflow that creates a metadata entry for the nodes with the labels.
- Toggle UI elements like labels, visibility of other dimensions (projects)
- Select areas, select nodes, select edges
- Select radius of nodes by asking things like "Select between A4 and D7"
  - This should create a select circle, which shows a label with the radius
    well as the X,Y position of the radius (or if I ever implement a 3d view, X,Y,Z).
    Ideally, this should allow a totally text-to-speech interaction to be capable, provided
    that the agent is capable of handling commands like this (UI-specific agent code?)
