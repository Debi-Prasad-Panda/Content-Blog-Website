import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = 'https://luminanarrative.com';

     const routes = [
          '',
          '/about',
          '/work',
          '/services',
          '/blog',
          '/contact',
     ];

     return routes.map((route) => ({
          url: `${baseUrl}${route}`,
          lastModified: new Date().toISOString(),
          changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
          priority: route === '' ? 1 : 0.8,
     }));
}
