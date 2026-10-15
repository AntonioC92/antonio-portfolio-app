---
title: "What to Do When Your Marketing Attribution Vendor Shuts Down"
slug: "attribution-vendor-shutdown-checklist"
description: "LeadsRx closes on October 30, 2026. Here's what any team running a standalone attribution tool should do before the next one disappears."
metaTitle: "When Your Attribution Vendor Shuts Down | Caruso Martech"
metaDescription: "LeadsRx closes October 30, 2026. A practical checklist for protecting attribution data before a vendor shuts down, and picking one that won't repeat it."
date: "2026-10-15"
lastUpdated: "2026-10-15"
category: "Acquisition Systems"
tags: "attribution tools, martech stack, vendor risk, marketing data"
---

LeadsRx is shutting down. Unbounce, which owns the attribution tool, confirmed in a [shutdown notice](https://leadsrx.com/leadsrx-end-of-life-notice/) that every subscription ends on October 30, 2026, with no renewals and no extensions. Standalone attribution tools disappear on a schedule set by someone else, and most teams only notice once the dashboard goes dark.

## Quick answer: what should you do when your marketing attribution vendor shuts down?

- Export every field you might need before the vendor's deadline: raw touchpoints, campaign mappings, API keys, saved reports. LeadsRx's own [shutdown notice](https://leadsrx.com/leadsrx-end-of-life-notice/) sets October 30, 2026 as the cutoff and makes export the customer's responsibility.
- Don't wait for a formal shutdown notice to plan an exit. Chiefmartec's [2026 landscape](https://chiefmartec.com/2026-marketing-technology-landscape/) counted 1,367 products removed this year against 1,488 added, so a tool can leave the market almost as fast as a new one arrives.
- Audit which reports, dashboards, or automations pull from the vendor's API before you cancel anything, so nothing downstream breaks silently.
- Pick a successor with a documented, self-serve export path and a data model you can rebuild without the original vendor's cooperation.
- Weigh vendor exit risk the same way you weigh price or features, for every tool in the stack, attribution software included.

## Why LeadsRx closing fits a bigger pattern

LeadsRx closing by itself affects a small slice of marketing teams. The pattern behind it affects nearly everyone running a standalone attribution, analytics, or reporting tool, because martech products exit the market every year, and the teams built on top of them usually find out only once access stops working.

Unbounce bought LeadsRx years ago and kept it running as a side product. In its shutdown notice, the company pointed to shifting priorities and the rising cost of operating and securing the platform. That reasoning matters: a profitable, functioning tool can still get cut once it no longer fits the parent company's roadmap.

LeadsRx isn't the only attribution tool to lose ground this year. Zoho retired its [Marketing Attribution](https://help.zoho.com/portal/en/kb/crm-help-old/faqs/marketing-attribution) module inside its CRM, cutting off new sign-ups before retiring it for existing customers on a fixed date. Adobe customers raised the same concern in Marketo's own [community forum](https://experienceleaguecommunities.adobe.com/adobe-marketo-engage-general-27/bizible-attribution-touchpoints-deleted-181852) after Bizible attribution touchpoints disappeared from their instance without warning.

## How often martech tools actually disappear

Vendor turnover in martech is now close to the rate of new product launches. Chiefmartec's 2026 [Supergraphic](https://chiefmartec.com/2026-marketing-technology-landscape/) counted 15,505 products this year, a net gain of only 0.79% over 2025's 15,384, because 1,488 additions were almost matched by 1,367 removals.

The real story is that near-even split between additions and removals, well ahead of the flat headline total. A separate [Martech Market Report](https://www.martechstackbuilder.com/research/martech-market-report-autumn-2026/) tracking 464 vendors counted 68 that changed ownership since 2023, with 21 of those changes happening in 2026 alone, up from 8 in 2023. An ownership change doesn't always end in a shutdown, but it routinely ends in a pricing change, a feature cut, or a sunset notice with 60 to 90 days on the clock.

A small team running three or four specialized tools, on top of a CRM and an ad platform, is statistically likely to absorb one of these events within a given year. That math is exactly why a response plan is worth building before a deadline forces one.

## What to do before a shutdown deadline hits

Every vendor shutdown comes with a hard deadline and a list of what you lose access to once it passes. The work itself is mechanical: pull every file and permission you might need while the system still responds, and check that each export actually opened and matched what you expected.

Start with raw touchpoint-level data instead of the aggregated report your team checks weekly. Cometly's [migration checklist](https://www.cometly.com/post/switching-attribution-platforms-checklist) recommends covering at least 90 days of conversion events, attribution windows, and any custom configuration, since a rebuilt instance in a new tool rarely imports settings cleanly.

Map which dashboards, Slack alerts, or automations pull from the vendor's API before you touch anything else. A shutdown rarely just removes a login screen. It can quietly break the [automated workflows](/insights/automating-marketing-workflows) that made the stack worth running in the first place, and nobody notices until next quarter's board deck is missing a number.

Confirm the actual data retention window in writing instead of relying on a sales page. LeadsRx draws a hard line at October 30, 2026 for both access and exports, and competing vendors covering the shutdown describe even faster permanent deletion once a subscription lapses elsewhere. Assume your own vendor works the same way unless its documentation says otherwise.

## How to choose a successor that won't repeat this

The right replacement is the one you could leave again without losing anything, because the same churn that just took out LeadsRx will take out some of today's alternatives within a few years too. Judge the exit terms with the same weight you'd give a core feature.

Favor a vendor with a documented, self-serve export, ideally through an API rather than a manual CSV download someone has to remember to run. Cometly's [migration guide](https://www.cometly.com/post/migration-to-new-attribution-tool) treats an auditable export path as the first step of any attribution switch, ahead of comparing a single feature.

Check who owns the company and how recently it changed hands. The Martech Market Report found software companies account for most 2026 acquisitions, with private equity close behind, and a private-equity-owned tool tends to get optimized for margin before it gets optimized for your use case.

Keep a parallel copy of your core attribution data somewhere you control: a warehouse, a spreadsheet export, or a simple database, built while the primary tool is still working fine. That habit is the same discipline behind a proper martech [stack audit](/insights/martech-stack-audit): know what each tool actually does for you, and know what you'd lose the day it stopped doing it.

## What this changes about how you pick tools going forward

Vendor risk deserves the same weight in a buying decision as price or feature list, and most teams currently give it none. A tool's ownership structure and exit terms say more about its next five years than this quarter's feature release does.

This is really an extension of the discipline behind getting attribution and [measurement](/insights/attribution-vs-measurement) right in the first place: know exactly what a number is telling you and exactly where it comes from, the same caution that should stop anyone from trusting a single [GA4 report](/insights/ga4-attribution-report-guide) at face value. Losing one source should never mean losing the whole picture.

Teams that already treat their stack as something to review regularly tend to catch vendor risk earlier, simply because they're already asking what each tool is for and whether it's still earning its place.

Treat this as a standing habit: export on a schedule, document what depends on what, and treat the exit plan as part of every purchase decision instead of something written during a 60-day countdown. Every tool carries some vendor risk, and that's manageable once you know what you're exposed to before a notice ever arrives.

If your team is staring at a LeadsRx-shaped gap right now, or just realized you don't actually know what you'd lose if any current tool shut down tomorrow, that's exactly the kind of stack review we run with clients. [Get in touch](/contact) and we'll help you map the exit plan before you need one.
