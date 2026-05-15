---
layout: page
permalink: /research/
title: Research
description: Manuscripts in reversed chronological order.
nav: true
nav_order: 2
publication_filters: true
---

<!-- _pages/research.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publication-filter-panel" data-publication-filters>
  <div class="publication-filter-header">
    <span>Filter papers</span>
    <span data-publication-filter-count aria-live="polite"></span>
  </div>
  <div class="publication-filter-buttons" role="group" aria-label="Publication topic filters">
    <button type="button" class="active" data-publication-filter="all">All</button>
    <button type="button" data-publication-filter="foundation models">Foundation models</button>
    <button type="button" data-publication-filter="data selection">Data selection</button>
    <button type="button" data-publication-filter="reinforcement learning,bandits">RL / bandits</button>
    <button type="button" data-publication-filter="probability">Probability</button>
    <button type="button" data-publication-filter="decoding">Decoding</button>
  </div>
</div>

<div class="publications">

{% bibliography %}

</div>
