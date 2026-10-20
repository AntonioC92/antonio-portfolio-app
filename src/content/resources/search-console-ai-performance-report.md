---
title: "What Google's New AI Performance Report in Search Console Actually Shows"
slug: "search-console-ai-performance-report"
description: "Google's generative AI performance report reached every Search Console property in August 2026. Here's what it tracks, what it leaves out, and how to read it without overstating what you know."
metaTitle: "AI Performance Report in Search Console | Caruso Martech"
metaDescription: "Google's new Search Console AI report shows impressions in AI Overviews and AI Mode, but no clicks or queries. Here's how to actually use it."
date: "2026-10-20"
lastUpdated: "2026-10-20"
category: "AI Search & Experience"
tags: "ai overviews, search console, ai search visibility, aeo"
---

Google now gives every Search Console property a dedicated report on how often its pages show up inside AI Overviews and AI Mode. Most site owners we talk to opened it, saw an impressions number, and assumed they finally had a real measurement tool. The report only shows half the picture: it confirms that Google is pulling your content into its AI layer, without telling you whether that visibility sends anyone to your site.

That gap matters more now than it would have a year ago. In [McKinsey's research](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search), 44 percent of AI search users named it their primary source for buying decisions, ahead of traditional search at 31 percent. A report that only counts impressions, in a channel that large, can flatter a number that leadership is already inclined to over-read.

## Quick answer: what does the Search Console AI performance report actually track?

- It shows impressions, meaning how often a link to your site appeared inside an AI Overview or AI Mode, broken down by page, country, device, and date.
- It does not include clicks, click-through rate, or the search queries that triggered the appearance, per [Google's own help documentation](https://support.google.com/webmasters/answer/16984139).
- AI Overviews and AI Mode sit together in one report, so a spike could come from either surface.
- Generative AI features in Discover get their own separate report, which [Search Engine Journal](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/) covered when both reached all sites worldwide on August 31, 2026.
- Third-party click studies still have to fill the gap this report leaves, since Google has not committed to a timeline for adding more metrics.

## Why this rolled out now

Google built this report because site owners had almost no visibility into AI Overviews after the feature launched, and pressure to close that gap had been building for two years. [Google announced](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) the reports in June 2026 as a phased release, then finished the global rollout at the end of August.

It shipped alongside a property-level setting that lets a site opt out of Search generative AI features entirely. Opted-out sites get no impressions or traffic from those surfaces, so the decision deserves real data behind it, and this report is the first place that data lives.

The timing also lines up with Google restructuring paid search around the same AI layer. During September 2026, Search campaigns still using campaign-level broad match or legacy automatically created assets were moved into AI Max, as [TechWyse](https://www.techwyse.com/news/platform-updates/google-ads-ai-max-migration-timeline-search-campaigns) reported. A visibility report was the minimum Google could offer while asking site owners to trust a system they could not see into at all.

## What the report actually shows you

The report sits alongside the standard Search and Discover reports under Performance in Search Console. It counts impressions for any page whose link appeared inside a generative AI feature, broken out by page, country, device, and date, making it the first native signal Google has given site owners about their presence inside AI-generated answers.

Before this report, most of what we tracked came from indirect signals. A page ranking at position one with an unusually low click-through rate was one clue, and manual testing of target queries against AI Overviews was another. Those signals still matter for spotting where AI answers pull from your content, and this report now adds a confirmed number underneath them.

That number moves fast, too. A page can go from zero AI impressions to several hundred in a week if Google starts surfacing it for a query cluster it previously ignored. Watching that shift by page is the most useful thing the report does today.

## What it deliberately leaves out

The report tracks impressions only, with no clicks, no click-through rate, and no query-level detail, a limitation Google states directly in its [Search Console documentation](https://support.google.com/webmasters/answer/16984139). It also groups AI Overviews and AI Mode together, so you cannot tell which surface drove a change in the numbers.

An impression spike alone tells a leadership team very little. It cannot confirm whether your brand is earning a citation with a live link, appearing as an unlinked mention, or being summarized with no attribution at all, the distinction we cover in [citations vs mentions](/insights/ai-citations-vs-mentions). For that, you still need query-level testing or a dedicated citation-tracking tool sitting alongside this report.

This is the same reporting hole we described in the [attribution gap](/insights/ai-search-attribution-gap) that AI search opened up well before this feature existed. A first-party impressions count narrows that hole slightly, while the deeper question of what AI visibility is worth in revenue terms stays open. Setting that expectation with leadership now saves a harder conversation later.

## Why the click gap matters for your reporting

Clicks on AI Overview results are already scarce, so an impressions-only report risks making a shrinking channel look bigger than it is. [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update) found that when an AI Overview is present, the top-ranking page sees a 58 percent lower average click-through rate, based on December 2025 data.

Pew Research Center's study of roughly 69,000 Google searches found users clicked a traditional result in just 8 percent of visits where an AI summary appeared, against 15 percent when no summary showed up, per [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/). Clicks on the summary's own source links were rarer still, at just 1 percent of those visits.

If a monthly report shows AI impressions climbing, say so clearly. Pair that number with what we cover in [citation value](/insights/measuring-ai-overviews-citation-value): citation depth and mention rate carry more weight than a raw impression count, because the click math behind AI Overviews already works against you before a single user sees the result.

## How to actually use the report this month

Check the new report monthly as one trend line among several, read alongside your standard organic performance data. Watch for pages where AI impressions rise while organic clicks fall in the regular Performance report, and flag those pages for a structured review before anyone starts rewriting copy.

Segment by page type before drawing conclusions. A service page pulling AI impressions with flat organic clicks tells you something different from a blog post doing the same thing, since one connects to a buying decision and the other rarely does on its own. Give the service pages priority when you decide where to spend time.

Cross-reference the new data against a tool built for [visibility tracking](/insights/tracking-ai-search-visibility) that can simulate actual AI answers for your target queries. The Search Console report confirms you are being pulled into an AI response. A tracking tool tells you what the AI actually said about you, and whether a link to your site survived the summary.

For pages with rising impressions and no matching lift in organic clicks, check [page structure](/insights/structuring-pages-for-ai-citations) first. A page can appear inside an AI Overview and still fail to earn the kind of citation that sends anyone further than the summary box.

None of this replaces a full measurement plan built around what these tools can and cannot tell you. If your current stack cannot connect an AI impression to a lead, a citation, or a lost click, that gap only gets more expensive as AI-mediated search keeps growing. Our [services](/services) start with exactly that kind of audit, or [get in touch](/contact) if you want a second opinion on what your Search Console data is actually telling you.
