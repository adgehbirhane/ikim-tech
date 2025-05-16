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

export default function TeamMembers() {
  return (
    <main className="min-h-screen bg-white" id="team">
        {/* Team Members Grid */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
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
                Meet Our Members
              </Heading>
              <Text size="xl" className="text-gray-600 max-w-2xl mx-auto">
                A diverse group of passionate professionals with expertise across various technologies and creative disciplines, working together to deliver exceptional digital solutions.
              </Text>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="group relative bg-white rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Social Links */}
                  <div className="absolute inset-0 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 h-auto w-10 flex flex-col items-center justify-center translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300">
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
                            className="w-full h-8 flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <Heading size="sm" className="text-[#033D54] mb-1">
                    {member.name}
                  </Heading>
                  <Text className="text-gray-600 text-sm">
                    {member.role}
                  </Text>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 