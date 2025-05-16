'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { stats, values } from '@/data/about';
import TeamMembers from '@/components/sections/about/TeamMembers';
import { FaRocket, FaBullseye } from 'react-icons/fa';
import { Testimonials } from '@/components/sections/about/Testimonials';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#033D54]/5 via-transparent to-transparent" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-4xl mx-auto mb-20 mt-16 md:mt-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Heading size="2xl" className="mb-6 font-bold tracking-tight text-[#033D54] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#033D54] after:rounded-full">
                IKIM Tech
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Text size="xl" className="text-gray-600 mb-12">
                We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
              </Text>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex justify-center mb-6"
                >
                  <FaRocket className="w-12 h-12 text-[#033D54]" />
                </motion.div>
                <Heading size="xl" className="mb-4 text-[#033D54]">
                  Our Vision
                </Heading>
                <Text size="lg" className="text-gray-600">
                  To be the leading technology partner for businesses in Africa, known for innovation, reliability, and excellence in digital transformation.
                </Text>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex justify-center mb-6"
                >
                  <FaBullseye className="w-12 h-12 text-[#033D54]" />
                </motion.div>
                <Heading size="xl" className="mb-4 text-[#033D54]">
                  Our Mission
                </Heading>
                <Text size="lg" className="text-gray-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success in the digital era.
                </Text>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center bg-white p-6 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex justify-center mb-4"
                >
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#033D54]" />
                </motion.div>
                <Heading size="2xl" className="text-[#033D54] font-bold mb-2 text-3xl md:text-4xl">
                  {stat.number}
                </Heading>
                <Text className="text-gray-600 text-sm md:text-base">{stat.label}</Text>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#033D54]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6 text-center md:text-left"
            >
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Heading size="xl" className="text-[#033D54]">
                  Our Story
                </Heading>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Text size="lg" className="text-gray-600 max-w-xl mx-auto md:mx-0">
                  Founded in 2019, IKIM Tech has grown from a small team of passionate developers to a full-service technology company. We specialize in creating custom software solutions that help businesses thrive in the digital age.
                </Text>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Text size="lg" className="text-gray-600 max-w-xl mx-auto md:mx-0">
                  Our journey has been marked by continuous learning, innovation, and a commitment to excellence. We believe in building long-term relationships with our clients and delivering solutions that make a real impact.
                </Text>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <TeamMembers />

      {/* Core Values */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <Heading size="2xl" className="text-[#033D54] mb-6">
              Our Core Values
            </Heading>
            <Text size="xl" className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              These principles guide everything we do and help us maintain the highest standards of service.
            </Text>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex justify-center mb-6"
                >
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-[#033D54]" />
                </motion.div>
                <Heading size="lg" className="text-[#033D54] mb-4 text-center text-xl md:text-2xl">
                  {value.title}
                </Heading>
                <Text className="text-gray-600 text-center text-sm md:text-base">
                  {value.description}
                </Text>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      <Testimonials />
    </main>
  );
};

export default AboutPage;