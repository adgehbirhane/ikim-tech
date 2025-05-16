'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import { FaGlobe, FaMobileAlt, FaPalette, FaServer, FaPrint, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive websites with intuitive designs and seamless user experiences.",
    icon: FaGlobe,
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications tailored to your business needs.",
    icon: FaMobileAlt,
    link: "/services/mobile-development"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centric design solutions with intuitive interfaces and engaging experiences.",
    icon: FaPalette,
    link: "/services/ui-ux-design"
  },
  {
    id: 4,
    title: "Web Hosting",
    description: "Reliable hosting solutions ensuring your website is always accessible and secure.",
    icon: FaServer,
    link: "/services/web-hosting"
  },
  {
    id: 5,
    title: "Graphics Design",
    description: "Professional branding assets and digital visuals for your online presence.",
    icon: FaPencilRuler,
    link: "/services/graphics-design"
  },
  {
    id: 6,
    title: "Printing",
    description: "High-quality print media designs for brochures, business cards, and posters.",
    icon: FaPrint,
    link: "/services/printing"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const hoverVariants = {
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  },
  tap: {
    scale: 0.95
  }
};

export function Services() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div>
            <Heading size="2xl" className="mb-6 font-bold tracking-tight text-[#033D54]">Our Services</Heading>
            <Text size="xl" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of digital services to help your business thrive in the digital world.
            </Text>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
            >
              <motion.div
                custom={index}
                variants={{ ...cardVariants, ...hoverVariants }}
                whileHover="hover"
                whileTap="tap"
                className="group bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-out h-full flex flex-col relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#033D54]/5 flex items-center justify-center text-3xl transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#033D54]/10"
                >
                  <service.icon className="w-8 h-8 text-[#033D54]" />
                </motion.div>
                <Heading size="lg" className="mb-4 text-center font-semibold tracking-tight group-hover:text-[#033D54] transition-colors duration-300">{service.title}</Heading>
                <Text className="text-gray-600 text-center leading-relaxed flex-grow">{service.description}</Text>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#033D54] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 