// The sidebar. Order here is the order shown; add a page by adding its route file under
// src/routes and an entry here.
export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
  /** Shown after `items`, each under its own heading. */
  groups?: NavGroup[];
}

export const nav: NavSection[] = [
  {
    title: 'Signal forms',
    items: [
      { title: 'Overview', href: '/' },
      { title: 'Binding', href: '/binding' },
      { title: 'Validation', href: '/validation' },
      { title: 'Conditions and combinators', href: '/conditions' },
      { title: 'Submit and async', href: '/submit' },
      { title: 'Metadata', href: '/metadata' },
    ],
  },
];
