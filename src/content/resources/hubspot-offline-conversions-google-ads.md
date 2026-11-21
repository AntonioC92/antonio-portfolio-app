---
title: "Sending HubSpot Deals Back to Google Ads as Offline Conversions"
slug: "hubspot-offline-conversions-google-ads"
description: "Google Ads bids on form fills unless you tell it which leads became qualified and which deals closed. Here is how to send those HubSpot milestones back, with the GCLID and the right values."
metaTitle: "HubSpot Offline Conversions to Google Ads | Caruso Martech"
metaDescription: "How to send HubSpot qualified leads and closed-won deals to Google Ads as offline conversions: GCLID capture, native sync, deal values and Data Manager."
date: "2026-11-20"
lastUpdated: "2026-11-20"
category: "Automation & Intelligence"
tags: "HubSpot, Google Ads, offline conversions, enhanced conversions for leads, GCLID, CRM integration"
---

Most Google Ads accounts that sell services still optimise for the form fill. The campaign learns to find people who submit forms, and nobody tells it which of those people became a qualified lead, a sales call or a signed deal. In HubSpot you can see exactly which clicks turned into revenue, and Google Ads has no idea.

## Quick answer: How do you send HubSpot deals to Google Ads as offline conversions?

- Capture the Google click ID (GCLID) on every form and store it on the HubSpot contact, along with the email address.
- Connect Google Ads to HubSpot and create a conversion event for each milestone you care about, such as marketing qualified lead, sales qualified lead and customer.
- Use HubSpot's native sync for lifecycle stages with a fixed value per stage, or a workflow or tool like Zapier when you need deal stages and real deal amounts.
- Turn on enhanced conversions for leads in Google Ads so hashed email addresses can match conversions that lost their GCLID.
- Run the new conversion actions as secondary first, then make the closest-to-revenue milestone primary once the counts look right.

## Why Google Ads needs your CRM outcomes

Google Ads bidding optimises toward whatever you mark as a conversion. If that is a form submission, the algorithm treats a student asking for a free template the same as a director asking for a proposal. Sending CRM milestones back gives it a signal tied to pipeline, so budget moves toward the searches and audiences that produce buyers.

The gap is widest for businesses with a sales step between the lead and the money. A lead can take weeks to qualify and months to close, and Google only learns about it if you import it. My [lead scoring](/insights/lead-scoring-system) guide covers how to decide which leads count as qualified, which is the definition this whole setup depends on.

## Which HubSpot milestones to send

Send two or three milestones, ordered by how close they sit to revenue: a qualified lead, an opportunity or booked call, and a closed-won deal. Earlier milestones arrive faster and in larger numbers, which gives bidding enough data to learn. Later ones carry the truest signal but may be too rare to bid on alone.

A small B2B services firm closing a few deals a month rarely has enough closed-won conversions to steer bidding by themselves. In that case the qualified lead becomes the primary action, with closed-won imported as a secondary action for reporting. As volume grows, you can move the primary action further down the funnel.

## What the native HubSpot connector does

HubSpot's own sync sends lifecycle stage changes and form submissions to Google Ads as conversion events, using Google's enhanced conversions. According to [HubSpot's documentation](https://knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account), it needs Marketing Hub Starter, Professional or Enterprise, and each lifecycle event carries a fixed value that you set.

The same page sets limits worth checking before you build. Starter allows up to 5 conversion events, Professional up to 50 and Enterprise up to 100. The option to use the deal amount as the value is no longer available, and accounts managed through a Google Ads manager account (MCC) cannot sync through enhanced conversions, so events can show as sent in HubSpot without ever registering in Google Ads.

Google describes the connection from its side too. Its [import guide](https://support.google.com/google-ads/answer/10324795) explains that conversion imports and Customer Match lists can come straight from HubSpot through Data Manager, with conversion conditions built on the lifecycle stage field.

## When to send real deal values

A fixed value per stage works when your deals are similar in size. If one client is worth ten times another, a fixed value hides the difference and bidding cannot learn to chase the bigger accounts. Sending the real deal amount needs a deal-stage trigger and a custom route into Google Ads.

HubSpot's documentation points to a custom build with HubSpot workflows and Google's import API for actual deal amounts. Lighter options exist: [Zapier templates](https://zapier.com/apps/google-ads/integrations/hubspot) for HubSpot and Google Ads send an offline conversion when a deal reaches a chosen stage, passing the amount and close date. Whichever route you pick, the deal must be associated with the contact that holds the GCLID and email.

Value-based bidding only helps when the values reflect real revenue, so check deal amounts are filled in consistently before you switch to them. My piece on [bidding targets](/insights/google-ads-bidding-target-change-2026) covers what to review before changing how campaigns bid.

## How to set it up: five steps

The setup follows one sequence: capture the click, define the milestones, connect the accounts, send the conversions, then promote the best one to primary. Each step depends on the one before, so skipping the capture step is the most common reason imported conversions never match. Plan for a few weeks of checking before bidding relies on it.

1. Capture the GCLID from the landing page URL in a hidden form field and save it to a contact property in HubSpot, alongside the email address.
2. Agree the milestone definitions with sales, so a qualified lead and a closed-won deal mean the same thing in HubSpot and in the Google Ads report.
3. Connect the individual Google Ads account to HubSpot and turn on enhanced conversions in Google Ads with the Google Ads API as the method.
4. Create one conversion event per milestone in HubSpot, or a deal-stage automation when you need real deal amounts, and set each one as secondary.
5. Compare imported counts against HubSpot for several weeks, then make the milestone closest to revenue the primary conversion for bidding.

The capture step is where most setups break. Forms that strip URL parameters, redirects that drop the click ID, and sites with inconsistent [UTM tagging](/insights/utm-system-setup) all lose the link between the ad click and the contact.

## What changed with Google's Data Manager in 2026

Google moved offline conversion imports to its Data Manager API in 2026. The [Google Ads blog](https://developers.google.com/ads/blog/posts/2026/05/changes-to-offline-click-conversion) for developers states that from 15 June 2026 the Google Ads API stopped accepting new adopters of offline conversion imports, including enhanced conversions for leads. Existing users can keep importing while they move across.

For teams on HubSpot's native sync, the change mostly sits behind the connector. For anyone with a custom script or older integration, it matters directly: a new build has to go through Data Manager. Google also now calls plain GCLID import a legacy feature and recommends enhanced conversions for leads, which [Google's guide](https://support.google.com/google-ads/answer/15713840) says adds hashed email or phone data while still asking you to include the GCLID whenever you have it.

That pairing is the practical reason to collect both identifiers. In the UK and Ireland, consent banners and browser privacy settings mean some clicks arrive without a usable ID, and the email address recovers part of that loss. My guide to [first-party data](/insights/first-party-data-strategy) covers how to collect it with the right consent.

## Checks that keep the numbers honest

Imported conversions are only useful if they match what HubSpot records. Check them weekly for the first month, then monthly. Compare conversions by milestone in Google Ads against the same stage changes in HubSpot for paid search contacts, and investigate any gap bigger than a handful of records.

Look at the match rate in Google's diagnostics and at contacts missing a GCLID or email. Watch for duplicate sends when a contact moves back and forth between stages. Note the date each conversion action became primary, so later performance changes can be read against it.

If you want help mapping your HubSpot stages to Google Ads conversions and getting the first imports to match, see my [services](/services) or [contact me](/contact) to plan the setup.
