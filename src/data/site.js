/*
 * Every word of page copy on this site lives here.
 *
 * The blocks marked VERBATIM are reproduced exactly as supplied in the client
 * brief and must not be rewritten, trimmed or expanded. Section eyebrows, H2s,
 * form labels, button labels and alt text are the only connective microcopy
 * written for this build, and they follow the brief's voice notes.
 */

export const business = {
  name: 'MMi Electrical Services Inc.',
  shortName: 'MMi Electrical',
  mark: 'MMi',
  city: 'St. Albert',
  region: 'Alberta',
  addressLine: 'St. Albert, Canada',
  phoneDisplay: '780-265-5057',
  phonePretty: '(780) 265-5057',
  phoneHref: 'tel:+17802655057',
  smsHref: 'sms:+17802655057',
  email: 'service@mmielectrical.com',
  emailHref: 'mailto:service@mmielectrical.com',
  site: 'http://www.mmielectrical.com/',
}

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  {
    label: 'Services',
    href: '#services',
    items: [
      'Electrical Panel Upgrades',
      'EV Charger Installation',
      'Home Rewiring',
      'Lighting Installation & Design',
      'Landscape & Exterior Lighting',
      'Ceiling Fan Installation',
      'Whole-Home Surge Protection',
      'Smoke & CO Detector Installation',
      'Hot Tub & Spa Wiring',
      'Switch & Outlet Repair',
      'Home Safety Electrical Inspections',
      'Commercial Tenant Improvements',
      'Emergency Electrical Repairs',
      'Air Conditioning Circuit Installation',
      'Generator & Backup Power Wiring',
    ],
  },
  {
    label: 'Service Areas',
    href: '#coverage',
    items: [
      'St. Albert',
      'Edmonton',
      'Sherwood Park',
      'Fort Saskatchewan',
      'Morinville',
      'Spruce Grove',
      'Stony Plain',
      'Bon Accord',
      'Legal',
      'Gibbons',
    ],
  },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#site-footer' },
  { label: 'Contact', href: '#contact' },
]

/* ---------------------------------------------------------------- HERO */

export const hero = {
  eyebrow: 'Licensed Master Electricians · St. Albert & Area', // VERBATIM
  headline: 'Master Electricians Serving St. Albert, AB', // VERBATIM
  subheadline:
    'Licensed, insured electricians with more than 20 years of panel, wiring, and lighting work behind us, serving homes and businesses across St. Albert.', // VERBATIM
  badges: [
    { label: '100% Satisfaction Guarantee', icon: 'BadgeCheck' }, // VERBATIM
    { label: '24/7 Emergency Service', icon: 'PhoneCall' }, // VERBATIM
    { label: 'Financing Available', icon: 'CreditCard' }, // VERBATIM
    { label: 'Licensed & Insured', icon: 'ShieldCheck' }, // VERBATIM
  ],
  image: {
    name: 'panel-upgrade-hero',
    alt: 'Gloved hands steadying a screwdriver against the wiring inside a newly built residential breaker panel',
  },
}

/* ------------------------------------------------------- GOOGLE REVIEWS */

export const reviews = {
  index: '01',
  eyebrow: 'Google Reviews',
  title: 'Reviews From Around St. Albert',
  aggregateHeadline: '4.9 out of 5 — from 180+ Google reviews', // VERBATIM
  aggregateNote:
    '(placeholder, needs real Google Business Profile data before launch)', // VERBATIM
  rating: 4.9,
  count: 180,
  items: [
    {
      name: 'David R.',
      stars: 5,
      quote:
        'Called on a Friday afternoon about a dead outlet and someone was at our door within two hours. Didn’t expect that kind of turnaround.', // VERBATIM
      focus: 'Response time',
    },
    {
      name: 'Melissa T.',
      stars: 5,
      quote:
        'Our old fuse panel finally gave out mid-winter. They had the new panel in and the house back on grid the same day.', // VERBATIM
      focus: 'Panel replacement',
    },
    {
      name: 'Kevin O.',
      stars: 5,
      quote:
        'Quoted the EV charger install over the phone, and the invoice matched it to the dollar. No surprise line items.', // VERBATIM
      focus: 'Pricing',
    },
    {
      name: 'Sandra L.',
      stars: 5,
      quote:
        'Asked a dozen questions during our home inspection and every one got a real answer, not a brush-off.', // VERBATIM
      focus: 'Home inspection',
    },
    {
      name: 'Trevor B.',
      stars: 5,
      quote:
        'Installed pot lights through our main floor and swept up after themselves before they left. Wish more trades worked that way.', // VERBATIM
      focus: 'Lighting install',
    },
  ],
}

/* --------------------------------------------------------- TRUST BADGES */

export const trust = {
  index: '02',
  eyebrow: 'Credentials',
  title: 'Credentials On File',
  items: [
    {
      label: 'Master Electrician Certified', // VERBATIM
      icon: 'Award',
      note: 'Work overseen by a master electrician',
    },
    {
      label: 'WCB Covered', // VERBATIM
      icon: 'HardHat',
      note: 'Crews carried under WCB coverage',
    },
    {
      label: '3x Local Business Award Winner', // VERBATIM
      icon: 'Trophy',
      note: 'Named three consecutive years',
    },
    {
      label: 'Fully Insured', // VERBATIM
      icon: 'ShieldCheck',
      note: 'Insurance carried on every job',
    },
  ],
}

/* --------------------------------------------------------------- WHY US */

export const whyUs = {
  index: '03',
  eyebrow: 'Why MMi',
  title: 'Why MMi Electrical',
  lead: 'Four things we hold to on every job, from a single dead outlet to a full service upgrade.',
  image: {
    name: 'load-calc',
    alt: 'An electrician holding a multimeter and clipboard while reading the load on an open breaker panel',
  },
  items: [
    {
      title: 'Straightforward Pricing', // VERBATIM
      icon: 'Receipt',
      body: 'We quote the job before it starts, and the number on the phone matches the number on the invoice. If something changes once we’re inside a wall, we call before we touch it.', // VERBATIM
    },
    {
      title: 'Code-Compliant, Every Time', // VERBATIM
      icon: 'ShieldCheck',
      body: 'Every panel, plug, and circuit gets installed to the Canadian Electrical Code, not just close enough to pass a quick look. A shortcut behind drywall costs more than it saves.', // VERBATIM
    },
    {
      title: 'One Crew You Can Count On', // VERBATIM
      icon: 'Users',
      body: 'The electrician who quotes the job is on the crew that shows up to do it, so nothing gets lost between the estimate and the work.', // VERBATIM
    },
    {
      title: 'Financing Built Around Your Budget', // VERBATIM
      icon: 'CreditCard',
      body: 'Panel upgrades and EV chargers aren’t cheap. Pre-approved financing up to $100,000 means a bigger job doesn’t have to wait for a bigger paycheque.', // VERBATIM
    },
  ],
}

/* ------------------------------------------------------------- SERVICES */

export const services = {
  index: '04',
  eyebrow: 'Services',
  title: 'Core Services',
  lead: 'Six lines of work that cover most of what we get called for. Select one to read the detail.',
  items: [
    {
      title: 'Panel & Service Upgrades', // VERBATIM
      icon: 'Gauge',
      body: 'Old fuse panels and undersized service can’t keep up with a modern home. We size, permit, and install the upgrade so your panel can handle everything running through it today.', // VERBATIM
      meta: 'Residential · Permit pulled',
      image: {
        name: 'panel-new',
        alt: 'A clean new breaker panel mounted on a white wall with its door open and breakers labelled',
      },
    },
    {
      title: 'EV Charger Installation', // VERBATIM
      icon: 'PlugZap',
      body: 'From a basic Level 2 charger to a dedicated circuit built for future growth, we handle the wiring and the permit so you can charge at home instead of building a stop at a public charger into your week.', // VERBATIM
      meta: 'Residential · Level 2',
      image: {
        name: 'ev-car-charging',
        alt: 'A white SUV plugged into a wall-mounted EV charger inside a residential garage',
      },
    },
    {
      title: 'Residential Wiring & Repairs', // VERBATIM
      icon: 'Wrench',
      body: 'Flickering lights, tripped breakers, dead outlets — we diagnose the real cause instead of just replacing the part that failed.', // VERBATIM
      meta: 'Residential · Diagnostic',
      image: {
        name: 'troubleshooting-hero',
        alt: 'An electrician kneeling at a wall outlet, testing it with a multimeter',
      },
    },
    {
      title: 'LED, Landscape & Exterior Lighting', // VERBATIM
      icon: 'Lightbulb',
      body: 'Interior LED retrofits, walkway lighting, and seasonal exterior circuits, wired to handle a St. Albert winter without a callback in January.', // VERBATIM
      meta: 'Residential · Exterior rated',
      image: {
        name: 'exterior-lighting',
        alt: 'A stone-fronted bungalow at dusk with warm interior lighting and lit landscape beds along the walkway',
      },
    },
    {
      title: 'Home Safety Electrical Evaluations', // VERBATIM
      icon: 'ClipboardCheck',
      body: 'A walk-through of your panel, wiring, and outlets that flags what’s aging out before it becomes a service call at 11 p.m.', // VERBATIM
      meta: 'Residential · Walk-through',
      image: {
        name: 'voltage-tester',
        alt: 'A hand holding a voltage tester against a wall outlet with a work light throwing a glow across the wall',
      },
    },
    {
      title: 'Commercial Tenant Improvements', // VERBATIM
      icon: 'Building2',
      body: 'Build-outs and retrofits for commercial space, coordinated around your open date instead of ours.', // VERBATIM
      meta: 'Commercial · Scheduled',
      image: {
        name: 'office-ti',
        alt: 'An empty modern office tenant-improvement space with a glass partition and linear ceiling lighting',
      },
    },
  ],
}

/* ------------------------------------------------------------- COVERAGE */

export const coverage = {
  index: '05',
  eyebrow: 'Coverage',
  title: 'Where We Work',
  intro:
    'St. Albert is home base. We know what freeze-thaw swings do to exterior lighting and older outlets, and we’ve opened up more than a few original panels still running in homes around Grandin and Mission.', // VERBATIM
  neighbourhoodsLabel: 'Neighbourhoods we serve:', // VERBATIM
  neighbourhoods: [
    'Akinsdale',
    'Braeside',
    'Deer Ridge',
    'Erin Ridge',
    'Grandin',
    'Lacombe Park',
    'Mission',
    'North Ridge',
    'Oakmont',
    'Riel',
    'Sturgeon Heights',
    'Woodlands',
  ], // VERBATIM
  townsLabel: 'We also serve:', // VERBATIM
  towns: [
    'Edmonton',
    'Sherwood Park',
    'Fort Saskatchewan',
    'Morinville',
    'Spruce Grove',
    'Stony Plain',
    'Bon Accord',
    'Legal',
    'Gibbons',
  ], // VERBATIM
  image: {
    name: 'street-dusk',
    alt: 'A quiet residential street at dusk with house lights on and a city skyline low on the horizon',
  },
}

/* ---------------------------------------------------------------- STORY */

export const story = {
  index: '06',
  eyebrow: 'About',
  title: 'Our Story',
  paragraphs: [
    'Twenty years in this trade teaches you where corners get cut, and it teaches you not to cut them. Under the direction of a master electrician, our crew has spent that time in St. Albert-area panels, attics, and crawl spaces most companies wouldn’t touch on a busy Tuesday. The habits that stuck are the boring ones: pull the permit, follow the code, leave the invoice matching the quote.', // VERBATIM
    'The work itself has changed more than the habits have. A panel job in the 2000s is now as likely to be an EV charger, a whole-home surge protector, or a commercial tenant improvement running against someone else’s deadline. We added the training and the tools for that without dropping what built the reputation in the first place: someone answers the phone, and the electrician who quotes the job is the one who shows up to do it.', // VERBATIM
    'Being named a local business award winner three years running told us the neighbours noticed. Offering financing up to $100,000 is a bet that a bigger job shouldn’t have to wait on a bigger paycheque. Both come from the same place — work that’s worth doing gets done right, at a price someone can plan around.', // VERBATIM
  ],
  image: {
    name: 'about-crew',
    alt: 'A five-person electrical crew standing together in front of two white service vans inside a shop bay',
  },
}

/* ------------------------------------------------------------ FINAL CTA */

export const finalCta = {
  index: '07',
  eyebrow: 'Contact',
  headline: 'Get an Honest Quote for Your Electrical Work', // VERBATIM
  supporting:
    'Send a few photos of what needs fixing, wired, or upgraded, and we’ll call you back with a real quote before we ever set foot on the property.', // VERBATIM
  callLabel: 'Call (780) 265-5057', // VERBATIM
  textLabel: 'Text (780) 265-5057', // VERBATIM
}

/* ------------------------------------------------------------------ FAQ */

export const faq = {
  index: '08',
  eyebrow: 'FAQ',
  title: 'Common Questions',
  items: [
    {
      q: 'Do you offer emergency electrical service in St. Albert?', // VERBATIM
      a: 'Yes. We handle emergency calls around the clock for things like a dead panel, a sparking outlet, or total power loss. Call the number above any time, day or night, and we’ll walk you through what to do until someone arrives.', // VERBATIM
    },
    {
      q: 'Will I get a surprise bill after the work is done?', // VERBATIM
      a: 'No. We quote the job before we start it, and that number is what shows up on the invoice. If something changes once we’re inside a wall, we call and explain it before doing any additional work.', // VERBATIM
    },
    {
      q: 'Can I finance a panel upgrade or EV charger installation?', // VERBATIM
      a: 'Yes. We offer financing with pre-approval up to $100,000, so a panel upgrade, EV charger, or larger renovation doesn’t have to wait until you’ve saved up the full amount.', // VERBATIM
    },
    {
      q: 'Are your electricians licensed and insured?', // VERBATIM
      a: 'Our work is overseen by a master electrician and carried out under WCB coverage and full insurance. Every job is pulled to permit and inspected to the Canadian Electrical Code, not just wired to pass a quick look.', // VERBATIM
    },
    {
      q: 'I just need a small fix, not a full renovation — is that worth a call?', // VERBATIM
      a: 'Yes. A flickering light, a dead outlet, or a breaker that keeps tripping is exactly the kind of call we take. Small jobs get the same attention as a full panel upgrade.', // VERBATIM
    },
    {
      q: 'Will someone explain what they’re doing during the inspection or repair?', // VERBATIM
      a: 'Yes, and we build the time for it into the visit. You’ll get a plain explanation of what’s being checked, what it means, and what — if anything — needs fixing, before any work begins.', // VERBATIM
    },
  ],
}

/* --------------------------------------------------------------- FOOTER */

export const footer = {
  mission:
    'We’re a St. Albert-based electrical team handling everything from a single dead outlet to a full panel upgrade, available for emergency calls day or night. Straightforward pricing and financing up to $100,000 mean the work gets done without the guesswork or the wait.', // VERBATIM
  servicesHeading: 'Our Services',
  services: [
    'Panel & Service Upgrades',
    'EV Charger Installation',
    'Residential Wiring & Repairs',
    'LED & Exterior Lighting',
    'Commercial Tenant Improvements',
  ], // VERBATIM
  quickHeading: 'Quick Links',
  quick: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ], // VERBATIM
  contactHeading: 'Contact',
  copyrightTail: 'MMi Electrical Services Inc. All rights reserved.', // VERBATIM
  /* No verifiable social profile URLs were published on the source site, so
     these point at the business site rather than an invented handle. */
  socials: [
    { label: 'Facebook', icon: 'Facebook' },
    { label: 'Instagram', icon: 'Instagram' },
    { label: 'Google', icon: 'Globe' },
  ],
}
