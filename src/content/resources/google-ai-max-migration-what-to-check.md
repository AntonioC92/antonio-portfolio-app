---
title: "Google's AI Max Migration: What Changed in Your Search Campaigns"
slug: "google-ai-max-migration-what-to-check"
description: "Google moved legacy Search campaigns to AI Max through September 2026. Here is what changed in the account, what to audit now, and how to keep control of spend."
metaTitle: "Google AI Max Migration: What to Check Now | Caruso Martech"
metaDescription: "Google moved Search campaigns on broad match or legacy auto assets to AI Max in September 2026. What changed, what to audit, how to protect spend."
date: "2026-10-18"
lastUpdated: "2026-10-18"
category: "Acquisition Systems"
tags: "google ads, ai max, search campaigns, ppc automation"
---

Through September 2026, Google moved every Search campaign still running campaign-level broad match or legacy Automatically Created Assets into AI Max for Search. The only way to avoid it was switching those settings off before the migration ran, and plenty of small accounts never did. If you manage paid search for a small team, your account changed underneath you, and October is the first full month of data under the new rules.

## Quick answer: what does Google's AI Max migration mean for your search campaigns?

- During September 2026, Google automatically upgraded every eligible Search campaign, meaning any campaign using campaign-level broad match or legacy Automatically Created Assets, to AI Max for Search.
- Advertisers could avoid it only by turning those legacy settings off, or switching AI Max on manually, before their campaigns migrated. Google also blocked new broad match and ACA setups from August 3.
- AI Max matches a wider range of queries and can write ad text automatically, so search term and asset reports need a fresh review against a new baseline.
- Dynamic Search Ads move later: Google pushed that migration to February 2027.
- Microsoft Advertising made its own AI Max generally available in late August 2026. It is optional there, though switched on by default for new Search campaigns.

## What actually changed in the account

Campaigns that used campaign-level broad match now run AI Max search term matching. Campaigns that used legacy Automatically Created Assets also get text customization, so Google writes headline and description variations for them. Both changes happened automatically, so any campaign with either setting active in August is running AI Max today, whether or not your team chose it.

The API side has a longer fuse. New Google Ads API versions released after September 1 remove the legacy broad match and ACA entities entirely, according to [PPC Land](https://ppc.land/google-blocks-new-broad-match-settings-before-september-1-ai-max-migration/). Older versions keep working until their scheduled sunset around September 2027, which gives scripts and bid tools built on those entities about a year to be rebuilt.

Reporting moved as well. [Improvado](https://improvado.io/blog/google-ads-ai-max-september-2026-upgrade) notes the search terms report gains a dedicated AI Max view that needs a Source column added by hand, and Google-written text appears as "Google AI" in the asset report. It also flags landing-page data that can silently fail to join in downstream reports, which is how a monthly dashboard shifts without anyone knowing why.

## Why Google pushed this through without an opt-out

Google is consolidating Search automation into one layer, the same way it folded Smart Shopping into Performance Max. Campaign-level broad match and ACA already behaved like partial versions of AI Max, so merging them removes a separate maintenance path and puts more matching and creative decisions inside Google's model.

This fits a wider shift in how acquisition systems run. The logic that pushed [self-adjusting campaigns](/insights/self-adjusting-campaign-automation) into mainstream automation platforms now sits inside the ad platforms themselves, where decisions that used to belong to a person go to a model that reacts faster than any manual review cycle.

The tradeoff is the one every automated acquisition system creates. You get more matching and more ad variations for less setup, and you see less of the reasoning behind any single decision. The discipline that governs [AI agents](/insights/ai-agents-marketing-small-teams) doing other marketing work, with clear boundaries and someone checking outcomes weekly, keeps that tradeoff from becoming a spend problem.

## What to audit in your account this week

Audit three things in this order: the search term report, your negative keyword coverage, and the AI-generated asset library. Expanded matching is where budget leaks fastest, negatives are your main brake on it, and generated assets are where off-brand claims or outdated pricing can slip into a live ad.

Pull search terms from the last four weeks and compare them with the four weeks before September 1, using the AI Max view so you can see which queries came from the new matching. Look specifically for queries that standard broad match would have left alone.

Then confirm your negative keyword lists are still attached at account and campaign level. [Fluxary](https://fluxary.app/blog/google-ai-max-forced-migration-september-2026) describes negatives as load-bearing under broader matching and recommends reviewing new search terms weekly for the first month. Lists built for a tighter match type rarely cover the wider query range on their own.

Finally, read the generated headlines and descriptions as if you were approving them yourself. Brand voice, claims and pricing language should match what your team would sign off, and catching that drift is part of what a routine [stack audit](/insights/martech-stack-audit) is for.

## Where the real risk sits: budget pacing and brand terms

The biggest risk is spend drifting toward higher-cost, lower-intent queries before conversion data shows the problem. Broader matching pulls in traffic of uneven quality, so watch cost per conversion by campaign at least weekly through the first two months, and review brand and competitor terms separately from everything else.

Expanded matching can pull competitor names, or your own brand terms, into campaigns that never targeted them. A ten-minute weekly scan of the search term report for anything brand-adjacent is cheap insurance, especially when a separate brand campaign already covers those queries.

Timing makes this harder. The migration landed weeks after Google changed how [Target CPA](/insights/google-ads-bidding-target-change-2026) and ROAS bidding behaves on budget-limited campaigns, so many accounts absorbed two automation changes in a single quarter.

For a sense of the upside, Microsoft reported at least an 8% conversion lift from early tests of its own AI Max, based on 44 advertiser A/B experiments run between June and August 2026, per [Microsoft Advertising](https://about.ads.microsoft.com/en/blog/post/august-2026/reimagining-search-campaigns-for-the-ai-era-with-ai-max). Those tests held bid strategy and budget constant with a control group. Google's forced version had no such comparison, so treat the number as directional for your own account.

## How this affects attribution and reporting

Campaign comparisons across September will mislead you. The same campaign now serves a different mix of queries and creative than it did in August, so a straight before-and-after read of conversion rate credits or blames AI Max for what is really a change in traffic mix.

Treat October 1 as the new baseline and report the two periods separately. It is the same problem our checklist for [platform migrations](/insights/attribution-gaps-after-platform-migration) deals with: when the rules behind the data change, a fresh baseline gives you numbers you can defend in a budget review.

## What small teams should do differently from here

Treat AI Max as a permanent part of the account and build routine checks around it. Rebuild negatives for the wider match behavior, review generated assets monthly, and keep a weekly eye on brand terms, since those three habits cover most of the budget and brand risk the migration introduced.

Google keeps refreshing generated assets as it collects more signal, so a one-off review at migration goes stale within weeks. The old broad match and ACA settings are gone for good, which leaves a simple choice per campaign: AI Max with tight controls, or plain keyword matching with AI Max switched off.

Either way, manage it like a new hire running your ad account. Set clear boundaries, check the work on a schedule, and tighten the boundaries the moment results start to drift.

If your search campaigns went through this migration without anyone reviewing the account, that gap is exactly what our [services](/services) are built to close. [Get in touch](/contact) and we will take a second look at what changed in your account since September.
