export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    [key: string]: string;
  };
};

export type Project = {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'logo' | 'others';
  description: string;
  image: string;
  technologies: string[];
  link: string;
  features: string[];
};

export type NavItem = {
  name: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    [key: string]: string;
  };
  nav: {
    main: NavItem[];
  };
}; 