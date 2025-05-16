'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Heading size="2xl" className="mb-4">What Our Clients Say</Heading>
            <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Text>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Text className="font-semibold">{testimonial.name}</Text>
                  <Text className="text-sm text-gray-600">{testimonial.role}</Text>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <Text className="text-gray-600 italic">"{testimonial.content}"</Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 