import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual production domain
  const baseUrl = 'https://ignaciobritos.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}`,
          en: `${baseUrl}`,
        },
      },
    },
  ]
}
