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
    <button type="button" data-publication-filter="data-centric ml,targeted data selection">Data-centric ML</button>
    <button type="button" data-publication-filter="llm inference,inference-time alignment,decoding">LLM inference</button>
    <button type="button" data-publication-filter="sequential decision-making,reinforcement learning,bandits">Decision-making</button>
    <button type="button" data-publication-filter="probability theory,selection theory">Probability theory</button>
  </div>
</div>

<div class="publications">

{% bibliography %}

</div>
