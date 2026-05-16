import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual production domain
  const baseUrl = 'https://ignaciobritos.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
