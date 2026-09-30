---
title: "Meta Removed Ad Placement Exclusions: What to Do Now"
slug: "meta-ads-placement-exclusions-removed"
description: "Meta is stripping placement exclusions from ad sets and replacing them with value rules that only cap bid cuts at 90%. Here is what changed and how to protect performance without full control."
metaTitle: "Meta Placement Exclusions Removed | Caruso Martech"
metaDescription: "Meta removed placement exclusions from ad sets in 2026. What changed, why value rules are not a full replacement, and how to protect performance."
date: "2026-09-30"
lastUpdated: "2026-09-30"
category: "Acquisition Systems"
tags: "meta ads, paid media, ad platform changes"
---

Meta has started removing the ability to exclude ad placements at the ad set level. If you have spent years turning off Audience Network or blocking the Facebook right column, that control is disappearing from your account on a rolling basis, with no fixed date announced for when it reaches everyone. The change reaches directly into how a lean budget stays protected from placements that produce cheap, low quality traffic.

## Quick answer: what happened to Meta's placement exclusions?

- Meta is removing the option to exclude individual placements, platforms, devices, and operating systems at the ad set level, a change [Social Media Today](https://www.socialmediatoday.com/news/meta-removes-option-to-exclude-ad-placements/828461/) first reported advertisers seeing in late August 2026.
- Meta's stated reason is that its systems can find the best performing placement faster than a human choosing manually, part of a wider push toward [fully automated campaigns](https://www.socialsamosa.com/news-2/meta-pushes-toward-fully-automated-advertising-future-9330538).
- The replacement is value rules: bid adjustments that can cut a placement's bid by up to 90 percent, according to [PPC Land](https://ppc.land/meta-removes-ad-placement-controls-as-bid-cuts-get-capped-at-90/), while always leaving that placement able to win the auction at a discount.
- Account level placement restrictions and content category exclusions still work, so advertisers keep some control even after the ad set level toggle disappears.
- The change follows eighteen months of similar moves, starting with the removal of detailed targeting exclusions in January 2025, per [Jon Loomer](https://www.jonloomer.com/meta-removing-placement-controls-ad-sets/).

## What actually changed in the ad set

Meta removed the exclusion controls from the placements panel at the ad set level. Advertisers building a new ad set can no longer untick Audience Network, remove a platform such as Instagram, exclude a device type, or block an operating system the way they could a year ago.

The rollout reached accounts gradually starting around August 20, 2026, based on an in-product notification that surfaced well before any formal Meta announcement, as [Jon Loomer](https://www.jonloomer.com/meta-removing-placement-controls-ad-sets/) documented from advertiser reports. Mark Zuckerberg had already described the direction months earlier: businesses would eventually just state an objective and connect a payment method, with no targeting, no creative decisions, and no measurement beyond reading the results Meta produces, a vision [Social Samosa](https://www.socialsamosa.com/news-2/meta-pushes-toward-fully-automated-advertising-future-9330538) covered in detail. The placement removal is that vision arriving one settings panel at a time, well ahead of the rest of the rollout Meta has planned.

## The removal fits a longer pattern

This single change sits inside roughly eighteen months of Meta steadily removing manual levers from ad accounts, each one justified the same way: the algorithm can do it better than a person choosing by hand. Anyone who has been running the same account across that stretch has already felt several of these removals land one at a time, usually without warning.

Detailed targeting exclusions went first, removed in January 2025. A default 5 percent budget floor to excluded placements followed in October 2025, quietly limiting how completely any exclusion actually worked even while the setting still existed. The unified Advantage+ structure launched in February 2026 made campaign level placement exclusion effectively unavailable, and API version 26.0 in July 2026 dropped Instagram Explore Feed and Messenger Stories as selectable surfaces entirely, a timeline [Blackfire Marketing](https://blackfiremarketing.co.uk/blog/meta-ad-placement-controls-removed) laid out step by step. It mirrors a shift already underway in [automated campaign management](/insights/self-adjusting-campaign-automation): systems that decide in real time instead of waiting on a person to flip a toggle.

## What value rules can and cannot do

Value rules are Meta's stated replacement for exclusion, and they work on a different principle. Rather than switching a placement off, you tell Meta how much less to bid there, and the auction decides the rest.

Advertisers can build up to 10 rules with up to 2 criteria each, covering age, gender, operating system, location, and placement, per [bir.ch](https://bir.ch/blog/meta-value-rules). A bid decrease under a value rule cannot exceed 90 percent, while an increase can go as high as 1,000 percent, and when a user qualifies for more than one rule, only the first match in the sequence applies. That ordering detail is easy to get wrong and worth checking before you assume a rule is working.

The practical difference from exclusion is straightforward: a discounted placement can still win the auction, something full exclusion always closed off. Meta's own interface warns that overall cost per result may increase once value rules are running, and asks advertisers to confirm they understand that before turning them on.

## Where the risk actually lands for a lean budget

The accounts most exposed here are the ones running lean spend, where a single weak placement can eat a disproportionate share of the month before anyone notices. A large account absorbs a bad placement inside its own noise; a small one reports it straight to a founder or a board.

Audience Network is the clearest example. It typically carries the lowest CPMs of any placement, and that cheapness reflects lower purchase intent: ads served inside third party apps often reach people who tap by accident or are simply less engaged, a pattern [ClickCease](https://www.clickcease.com/blog/should-i-turn-off-audience-network-to-reduce-fake-clicks/) has documented across client accounts. Ranking placements by cost per result instead of CPM catches this; ranking by CPM alone hides it. On a budget where a bad week actually shows up in the numbers you report, that distinction matters directly, and it connects to how much of revenue a [reasonable marketing budget](/insights/marketing-budget-percentage-of-revenue) can even absorb in wasted spend.

## How to protect performance without the exclusion switch

Protecting performance now takes closer attention to placement level reporting instead of a single settings toggle you set once and forget. Four habits cover most of what the old exclusion switch used to do automatically.

Pull the placement breakdown report weekly and rank by cost per result ahead of CPM or reach. Build value rules early for the worst performing placements, well before spend has scaled past the point where a bad week is easy to absorb, and check the rule order every time you add one, since only the first match applies. Make creative genuinely fit every surface it can serve on: a feed image dropped into Stories or Reels without a vertical crop underperforms regardless of what the placement algorithm decides. Tag campaigns with Meta's dynamic placement parameter in your URL so a proper [UTM system](/insights/utm-system-setup) still lets GA4 and your CRM separate results by surface even after the exclusion toggle is gone, and expect the kind of attribution noise this creates to surface the way [platform migrations already do](/insights/attribution-challenges-2025) elsewhere in the account. The safeguard shifts from a setting you configure once to a habit you repeat every week, and that habit is what actually holds performance steady.

Running paid media on Meta's rulebook is fine as long as someone is actually watching the placement level numbers behind its automated choices. If your account just lost its exclusion controls and nobody has rebuilt the value rules underneath it yet, that is exactly the kind of gap we look for in a [paid media systems review](/services), and it is worth fixing before the next budget cycle rather than after.
