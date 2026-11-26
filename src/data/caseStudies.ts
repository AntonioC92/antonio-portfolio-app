export interface CaseStudy {
  slug: string;
  badge: string;
  title: string;
  description: string;
  channels?: string;
  metrics: string[];
  partner?: string;
  note?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'dublin-beer-festival',
    badge: 'Performance Marketing · Events · Ireland',
    title: 'Dublin Beer Festival',
    description:
      'Full-funnel paid media strategy across Google and Meta for one of Ireland\'s biggest craft beer events. Drove ticket sales at scale with tight ROAS targets.',
    channels: 'Google & Meta',
    metrics: ['3,971 tickets sold', '15.5x ROAS'],
  },
  {
    slug: 'jobbio-career-fair',
    badge: 'Performance Marketing · B2B Lead Gen · Ireland',
    title: 'Jobbio Career Fair',
    description:
      'B2B lead generation campaign targeting employers and recruiters for a high-profile career fair. Focused on cost-efficient registrations and revenue attribution.',
    channels: 'LinkedIn',
    metrics: ['60 registrations', '4.5x ROAS'],
  },
  {
    slug: 'nineteenth-golf-club',
    badge: 'Performance Marketing · Golf & Recreation · Australia',
    title: 'Nineteenth Golf Club',
    description:
      'Membership acquisition campaign for a premium Australian golf club. Leveraged Google and Meta to target high-intent audiences and convert prospective members.',
    channels: 'Google & Meta',
    metrics: ['11 memberships sold', '5.1x ROAS on membership sales'],
    partner: 'Streetwise Consultancy',
  },
  {
    slug: 'chefs-office-academy',
    badge: 'Performance Marketing · Funnel Build · Australia',
    title: "Chef's Office Academy",
    description:
      'Meta ads and Systeme.io funnel built a free guide pipeline and direct eBook revenue for chefs learning the business side of the kitchen. Dual-path campaign: opt-ins compounding through email, purchases returning revenue mid-flight.',
    channels: 'Meta & Systeme.io',
    metrics: ['192 leads at A$2.74 per lead', '77 eBook purchases'],
    partner: 'Streetwise Consultancy',
  },
  {
    slug: 'gates-coaching-group',
    badge: 'Performance Marketing · Funnel Build · US',
    title: 'Gates Coaching Group',
    description:
      'Paid media lead generation for a US-based executive coaching firm. Built and optimised Meta funnels to drive qualified leads at volume.',
    channels: 'Meta',
    metrics: ['186 leads', '3.9x ROAS'],
    partner: 'Streetwise Consultancy',
  },
  {
    slug: 'uk-b2b-software',
    badge: 'Performance Marketing · B2B Software · UK',
    title: 'UK B2B Software Company',
    description:
      'Rebuilt the lead engine for a UK B2B software company: CRM workflows fixed, Meta relaunched around booked demos, and one booking signal counted once on every ad platform.',
    channels: 'Meta',
    metrics: ['27% of Meta leads reached a booked demo (from 16%)', '€161 per booked demo'],
    note: 'Early result · client name withheld',
  },
];
