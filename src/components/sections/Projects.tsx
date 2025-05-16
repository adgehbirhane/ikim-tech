'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Nawla Trading PLC",
    description: "A modern e-commerce platform showcasing products with a clean, responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://www.nawlatrading.com",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Gojo Guest House",
    description: "An elegant website highlighting services, room options, and amenities.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.gojoguesthouse.com",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"]
  },
  {
    id: 3,
    title: "Brand Clothing",
    description: "A fashion e-commerce platform bringing timeless fashion with a modern touch.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.brandclothing.com",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Heiver Tech",
    description: "A technology services platform recognized for outstanding innovations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    link: "https://www.heivertech.com",
    technologies: ["React", "GraphQL", "AWS"]
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

export function Projects() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div>
            <Heading size="xl" className="mb-6 font-bold tracking-tight text-[#033D54]">Our Recent Projects</Heading>
            <Text size="lg" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise and creativity in delivering exceptional digital solutions.
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={{ ...cardVariants, ...hoverVariants }}
              whileHover="hover"
              whileTap="tap"
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-out h-full flex flex-col relative"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                    className="object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#033D54]/70 via-[#033D54]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              </div>
              <div className="p-6">
                <Heading size="md" className="mb-3 font-semibold tracking-tight group-hover:text-[#033D54] transition-colors duration-300">{project.title}</Heading>
                <Text className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</Text>
                <Button
                  variant="outline"
                  className="w-full group relative overflow-hidden border-[#033D54] text-[#033D54]"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                    <svg
                      className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#033D54]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 