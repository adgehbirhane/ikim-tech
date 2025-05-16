'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaGithub } from 'react-icons/fa';
import { teamMembers } from '@/data/team';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#033D54]/5 via-transparent to-transparent" />
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Text className="text-[#033D54] font-semibold mb-4">OUR TEAM</Text>
              <Heading size="2xl" className="text-[#033D54] font-bold mb-6">
                Meet Our Team
              </Heading>
              <Text size="xl" className="text-gray-600 max-w-2xl mx-auto">
                A diverse group of passionate professionals with expertise across various technologies and creative disciplines, working together to deliver exceptional digital solutions.
              </Text>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Team Members", value: "20+" },
                { label: "Projects Completed", value: "100+" },
                { label: "Client Satisfaction", value: "98%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-4"
                >
                  <Text size="xl" className="text-[#033D54] font-bold mb-1">
                    {stat.value}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {stat.label}
                  </Text>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#033D54]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <Heading size="lg" className="mb-2 text-[#033D54] group-hover:text-[#033D54]/90 transition-colors">
                    {member.name}
                  </Heading>
                  <Text className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                    {member.role}
                  </Text>
                  <div className="flex gap-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = {
                        linkedin: FaLinkedinIn,
                        twitter: FaTwitter,
                        facebook: FaFacebookF,
                        github: FaGithub
                      }[platform as keyof typeof member.social];
                      
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#033D54]/5 flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 