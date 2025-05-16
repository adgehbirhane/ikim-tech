import { Hero } from '@/components/sections/Hero';
import { ChooseUs } from '@/components/sections/ChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
// import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function HomePage() {
  return (
    <Layout>
      <motion.section
        id="home"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
      </motion.section>
      <motion.section
        id="service"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Services />
      </motion.section>
      <motion.section
        id="projects"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Projects />
      </motion.section>
      <motion.section
        id="choose_us"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ChooseUs />
      </motion.section>
      <motion.section
        id="contact"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Contact />
      </motion.section>
    </Layout>
  );
} 