import type { CollectionEntry } from 'astro:content';

export interface SiteConfig {
  author: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    avatar: string;
  };
  links: {
    github: string;
    arxiv: string;
    googleScholar: string;
  };
}

export const siteConfig: SiteConfig = {
  author: {
    name: 'Konstantin Göbler',
    title: 'Statistician',
    bio: 'Postdoctoral researcher interested in causality and graphical models.',
    location: 'Erlangen, Germany',
    email: 'konstantin.goebler@tum.de',
    avatar: '/images/avatar.jpg',
  },
  links: {
    github: 'https://github.com/konstantingoe',
    arxiv: 'https://arxiv.org/search/stat?searchtype=author&query=Göbler,+K',
    googleScholar:
      'https://scholar.google.de/citations?user=c6CvCRUAAAAJ&hl=de&oi=ao',
  },
};

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function sortByDateDesc<T extends { data: { date: Date } }>(
  items: T[]
): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });
}
