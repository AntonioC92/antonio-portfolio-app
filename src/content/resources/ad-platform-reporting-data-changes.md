---
title: "Why Ad Platform Reporting Data Keeps Changing After the Fact"
slug: "ad-platform-reporting-data-changes"
description: "Meta and Google both rewrote how they count historical conversions in 2026, and most teams found out from a broken trend line. Here is what changed and how to keep your reporting trustworthy."
metaTitle: "Why Ad Platform Data Keeps Changing | Caruso Martech"
metaDescription: "Meta and Google rewrote historical conversion data in 2026. Here is what changed, why your trend lines broke, and how to reconcile reporting against it."
date: "2026-10-09"
lastUpdated: "2026-10-09"
category: "Acquisition Systems"
tags: "attribution windows, Meta Ads, Google Ads, marketing reporting"
---

A client pulls up last quarter's dashboard and the numbers from September look different than they did in September. Nobody touched the campaigns. Nobody changed the budget. The platform just changed how it counts.

That is not a one-off glitch. Meta and Google both rewrote pieces of how they attribute and report conversions in 2026, and some of those changes reach backward into historical data. If your reporting pulls straight from the platform without a reconciliation step, you are going to keep hitting this.

## Quick answer: why does ad platform data keep changing after the fact?

- Meta removed its 7-day and 28-day view-through attribution windows in January 2026, which cut reported conversions by an estimated 15 to 40 percent overnight with no change in actual sales, according to [mbuzz](https://mbuzz.co/articles/meta-removed-attribution-windows).
- Google now attributes app conversions to the install date rather than the conversion date, so older dates can drop while recent dates rise even though the total stays the same, per [ALM Corp](https://almcorp.com/blog/google-ads-app-conversion-attribution-install-date-change-2026/).
- Google capped hourly and daily reporting history at a 37-month retention window starting mid-2026, so older granular data ages out even though monthly and annual totals remain, per [ALM Corp](https://almcorp.com/blog/google-ads-data-retention-update-2026/).
- Google Merchant Center retroactively split YouTube affiliate clicks out of organic reporting back to July 1, 2026, creating a visible drop in organic numbers for anyone comparing periods, according to [Relevant Audience](https://www.relevantaudience.com/ecommerce-marketing/merchant-center-organic-drop-24-august-youtube-affiliate/).
- The fix is treating your CRM or revenue system as the anchor, not the ad platform dashboard, and marking each platform change as a measurement break rather than a performance one.

## What changed at Meta in 2026

Meta permanently removed the 7-day view and 28-day view attribution windows from its Ads Insights API on January 12, 2026, including for historical queries. The remaining default window is 7-day click plus 1-day view, a much narrower slice of the buyer journey than before.

The reported impact lands in a wide but consistent range: advertisers saw [reported conversions drop between 15 and 40 percent](https://mbuzz.co/articles/meta-removed-attribution-windows) overnight, with no underlying change in sales. The hit concentrated in accounts with longer purchase cycles, since 30 to 40 percent of their conversions used to come from that 8 to 28 day window. A buyer who saw an ad on day one and bought on day twenty still bought. Meta just stopped attributing it.

Meta made a second change in March 2026, splitting click-through from a new engage-through category that covers likes, shares, and saves under a 1-day window. Anything compared to a [pre-March baseline](https://www.dataslayer.ai/blog/meta-attribution-change-2026-what-engage-through-attribution-is-and-why-your-numbers-look-different) will look like a cliff, even for accounts whose underlying performance held steady.

## What changed at Google Ads in 2026

Google made a quieter but equally disruptive change to app conversions: it now attributes them to the install date instead of the date the conversion event fired. Dates that used to show strong conversion volume can drop, while more recent dates rise, even though the [total conversion count stays the same](https://almcorp.com/blog/google-ads-app-conversion-attribution-install-date-change-2026/). A daily trend chart built on install-date attribution tells a different story than one built on event-date attribution, and most teams never notice the switch happened.

Google also capped hourly, daily, and weekly reporting at a 37-month retention window starting mid-2026. Monthly, quarterly, and annual data still goes back up to 11 years, but if your reporting depends on day-level detail older than three years, that detail is gone unless you already exported it.

A third change hit branded search specifically. Google updated branded search conversion measurement for YouTube and Demand Gen campaigns in August 2026, introducing a 7-day default window and a reporting-only "Consideration" goal category. It does not change spend decisions directly, but it does change what a [branded search report](/insights/google-ads-bidding-target-change-2026) shows next to a non-branded one.

## Why Merchant Center organic traffic looks different now

Google split commission-eligible YouTube clicks out of Merchant Center's organic reporting category starting August 24, 2026, and applied the change retroactively to July 1. Products eligible for commission now show up under a new "YouTube affiliate" line instead of under organic, which produces a one-time, visible drop in reported organic traffic for anyone comparing month over month.

Google [did not publish a size estimate](https://www.relevantaudience.com/ecommerce-marketing/merchant-center-organic-drop-24-august-youtube-affiliate/) for how large that drop would be, only that it would happen. A second, unrelated change in the same rollout aligned YouTube's organic click definitions with Google's standard reporting, and a third pushed reported Google Ads product numbers up as product-level reporting expanded to more campaign types. Three changes landing in one update means a single traffic dip in a Merchant Center report could have three different causes, none of which is an actual drop in product demand.

## Why this breaks automated reporting specifically

A dashboard built to pull platform numbers automatically has no way to know a definition changed underneath it. It just sees a number, drops it into the trend line, and moves on. That is the mechanism behind most of the "why did this suddenly tank" conversations in the examples above.

The industry term for this is data drift: the data itself hasn't gotten worse, but its structure or meaning has shifted compared to what your [reporting system](/insights/ai-marketing-reporting) expects. A report that averages the last 12 months of Meta conversions across the January 2026 cutoff is quietly blending two different counting methods into one number. The same risk applies to any automated anomaly detection or pacing alert built on top of that number.

It compounds because platforms were already disagreeing with each other before any of this. Each platform credits itself for conversions a competing platform also claims, which [routinely pushes combined platform totals past 150 percent](https://www.cometly.com/post/ad-platforms-reporting-different-conversion-numbers) of what actually happened. Layer a mid-year attribution window change on top of that, and a single broken-looking trend line can have two or three independent causes at once.

## How to keep your reporting trustworthy through platform changes

The fix is not asking the platforms to hold still, since they will not. It is building a reporting process that survives them changing.

Mark the date of each platform change as a measurement break in your reports, the same way you would mark a tracking migration or a [GA4 configuration change](/insights/ga4-attribution-report-guide). Do not let a trend line cross that date without a note explaining why the shape shifted. Treat your CRM or revenue system, not the ad platform dashboard, as the source of truth for whether a campaign actually worked, and reconcile platform-reported conversions against it on a regular cadence rather than after someone asks why the numbers look wrong.

That reconciliation habit matters more now than it did two years ago. Only 29 percent of B2B marketers in one benchmark said their [CRM and ad-platform reporting agree](https://www.influencers-time.com/crm-and-ad-platform-attribution-rarely-match-data-shows/) on which channel actually closed a deal, and that gap predates any of the 2026 changes covered here. The platforms rewriting their own history just made the case for reconciliation harder to ignore.

If your reporting still breaks every time a platform ships an update, that is usually a sign the underlying [measurement setup](/insights/attribution-vs-measurement) was never built to separate platform-reported numbers from verified revenue in the first place. That is exactly the kind of gap we fix as part of a broader [services](/services) engagement, and it is worth a conversation before the next platform change catches you off guard. Reach out through [contact](/contact) and we will go through your reporting stack together.
