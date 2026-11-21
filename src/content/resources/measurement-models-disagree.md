---
title: "When Attribution, Incrementality and MMM Disagree: How to Cross-Check Them"
slug: "measurement-models-disagree"
description: "Attribution says one channel is winning, the marketing mix model says another, and a lift test says something else again. Here is how to read the disagreement and decide what to trust."
metaTitle: "When Attribution and MMM Disagree | Caruso Martech"
metaDescription: "Attribution, incrementality tests and MMM often give different answers. How to read the gap between them, and which one to trust for each budget decision."
date: "2026-11-17"
lastUpdated: "2026-11-17"
category: "Acquisition Systems"
tags: "attribution, incrementality testing, marketing mix modeling, unified measurement, marketing measurement"
---

Your attribution dashboard says paid social drove a third of last quarter's revenue. The marketing mix model credits it with half that. A geo test run in the spring found a lift somewhere in between. Three methods, three answers, and a budget meeting next week that wants one number.

This is now the normal state for any team using more than one measurement method. According to [MarTech](https://martech.org/75-of-marketers-say-their-measurement-systems-are-falling-short/), the IAB's State of Data 2026 report found three out of four marketers say attribution, incrementality and media mix modeling are falling short on speed, accuracy or trust. The disagreement between them is useful information, once you know how to read it.

## Quick answer: what should you do when attribution, incrementality and MMM disagree?

- Expect some disagreement, because each method measures a different thing over a different time window.
- Use a well-run incrementality test as the reference point when the methods conflict on a specific channel.
- Feed test results into the marketing mix model as calibration, so the model learns from them.
- Keep attribution for in-channel and campaign decisions, where its detail is useful.
- Investigate any gap that grows over time, because it often points to a tracking or data problem.

## Why the three methods give different answers

The three methods disagree because they answer different questions. Attribution assigns credit for conversions it can track to the touchpoints it saw. Incrementality tests measure what a channel added during a test. A marketing mix model estimates each channel's contribution from aggregate spend and outcomes over months or years.

Attribution only sees the journey it can track, so it tends to over-credit channels close to the conversion, like branded search and retargeting. It also misses influence that never produces a trackable click, a gap I covered in my piece on attribution and [measurement](/insights/attribution-vs-measurement).

Incrementality tests are precise for one channel in one period, and they cost money and time to run, so most teams can only afford a few each year. Models see the whole picture across a long window, and they depend heavily on clean input data and sensible assumptions. Each method is wrong in a different direction, which is exactly why comparing them is useful.

## Which method to trust for which decision

Use each method for the decision it is built to make. Attribution guides day-to-day campaign and creative choices within a channel. Marketing mix models guide budget splits between channels. Incrementality tests settle disputes about whether a specific channel truly drives results, and they keep the other two honest.

When attribution and the model disagree on a channel's value, avoid splitting the difference. Pick the channel where the gap matters most for next quarter's budget and design a test for it, such as a geo holdout or a platform lift study.

[Recast](https://getrecast.com/integrating-marketing-mix-modeling-into-decision-making-process/) makes the same recommendation for high-stakes calls: build confidence through lift tests and geo-market tests, especially for decisions that are politically sensitive or financially significant.

## How to cross-check them, step by step

Cross-checking works as a regular routine more than a one-off investigation. You line up the three methods on the same channels and periods, flag the gaps, test the largest one, feed the result back into the model, and track whether the gaps narrow. Done quarterly, it turns three competing reports into one view the budget owner can use.

1. List each channel's estimated contribution from attribution, the model and any recent tests, using the same time period for all three.
2. Flag every channel where the methods differ by enough to change a budget decision.
3. Run an incrementality test on the flagged channel with the most budget at stake.
4. Use the test result to calibrate the marketing mix model before its next refresh.
5. Repeat each quarter and track whether the gaps between the methods narrow.

Step 4 is the one that compounds. A model calibrated with real test results gets closer to the truth each cycle, while a model that never sees a test keeps repeating its own assumptions.

## Calibration: making the model learn from your tests

Calibration means using experiment results to shape what the model believes about a channel before it fits the data. Google's Meridian, for example, sets channel-specific priors from lift tests and other domain knowledge. It makes test results part of the model instead of a separate report nobody reconciles.

Calibration needs care. Google's [Meridian documentation](https://developers.google.com/meridian/docs/advanced-modeling/roi-priors-and-calibration) notes that experiments and MMMs often have different estimands and measurement goals, and that results from a different time period might not apply directly. A spring test may describe a channel that behaves differently by autumn.

So record the conditions of every test you feed into the model: the dates, the spend level, the regions and what was measured. Keep that record next to the model's configuration, where the person running the refresh will actually see it. That record is what lets you judge whether an older test still deserves weight in the next refresh.

## When a disagreement points to a data problem

A gap between methods that suddenly widens usually signals a data problem before a real change in performance. A tracking break, a renamed campaign, a consent change or a missing spend feed will move one method and leave the others alone. Check the inputs before you conclude that a channel's value has shifted.

The MarTech coverage makes the same point: divergences between models can flag deeper issues and help teams converge on a more unified view. Treat a sudden divergence as an alert, and only treat it as a finding once the data has been checked.

Typical causes are easy to test. Compare conversion counts in the ad platforms, analytics and CRM for the same week, check that spend figures match invoices, and confirm that nothing changed in your consent banner or tag setup.

Platform changes are the most common trigger I see. A move to a new CRM, analytics property or ad account structure breaks tracking in quiet ways, and my [migration checklist](/insights/attribution-gaps-after-platform-migration) covers where to look first.

## What teams that do this well have in common

The teams that get value from measurement connect their methods into one process. They run tests on a schedule, calibrate the model with the results, and use one shared view in budget meetings. The disagreements still appear, but they get resolved every quarter before they pile up.

The data backs this up. A Harvard Business Review and Google report, covered by [Mobile Marketing Reads](https://www.mobilemarketingreads.com/marketers-push-to-operationalize-mmm-as-adoption-grows-but-execution-gaps-persist/), found 40 percent of leading organisations have connected MMM with other measurement systems, against 15 percent of laggards.

Connecting the methods also changes the budget conversation. Instead of three reports arguing, the team brings one view with known gaps, which is how I approach turning model output into [budget decisions](/insights/mmm-results-budget-decisions).

If your attribution, tests and model keep telling different stories, I help teams set up the cross-check routine and the calibration loop between them. See my [services](/services) or [contact me](/contact) to talk it through.
