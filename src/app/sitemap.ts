import { MetadataRoute } from 'next';
import { siteData } from '@/data/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ikim-tech.netlify.app';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = siteData.services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
} 