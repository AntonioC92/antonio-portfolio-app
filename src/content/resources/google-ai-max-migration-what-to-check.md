---
title: "Google's AI Max Migration: What Changed in Your Search Campaigns"
slug: "google-ai-max-migration-what-to-check"
description: "Google auto-migrated legacy Search campaigns to AI Max through September 2026, with no opt-out. Here's what changed in the account, what to audit first, and how to keep control of spend."
metaTitle: "Google AI Max Migration: What to Check Now | Caruso Martech"
metaDescription: "Google auto-migrated Search campaigns to AI Max by September 30, 2026, no opt-out. What changed, what to audit, and how to protect spend and reporting."
date: "2026-09-23"
lastUpdated: "2026-09-23"
category: "Acquisition Systems"
tags: "google ads, ai max, search campaigns, ppc automation"
---

Every Search campaign still running on campaign-level broad match or legacy Automatically Created Assets got moved to AI Max this month. Google gave no opt-out, and the only window to avoid it closed on August 31. If you manage paid search for a small team, your account changed underneath you whether or not anyone flagged it.

## Quick answer: what does Google's AI Max migration mean for your search campaigns?

- Between September 1 and 30, 2026, Google automatically upgraded every eligible Search campaign, meaning any campaign still using campaign-level broad match or legacy Automatically Created Assets, to AI Max for Search.
- There was no opt-out. The only way to avoid the change was switching off broad match and ACA before August 31.
- AI Max expands keyword matching further than broad match did and generates assets automatically, so search term reports and asset performance need a fresh read, not the same one you used last quarter.
- Dynamic Search Ads are not affected yet. That migration is scheduled for February 2027.
- Microsoft's equivalent, AI Max for Search, launched in May 2026 and stays opt-in, so Bing campaigns were not forced into anything.

## What actually changed in the account

Google folded campaign-level broad match and legacy Automatically Created Assets into AI Max for Search automatically. If either setting was active anywhere in your account, that campaign is now running expanded keyword matching and AI-generated assets, whether your team asked for it or not.

The mechanics matter more than the headline. Future Google Ads API versions released after September 1 drop support for the legacy broad match and ACA entities entirely, according to [Search Engine Land](https://searchengineland.com/google-sets-ai-max-migration-timeline-for-search-campaigns-485006). Older API versions keep working until their normal sunset, expected around September 2027, so scripts and bid management tools built on those entities have roughly a year before they need rebuilding rather than a hard stop today.

Reporting shifted too. Asset-level and search-term breakdowns now reflect AI-generated creative and expanded query matches rather than the manually built assets you were reading last month, a change [Improvado](https://improvado.io/blog/google-ads-ai-max-september-2026-upgrade) flagged as the part most teams miss until a monthly report suddenly looks different.

## Why Google pushed this through without an opt-out

Google is consolidating Search automation the same way it consolidated Shopping into Performance Max: fewer manual levers, more decisions made inside one automated layer. Broad match and ACA were already halfway to AI Max in behavior, so folding them in removes a maintenance path Google no longer wants to support separately.

This fits a wider shift in how acquisition systems get run. The same logic that pushed [self-adjusting campaigns](/insights/self-adjusting-campaign-automation) into mainstream automation platforms is now showing up inside the ad platforms themselves: decisions that used to sit with a human get delegated to a model that reacts faster than any manual review cycle could.

The tradeoff is the same one every automated acquisition system creates. You get more matching and more variations for less manual setup, and you also get less visibility into any single decision. Applying the same discipline that governs [AI agents](/insights/ai-agents-marketing-small-teams) doing other marketing work, clear boundaries and someone checking outcomes weekly, keeps that tradeoff from turning into a spend problem.

## What to audit in your account this week

Start with the search term report, because expanded matching is where budget leaks fastest. Pull the last two weeks of terms against the two weeks before September 1 and look specifically for queries that would have been excluded under standard broad match.

Check your negative keyword lists are still attached and firing. AI Max respects account and campaign-level negatives, but [Fluxary](https://fluxary.app/blog/google-ai-max-forced-migration-september-2026) points out that campaigns migrated mid-month sometimes carry negative lists that were built for a narrower match type and no longer cover the new query range.

Review the asset library next. AI-generated headlines and descriptions replaced anything built on legacy ACA, so confirm brand voice, claims, and pricing language in the new assets match what a person would have approved. This is exactly the kind of drift a routine [stack audit](/insights/martech-stack-audit) is built to catch before it reaches a client-facing ad.

## Where the real risk sits: budget pacing and brand terms

Broader matching pulls in less controlled traffic, and that traffic is not evenly good. Watch cost-per-conversion by campaign daily for the first three weeks post-migration, since a pacing shift toward higher-cost, lower-intent terms tends to show up in spend before it shows up in conversion volume.

Brand and competitor terms deserve their own check. Expanded matching can pull competitor names or your own brand terms into scope in ways campaign-level broad match never did, so a quick weekly scan of the search term report for anything brand-adjacent is worth the ten minutes it takes.

Microsoft's own pilot data for its opt-in AI Max for Search showed a roughly 5% CTR improvement and an 8% incremental conversion lift, per [Microsoft Advertising](https://about.ads.microsoft.com/en/blog/post/august-2026/ai-max-for-search-and-other-product-news-for-august-2026). Treat that as directional rather than a guarantee for Google's mandatory version: it came from an opt-in pilot with a comparison group, not a forced account-wide switch.

## How this affects attribution and reporting

Campaign-level comparisons across the migration month are not apples to apples. The same campaign now spans a different mix of query types and creative than it did in August, so a straight before-and-after read of conversion rate will blame or credit AI Max for shifts that are really just a different traffic mix.

Set September 30 as a clean baseline reset rather than trying to bridge the old and new numbers. This is the same trap that shows up whenever [attribution](/insights/attribution-challenges-2025) gets murkier after a platform change: the fix is a new baseline, not a forced comparison against data collected under different rules.

## What small teams should do differently starting now

Rebuild your negative keyword list against the new match behavior instead of assuming the old one still covers you. Review the AI-generated asset library monthly rather than once at launch, since Google keeps refreshing assets as it gathers more signal. And keep a weekly ten-minute check on brand and competitor terms in the search term report, since that is the fastest place expanded matching causes real budget damage.

None of this requires reversing the migration, since there is no way to reverse it. It requires treating AI Max the way you would treat any new hire running your ad account: give it clear boundaries, check its work on a schedule, and adjust the boundaries when the work drifts.

If your search campaigns went through this migration without anyone reviewing the account first, that is exactly the kind of gap we catch in a [stack audit](/services). Get in [touch](/contact) if you want a second set of eyes on what actually changed in your account this month.
