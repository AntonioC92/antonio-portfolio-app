---
title: "How Much Data Marketing Mix Modeling Actually Needs Before It Works"
slug: "marketing-mix-modeling-data-requirements"
description: "Marketing mix modeling vendors quote budgets before they quote data requirements. Here is the historical data window and implementation timeline that actually determines whether the output is trustworthy."
metaTitle: "MMM Data Needs and How Long Setup Takes | Caruso Martech"
metaDescription: "How long marketing mix modeling takes to implement after you sign with a vendor, how much historical data it needs, and what slows the first model down."
date: "2026-10-03"
lastUpdated: "2026-11-27"
category: "Acquisition Systems"
tags: "marketing mix modeling, attribution, marketing measurement, data strategy"
---

Most marketing mix modeling pitches open with the output: channel-level incrementality, a weekly optimization view, a number you can defend in a leadership meeting. Almost none of them open with the input.

A model built on nine months of patchy spend data will still produce a confident-looking answer. You will not find out it was wrong until you have already reallocated budget on the strength of it.

I covered the case for small teams adopting [marketing mix modeling](/insights/marketing-mix-modeling-small-teams) once the tooling got cheap. This is the part that pitch decks skip: what the model actually needs from you first, and how long that takes to put in place.

## Quick answer: how much data does marketing mix modeling actually need?

- At least two years of weekly spend and outcome data for a geo-level model, and three years for a national model or when only monthly data exists, per [Meridian's docs](https://developers.google.com/meridian/docs/user-guide/collect-data).
- Recast, a widely used managed platform, builds on roughly 27 months of history to account for carry-over effects and a proper burn-in period, according to [Recast](https://getrecast.com/optimize-your-marketing-mix-modeling-with-the-ideal-data-window).
- Self-service tools can run on less: [Optimix](https://optimix51-optimix-blog.hf.space/?p=229) puts a practical floor around 26 weeks of weekly data for a stable model, a statistical-minimum threshold well short of what real accuracy needs.
- Implementation runs through several distinct phases: scoping, data collection, cleaning, model build, then calibration against known results. Expect weeks before the first usable output lands.
- Cost and data burden move together. Managed services carry the largest fee per engagement; self-service platforms cost less to license and more in your own analyst time, per [Improvado](https://improvado.io/blog/marketing-mix-modeling-providers).

## The data window that actually matters

The time period you feed a model does more to determine its reliability than the modeling tool itself. A model needs enough history to separate a genuine seasonal pattern from a one-off campaign spike, and that separation takes more calendar time than most teams budget for before they start shopping for a vendor.

Google's own [Meridian documentation](https://developers.google.com/meridian/docs/user-guide/collect-data) recommends a minimum of two years of weekly data for a geo-level model and three years for a national model.

Recast's 27-month window exists for a related but different reason: carry-over effects from past spend linger for months after a campaign ends, and a shorter window cuts that tail off before it fully plays out, per [Recast](https://getrecast.com/optimize-your-marketing-mix-modeling-with-the-ideal-data-window). Optimix's 26-week floor is a statistical-stability threshold. Accuracy is a separate bar, and a meaningfully higher one for a seasonal business.

## Why implementation takes longer than the sales call suggests

A marketing mix modeling engagement gets sold as a dashboard and delivered as a project. Scoping, data collection, cleaning, model build, and calibration against known results each take real calendar time, and almost all of it happens before you see a single output you can act on.

The internal readiness work is usually the longest stretch of the whole engagement, longer than the vendor's own build phase. Pulling two-plus years of clean, channel-level spend into one file is slow when that spend lives across five or six disconnected ad accounts and a CRM that was never built to export cleanly. This is the same groundwork a proper [stack audit](/insights/martech-stack-audit) forces you to do anyway, and teams that have already done one move through vendor onboarding noticeably faster.

A model is also only as trustworthy as the first-party data feeding it. If your [first-party data](/insights/first-party-data-strategy) is inconsistent across platforms, the model inherits that inconsistency rather than correcting it. It bakes straight into the output as noise the model mistakes for signal.

## The cost and effort split between self-service and managed MMM

Marketing mix modeling pricing splits into two real options, and the cheaper one still carries a real cost. It simply moves that cost from a vendor invoice onto your own team's calendar, so knowing which option fits starts with being honest about how much analyst time you actually have free each week.

Managed services cost the most and include embedded expertise, data onboarding, and ongoing model operation. Self-service platforms cost less but need standing analyst time every week, according to [Improvado's](https://improvado.io/blog/marketing-mix-modeling-providers) 2026 vendor review, which also scores buyer readiness: a low score points toward managed services, a high one toward self-service or open-source tools like Google Meridian or Meta Robyn.

A readiness check like the one I use for [automation rollouts](/insights/marketing-automation-readiness-checklist) applies just as well here. The real test is whether the system feeding the model stays clean enough to run without someone babysitting it every week. Most teams only discover the true maintenance cost once the first monthly reconciliation slips.

## Why the Robyn-versus-Meridian choice matters right now

Picking between Robyn and Meridian carries real stakes right now. Meta is quietly winding down investment in Robyn while Google pushes Meridian hard enough to tie it to internal sales targets, and that imbalance affects how much support you can expect two years into a model built around either one, per [AdExchanger](https://adexchanger.com/marketers/googles-meridian-and-metas-robyn-a-gift-to-measurement-or-trojan-horses).

Robyn still has a large installed base and plenty of community documentation, which keeps an existing Robyn model genuinely useful today. A new build on a tool with fading vendor investment is a different bet than a new build on one Google is actively pushing into Google Analytics 360, and that difference is worth weighing before you commit a quarter of analyst time to either one.

## A readiness check before you commit

Before any model gets built, the useful question is simpler than the vendor pitch makes it sound: do you have two years of clean, channel-level spend and outcome data sitting somewhere your team can actually pull it, and can someone on your team give it regular analyst time for the months it takes to stand the model up.

A no to either question points to real groundwork: cleaning the data and freeing up the analyst hours before a vendor gets involved. Cookie loss and the arrival of free, open-source tooling already made the case for small teams revisiting marketing mix modeling in the first place.

Closing the data and time gap is what makes that case hold up once a vendor is actually in the room, and a sales demo leaves that gap for you to discover later, usually after the contract is signed. If you want a straight read on whether your current setup can support a model before you sign anything, [get in touch](/contact) or see how I approach it in [my services](/services).

## FAQ

### How much historical data do I need for a marketing mix model?

Google's own [Meridian documentation](https://developers.google.com/meridian/docs/user-guide/collect-data) recommends a minimum of two years of weekly data for a geo-level model and three years for a national model. Recast builds on roughly 27 months of history. Self-service tools can run on about 26 weeks, a stability floor well below what reliable results need.

### How long does it take to implement marketing mix modelling?

Expect weeks before the first usable output. The work runs through scoping, data collection, cleaning, model build and calibration against known results. The longest stretch is usually internal: pulling two or more years of clean, channel-level spend from several ad accounts and a CRM into one file.

### Should I build on Google Meridian or Meta Robyn?

For a new model, weigh vendor investment as much as features. AdExchanger reports that Meta is winding down investment in Robyn while Google pushes Meridian, including into Google Analytics 360. An existing Robyn model is still useful today, and a new build has to stay supported for years after launch.

### Is my business ready for marketing mix modelling?

It is ready once two years of clean, channel-level spend and outcome data sit somewhere the team can pull it, and someone has analyst time to build the model and keep its inputs clean. If either is missing, the first job is cleaning and connecting that data, before any vendor gets involved.
