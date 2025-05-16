'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import { FaCheck, FaArrowRight, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#033D54]/5 to-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Text className="text-[#033D54] font-semibold mb-4">OUR SERVICES</Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Heading size="2xl" className="text-[#033D54] font-bold mb-6">
                {service.title}
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Text size="xl" className="text-gray-600">
                {service.description}
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-transparent to-[#033D54]/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="mb-6"
              >
                <Heading size="xl" className="text-[#033D54]">
                  What We Offer
                </Heading>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-[0_2px_8px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-12 h-12 rounded-full bg-[#033D54]/10 flex items-center justify-center mb-4 group-hover:bg-[#033D54]/20 transition-colors duration-500"
                    >
                      <FaCheck className="w-5 h-5 text-[#033D54]" />
                    </motion.div>
                    <Text className="text-gray-600 font-medium group-hover:text-[#033D54] transition-colors duration-500">
                      {feature}
                    </Text>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#033D54]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Heading size="xl" className="text-[#033D54] mb-6">
              Why Choose Our {service.title}
            </Heading>
            <Text size="lg" className="text-gray-600">
              We combine expertise, innovation, and dedication to deliver exceptional results that drive your business forward.
            </Text>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FaRocket,
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising on quality"
              },
              {
                icon: FaUsers,
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience"
              },
              {
                icon: FaChartLine,
                title: "Proven Results",
                description: "Track record of successful projects and satisfied clients"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-16 h-16 rounded-full bg-[#033D54]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#033D54]/20 transition-colors duration-500"
                >
                  <benefit.icon className="w-8 h-8 text-[#033D54]" />
                </motion.div>
                <Heading size="lg" className="text-[#033D54] mb-4 group-hover:text-[#033D54]/90 transition-colors duration-500">
                  {benefit.title}
                </Heading>
                <Text className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                  {benefit.description}
                </Text>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <Heading size="xl" className="text-[#033D54] mb-6">
              Ready to Transform Your Business?
            </Heading>
            <Text size="lg" className="text-gray-600 mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals and drive growth.
            </Text>
            <div className="inline-block">
              <Link
                href="/contact"
                className="bg-white text-[#033D54] px-8 py-4 rounded-lg font-semibold border-2 border-[#033D54] inline-flex items-center gap-2 group"
              >
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center gap-2"
                >
                  Get Started Today
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 