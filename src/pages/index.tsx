import { Hero } from '@/components/sections/Hero';
import { ChooseUs } from '@/components/sections/ChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
// import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Layout } from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>
      <section id="service">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="choose_us">
        <ChooseUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
} 