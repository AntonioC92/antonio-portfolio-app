---
title: "Bing's AI Performance Report: What It Shows and How to Use It"
slug: "bing-ai-performance-report"
description: "Bing is the only search engine that tells you when its AI answers cite your pages. Here is what its AI Performance report shows, where it stops, and how to use it."
metaTitle: "Bing AI Performance Report Explained | Caruso Martech"
metaDescription: "What Bing's AI Performance report shows about Copilot citations, how Citation Share and Topics Portfolio work, and how to use it in AI search reports."
date: "2026-11-11"
lastUpdated: "2026-11-11"
category: "AI Search & Experience"
tags: "Bing Webmaster Tools, AI Performance report, AI citations, Copilot, AI search reporting"
---

Most teams trying to measure AI search work from third-party trackers and guesswork. Bing is the one search engine that tells you, in its own tool, when its AI answers cite your pages and which queries led there.

That makes Bing's AI Performance report worth setting up, even if Bing sends a small share of your traffic. It sits inside Bing Webmaster Tools, it has been expanded twice since its launch in February, and it answers a question leadership keeps asking: are AI answers actually using our content?

## Quick answer: what does Bing's AI Performance report show?

- How often Copilot, Bing's AI summaries and some partner integrations cite your pages as sources.
- Which pages get cited, and a sample of the grounding queries the AI used to find them.
- Your Citation Share for a query, meaning your portion of all citations shown for it.
- Topic clusters where you appear, and related queries where other sites are cited and you are missing.
- No clicks or traffic, so it measures presence in answers and leaves outcomes to GA4.

## What the report measures

The report measures citations: each time Microsoft's AI experiences show one of your pages as a source in an answer. It counts them over time, by page and by the query the AI used to retrieve your content. It tells you whether AI answers rely on your site, and on which pages.

Bing's [launch post](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) from February 2026 lists the core views: Total Citations, Average Cited Pages, grounding queries, page-level citation activity and visibility trends. Coverage spans Microsoft Copilot, AI-generated summaries in Bing and select partner integrations.

Read the grounding queries with care. Bing says the data shown represents a sample of overall citation activity, so treat the list as a guide to themes and leave it out of any precise count.

The page counts need the same caution. Bing's [launch post](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) says Average Cited Pages does not indicate ranking, authority or the role of any page, so a page cited often is being used as a source, which says nothing on its own about how well it ranks.

## What Citation Share and Topics Portfolio add

Citation Share and Topics Portfolio turn the report from a count into a comparison. Citation Share shows how much of the citation space you hold for a query. Topics Portfolio groups your queries into themes and shows related queries where other sites are cited and you are absent. Together they show where you lead and where you are missing.

According to [Supermetrics](https://supermetrics.com/blog/measure-ai-search-visibility), Microsoft expanded the report on 16 June 2026 with four views: Intents, Topics, Citation Share and Compare. It defines Citation Share as the percentage of citations attributed to your site out of all citations shown for the same grounding query, and notes that it does not represent traffic share.

The newest addition arrived in October. Bing's [Topics Portfolio](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/) beta groups grounding queries into thematic clusters and lists opportunity queries where other sites appear and yours does not. Bing describes the numbers as directional signals for planning, and the tab only appears when your site has enough data.

The other two June views help with diagnosis. Intents groups grounding queries by the kind of question asked, and Compare overlays a previous period, which is how you check whether a content update changed anything, as [Supermetrics](https://supermetrics.com/blog/measure-ai-search-visibility) describes them.

## What the report leaves out

The report shows presence in answers and stops there. It has no click data, no traffic figures and no conversion data, and it covers only Microsoft's AI surfaces. Anything about outcomes still has to come from GA4 and your CRM, and anything about ChatGPT or Google needs a different source.

The UK agency [Koozai](https://www.koozai.com/blog/search-marketing/bing-webmaster-tools-launches-ai-performance-reporting/) flagged this at launch: the data is about citations, with no traffic or engagement metrics. Google's equivalent has a gap of its own. Its generative [AI report](https://support.google.com/webmasters/answer/16984139) in Search Console counts how often links to your site were shown in AI Overviews and AI Mode. Those are impressions, which tell you a link was on screen, while Bing's figures tell you a page was used as a source.

Put the two side by side and each covers a different part of the same picture. We walked through the Google side in our breakdown of the [Search Console](/insights/search-console-ai-performance-report) report.

## How to use the report, step by step

Using the report well takes five steps, most of them done once. You set it up, fix a baseline, check which pages get cited, act on the opportunity queries, and then feed one number into your regular reporting. After the first month, the routine is a monthly check that takes well under an hour.

1. Add and verify your site in Bing Webmaster Tools, then open the AI Performance report.
2. Export the last three months of total citations and cited pages to set a baseline.
3. Compare the most-cited pages with the pages you most want cited, and note the gaps.
4. Use the opportunity queries in Topics Portfolio to choose which pages to update or create.
5. Add total citations and Citation Share for your priority queries to your monthly AI search report.

Step 3 is where the useful findings usually sit. If AI answers cite an old blog post on a topic where you have a better service page, the fix is often a content update and some [internal links](/insights/ai-citations-vs-mentions) pointing at the page you want cited.

## Where it fits in your AI search reporting

Bing's report belongs in the visibility section of an AI search report, below the business outcomes. It is the only first-party citation data available, which makes it the most reliable visibility signal you have. It still describes one ecosystem, so present it as a sample of how AI answers treat your content.

In a leadership report, one line is enough: total citations and Citation Share on your priority queries, with a six-month trend. Pair it with referral sessions from Bing and Copilot in GA4, so the visibility line and the outcome line describe the same ecosystem. We set out the full one-page structure in our guide to [reporting AI](/insights/ai-search-performance-reporting) search performance.

Keep the cadence monthly. Citation counts move with Bing's own changes as well as yours, and a single week rarely tells you anything you can act on.

Watch the trend more than the absolute number. A steady rise in citations on the topics you sell into tells you the content is being used, even before referral traffic is large enough to show up clearly in GA4.

If you want the report connected to GA4 and your CRM in one monthly view that leadership will read, see our [services](/services) or [contact us](/contact) to set it up.
