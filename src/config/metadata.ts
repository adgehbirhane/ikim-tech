import { Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = 'https://ikim-tech.netlify.app/og-image.png',
}: GenerateMetadataProps): Metadata {
  const siteUrl = 'https://ikim-tech.netlify.app';
  const fullUrl = `${siteUrl}${path}`;

  return {
    title: title ? `${title} | IKIM Tech Co.` : 'IKIM Tech Co. | Web Development & Digital Solutions',
    description: description || 'Your trusted partner for web development, mobile apps, and digital solutions.',
    openGraph: {
      title: title ? `${title} | IKIM Tech Co.` : 'IKIM Tech Co. | Web Development & Digital Solutions',
      description: description || 'Your trusted partner for web development, mobile apps, and digital solutions.',
      url: fullUrl,
      siteName: 'IKIM Tech Co.',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'IKIM Tech Co. - Web Development & Digital Solutions',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | IKIM Tech Co.` : 'IKIM Tech Co. | Web Development & Digital Solutions',
      description: description || 'Your trusted partner for web development, mobile apps, and digital solutions.',
      images: [image],
      creator: '@ikimtech',
    },
    alternates: {
      canonical: fullUrl,
    },
  };
} 