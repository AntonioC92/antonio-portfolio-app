export interface CaseStudy {
  slug: string;
  badge: string;
  title: string;
  description: string;
  metrics: string[];
  partner?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'dublin-beer-festival',
    badge: 'Paid Media · Events · Ireland',
    title: 'Dublin Beer Festival',
    description:
      'Full-funnel paid media strategy across Google and Meta for one of Ireland\'s biggest craft beer events. Drove ticket sales at scale with tight ROAS targets.',
    metrics: ['3,500+ tickets sold', '15.5x ROAS', 'Google & Meta channels'],
  },
  {
    slug: 'jobbio-career-fair',
    badge: 'Paid Media · Business · Ireland',
    title: 'Jobbio Career Fair',
    description:
      'B2B lead generation campaign targeting employers and recruiters for a high-profile career fair. Focused on cost-efficient MQL acquisition and revenue attribution.',
    metrics: ['4.5x ROAS', '60 MQLs generated', '€135K attributed revenue'],
  },
  {
    slug: 'nineteenth-golf-club',
    badge: 'Paid Media · Golf & Recreation · Australia',
    title: 'Nineteenth Golf Club',
    description:
      'Membership acquisition campaign for a premium Australian golf club. Leveraged Google and Meta to target high-intent audiences and convert prospective members.',
    metrics: ['11 new memberships sold', '5.1x ROAS', 'Google & Meta channels'],
    partner: 'Streetwise Consultancy',
  },
  {
    slug: 'gates-coaching-group',
    badge: 'Paid Media · Coaching · US',
    title: 'Gates Coaching Group',
    description:
      'Paid media lead generation for a US-based executive coaching firm. Built and optimised funnels across multiple channels to drive qualified leads at volume.',
    metrics: ['3.9x ROAS', '186 leads generated', '$22K attributed revenue'],
    partner: 'Streetwise Consultancy',
  },
];
