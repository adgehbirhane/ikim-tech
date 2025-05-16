'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { FaUsers, FaChartLine, FaAward, FaHandshake, FaLightbulb, FaHeart, FaRocket, FaBullseye } from 'react-icons/fa';
import TeamMembers from '@/components/sections/about/TeamMembers';

const stats = [
  { number: '5+', label: 'Years Experience', icon: FaAward },
  { number: '50+', label: 'Projects Completed', icon: FaChartLine },
  { number: '30+', label: 'Team Members', icon: FaUsers },
  { number: '100%', label: 'Client Satisfaction', icon: FaHeart }
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    icon: FaLightbulb
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service.',
    icon: FaAward
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency.',
    icon: FaHandshake
  }
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#033D54]/5 via-transparent to-transparent" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20 mt-16 md:mt-24"
          >
            <Heading size="2xl" className="mb-6 font-bold tracking-tight text-[#033D54] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#033D54] after:rounded-full">
              IKIM Tech
            </Heading>
            <Text size="xl" className="text-gray-600 mb-12">
              We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
            </Text>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="flex justify-center mb-6">
                  <FaRocket className="w-12 h-12 text-[#033D54]" />
                </div>
                <Heading size="xl" className="mb-4 text-[#033D54]">
                  Our Vision
                </Heading>
                <Text size="lg" className="text-gray-600">
                  To be the leading technology partner for businesses in Africa, known for innovation, reliability, and excellence in digital transformation.
                </Text>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="flex justify-center mb-6">
                  <FaBullseye className="w-12 h-12 text-[#033D54]" />
                </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#033D54]" />
                </div>
                <Heading size="2xl" className="text-[#033D54] font-bold mb-2 text-3xl md:text-4xl">
                  {stat.number}
                </Heading>
                <Text className="text-gray-600 text-sm md:text-base">{stat.label}</Text>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#033D54]/20 to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <Heading size="xl" className="text-[#033D54]">
                Our Story
              </Heading>
              <Text size="lg" className="text-gray-600 max-w-xl mx-auto md:mx-0">
                Founded in 2019, IKIM Tech has grown from a small team of passionate developers to a full-service technology company. We specialize in creating custom software solutions that help businesses thrive in the digital age.
              </Text>
              <Text size="lg" className="text-gray-600 max-w-xl mx-auto md:mx-0">
                Our journey has been marked by continuous learning, innovation, and a commitment to excellence. We believe in building long-term relationships with our clients and delivering solutions that make a real impact.
              </Text>
            </motion.div>
          </div>
        </Container>
      </section>

      <TeamMembers />

      {/* Core Values */}
      <section className="py-24">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Heading size="2xl" className="text-[#033D54] mb-6">
              Our Core Values
            </Heading>
            <Text size="xl" className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              These principles guide everything we do and help us maintain the highest standards of service.
            </Text>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="flex justify-center mb-6">
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-[#033D54]" />
                </div>
                <Heading size="lg" className="text-[#033D54] mb-4 text-center text-xl md:text-2xl">
                  {value.title}
                </Heading>
                <Text className="text-gray-600 text-center text-sm md:text-base">
                  {value.description}
                </Text>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;