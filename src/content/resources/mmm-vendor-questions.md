---
title: "What to Ask a Marketing Mix Modeling Vendor Before You Sign"
slug: "mmm-vendor-questions"
description: "Marketing mix modeling vendors all promise accurate, actionable models. These are the questions that separate the ones that will change your budget from the ones that will hand you a deck."
metaTitle: "Questions to Ask an MMM Vendor | Caruso Martech"
metaDescription: "The questions that separate MMM vendors worth signing from the rest: model ownership, transparency, calibration, refresh cadence and what happens at exit."
date: "2026-11-03"
lastUpdated: "2026-11-03"
category: "Acquisition Systems"
tags: "marketing mix modeling, MMM vendors, vendor selection, marketing measurement, procurement"
---

Every marketing mix modeling vendor demo looks the same. A clean dashboard, a response curve, a confident ROI number per channel and a promise that the model will tell you where to move budget. The differences that decide whether you get value only show up months after the contract is signed.

The market is crowded enough that this matters. An [IAB Australia](https://ppc.land/iab-australia-unveils-comprehensive-market-mix-modeling-vendor-landscape/) landscape report profiled twelve active vendors, from classical econometrics shops to Bayesian software platforms and Google's and Meta's open-source tools. Most teams evaluating MMM for 2027 will speak to three or four of them, and the questions below are what we use to tell them apart.

## Quick answer: what should you ask an MMM vendor before signing?

- Who owns the model, the code and the outputs if you leave?
- Can they explain the assumptions and priors behind each channel estimate?
- How do they calibrate the model against real experiments?
- How often does the model refresh, and how does that match your budget cycle?
- How long until the first usable insight, and what do they need from you to get there?

## Who owns the model when the contract ends

Ownership is the first question because it decides your switching cost. Some vendors hand over the code, parameters and data pipeline; others keep everything on their platform and you leave with a PDF. Ask in writing what you can export on day one and what you keep at exit.

This matters more now that free frameworks exist. Google's [Meridian](https://developers.google.com/meridian/docs/basics/roi-mroi-response-curves) and Meta's Robyn mean a capable analyst can run a model in-house, so a managed vendor should be selling expertise and speed. Lock-in through data custody is a weaker reason to pay.

Ask for a sample export file during the sales process. If the vendor hesitates to show what you would walk away with, that tells you how the exit conversation will go. We apply the same test to every tool in a [stack audit](/insights/martech-stack-audit): know what you can take with you before you commit to it.

## Whether they can explain how the model works

A vendor worth signing can walk you through the assumptions behind every channel estimate in plain language. That includes the priors they set, how they model carry-over and saturation, and which external factors they control for. If the answer is "proprietary algorithm," treat the output as unverifiable.

The UK agency [Impression](https://www.impressiondigital.com/blog/questions-to-ask-marketing-mix-modelling-vendors/) puts transparency near the top of its own vendor checklist: whether the maths behind the outputs can be explained, and how confident the vendor is in each result. Both questions are fair to ask in a first meeting.

Push on confidence intervals specifically. A channel ROI shown as a single number hides how uncertain it is, and a wide range on a channel you plan to cut changes the decision completely. Ask to see the ranges for your two largest channels in the pilot output.

## How they calibrate against real experiments

Calibration means checking the model's estimates against controlled tests, such as geo splits or platform lift studies, and feeding those results back in. Vendors that calibrate produce estimates you can defend to finance. Vendors that skip it produce estimates that drift from reality with every refresh.

[Sellforte's](https://sellforte.com/blog/best-mmm-solutions-retail-brands) published evaluation framework lists calibration with geo or first-party experiments as a core criterion, alongside exposing model assumptions and providing model health diagnostics. Use that list as a scoring sheet across your shortlist.

Ask each vendor for one example where a test result changed the model's estimate for a channel. A concrete answer shows the process actually runs. A general answer suggests it only exists in the pitch deck.

## How often it refreshes and who acts on it

The refresh cadence should match how often you can move budget. A model that refreshes quarterly suits a team that reallocates quarterly; weekly refreshes only pay off if someone has the authority to act weekly. Mismatched cadence is one of the most common reasons MMM output gets ignored.

Sellforte's framework makes the same point, scoring vendors on whether refreshes match the client's decision cycle. Ask the vendor what their typical client actually does with each refresh, and who on the client side owns that decision.

We covered the internal side of this in our guide to [budget decisions](/insights/mmm-results-budget-decisions). The vendor question is simpler: can they deliver on the cadence your planning process needs, without charging extra for each run?

## How long until the first useful answer

Time to first insight depends mostly on your data, and a good vendor will tell you that before quoting a date. Ask what they need from you, in what format, and who on their side owns data onboarding. Vague timelines usually mean the data work lands on your team.

The same IAB Australia report notes that vendors typically need at least two years of weekly historical data, with daily data sometimes shortening the requirement. Our article on [data requirements](/insights/marketing-mix-modeling-data-requirements) covers what that window looks like in practice and why implementation runs longer than sales calls suggest.

Ask for named onboarding milestones in the contract. A first model date, a first refresh date and a calibration test date give you something to hold the vendor to.

## How they measure their own accuracy

Every vendor will claim accuracy, so ask how it is measured. Out-of-sample forecasting, where the model predicts a period it was never trained on, is the standard worth asking for. In-sample fit statistics mostly show the model can describe the past it was built from.

Recast, for example, reports 94.4 percent out-of-sample forecast accuracy across its clients, according to the IAB Australia coverage. Whether that number holds for your business depends on your data, so ask to see the holdout test run on your own history during the pilot.

A pilot with a holdout period is the cleanest way to compare two shortlisted vendors. Give both the same data, hold back the most recent quarter, and see whose model predicts it better.

## When an in-house model makes more sense

Smaller teams with a capable analyst and clean data can often run an open-source model themselves for a fraction of a managed contract. The trade is time and maintenance: someone has to own the code, the refreshes and the calibration tests. If nobody can, a vendor is the faster route.

We walk through that trade-off in our piece on MMM for a [small team](/insights/marketing-mix-modeling-small-teams). The questions above apply either way, because an in-house model needs the same answers on ownership, calibration and cadence.

If you are shortlisting MMM vendors for 2027, we run independent vendor evaluations and set up the testing and review process that makes the model pay off. See our [services](/services) or [contact us](/contact) before the contract is signed.
