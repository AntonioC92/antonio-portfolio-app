---
title: "GA4 Event Naming Conventions: A Practical Guide"
slug: "ga4-event-naming"
description: "Inconsistent event names turn GA4 into a reporting mess within a few months. Here is a naming convention that scales, and how to clean up an account without losing historical data."
metaTitle: "GA4 Event Naming Conventions Guide | Caruso"
metaDescription: "A practical GA4 event naming convention that scales past the first few months, plus how to clean up a messy account without losing historical data."
date: "2026-08-05"
lastUpdated: "2026-08-05"
category: "Acquisition Systems"
tags: "ga4, event naming, marketing analytics, tracking setup, marketing operations"
---

Most GA4 accounts start clean. Someone sets up a handful of events, they map to something real, and the reports make sense. Then three more people start adding tags in GTM, a developer fires a custom event straight from the codebase, and within a few months the events list has `button_click`, `Button_Click`, and `cta_clicked` all measuring roughly the same thing.

Nobody planned this. It happens because event naming has no natural enforcement mechanism. GA4 will accept almost anything you send it, so the account only stays clean if someone is actively keeping it that way.

## Quick answer: what is a good GA4 event naming convention?

- Use an `object_action` pattern in lowercase snake_case, for example `form_submit` or `video_start`, so every name reads the same way.
- Keep event names under 40 characters and avoid the `google_`, `ga_`, and `firebase_` prefixes, which GA4 reserves for its own automatically collected events.
- Push variation into parameters, not new event names. One `form_submit` event with a `form_name` parameter beats five separately named form events.
- Write the convention down in a shared doc before the next event gets added, not after the account is already messy.
- When cleaning up an existing account, map old names to new ones and run both in parallel rather than renaming in place.

## Why naming falls apart as tracking grows

A GA4 property with three events does not need a naming convention. A property with sixty does, and most small marketing teams cross that line faster than they expect once GTM, a website rebuild, and a developer's custom implementation all start contributing events independently.

Each addition makes sense on its own. The person adding `newsletterSignup` is not thinking about the `newsletter_signup` event someone else shipped eight months earlier. Without a single reference document, there is nothing to check against.

The cost is not visible until someone tries to build a report. Two variants of the same event split what should be one clean number into two partial ones, and whoever builds the dashboard has to know both exist just to add them back together. [Porch Group Media](https://porchgroupmedia.com/blog/data-hygiene-statistics/) cites research showing sales and marketing teams waste up to 32 percent of their time on data quality problems instead of the work that actually grows the business. Messy event naming is a direct contributor to that number.

## The convention that scales

The most reliable pattern, and the one [Simo Ahava](https://www.simoahava.com/analytics/implementation-guide-events-google-analytics-4/) and most experienced GA4 implementers converge on, is `object_action` in lowercase snake_case: `cta_click`, `video_complete`, `pricing_view`. It reads consistently whether a human or a query is scanning the events list, and it scales because the object and the action are always in the same order.

Resist the urge to create a new event for every variation of the same action. A `cta_click` event with a `cta_location` parameter set to "hero" or "footer" is more useful than `hero_cta_click` and `footer_cta_click` as two separate events, because it lets you filter and roll up in the same report instead of stitching two events back together by hand.

The parameter layer is where most of the useful detail should live. Event names answer "what happened." Parameters answer "where, on what, and under what conditions." Keeping that split clean is most of what makes a taxonomy hold up as the site and the tracking plan both grow.

## The rules and limits GA4 will not let you design around

Two limits matter more than any style preference. [Google's](https://support.google.com/analytics/answer/13316687) own naming rules cap event and parameter names at 40 characters, and they reserve the `google_`, `ga_`, and `firebase_` prefixes for automatically collected and recommended events, so a custom event using one of those prefixes will be dropped or misread.

The event volume limit matters too. [Analytics Help](https://support.google.com/analytics/answer/9267744) documents a cap of 500 distinct event names per user on app data streams, and while GA4 web streams do not enforce that same hard ceiling, an events list with hundreds of near-duplicate names is unusable in the interface long before you hit any technical limit. Treat 40 to 60 well-defined events as a practical ceiling for most small business sites, not a target to fill.

These constraints are worth designing around from day one. A [platform update](/insights/attribution-gaps-after-platform-migration) can already break attribution without warning, and a tracking plan built on names that quietly violate GA4's own rules just adds another failure mode that shows up months later as numbers that stop making sense.

## Cleaning up a messy account without losing history

The instinct when an account is a mess is to rename everything at once. Resist it. GA4 does not retroactively rename historical data, so renaming `Button_Click` to `button_click` breaks the trend line on the date you make the change, even though nothing about user behavior actually shifted.

The safer approach: build a one-page mapping of every old event name to its correct new name, tag the new event alongside the old one, and let both run for a full reporting cycle, typically 30 to 90 days depending on how the business reports internally. Once stakeholders have confirmed the new events match what the old ones were tracking, retire the old tags. Do not delete the historical data itself. It stays valid under its original name for anything measuring performance before the cleanup.

This is slower than a one-time rename, but it is the only approach that does not cost you a comparison period. A [marketing team](/insights/attribution-challenges-2025) already fighting attribution gaps does not need a self-inflicted one on top of it.

## Making the convention stick

A naming convention that lives in someone's head is just a habit one person has. Write it down: the pattern, a short list of approved objects and actions, and two or three real examples. One shared doc, linked from wherever your team keeps its tracking plan, is enough for most small teams.

Assign an owner. It does not need to be a full-time analytics role, just one person who reviews new events before they ship rather than after a dashboard breaks. This is the same ownership gap we cover in our piece on why [marketing ops](/insights/marketing-ops-underfunded) tends to be underfunded until something forces the issue.

Review the taxonomy whenever the site gets a significant redesign or a new tool gets added to the stack. A [stack audit](/insights/martech-stack-audit) is a natural moment to check whether the events being collected still map to a document anyone can find, or whether the taxonomy has quietly drifted again.

Clean event naming will not fix a broken attribution model or replace a properly built measurement plan, but it removes one of the most common reasons small business reporting stops being trustworthy. If your GA4 account has reached the point where nobody is confident which events are actually reliable, that cleanup is exactly the kind of foundational work we do. [Get in touch](/contact) or look at our services if you want your tracking plan rebuilt on a taxonomy that will still make sense a year from now.
