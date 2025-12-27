import type { Metadata } from 'next';

export const metadata: Metadata = {
     title: 'About',
     description: 'Learn about Lumina Narrative - a passionate content strategist and writer with over 5 years of experience helping brands find their voice and connect with their audience.',
     openGraph: {
          title: 'About | Lumina Narrative',
          description: 'Learn about Lumina Narrative - a passionate content strategist and writer helping brands find their voice.',
          images: ['/og-about.jpg'],
     },
};

export default function AboutLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return children;
}
