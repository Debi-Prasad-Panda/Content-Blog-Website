import HeroSection from '@/components/sections/HeroSection';
import StatementSection from '@/components/sections/StatementSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/sections/CTASection';
import ParticlesBackground from '@/components/animation/ParticlesBackground';

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <HeroSection />
      <StatementSection />
      <FeaturedProjects />
      <ServicesSection />
      <CTASection />
    </>
  );
}
