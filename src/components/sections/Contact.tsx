'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaBuilding, FaUser, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import { BiArrowToRight } from 'react-icons/bi';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, text: 'ikimtechco@gmail.com', href: "mailto:ikimtechco@gmail.com", label: "Email" },
    { icon: FaPhone, text: '+251 951 207 168', href: "tel:+251951207168", label: "Phone" },
    { icon: FaMapMarkerAlt, text: 'Jemo, Addis Ababa, Ethiopia', href: "https://www.google.com/maps/place/Jemo,+Addis+Ababa,+Ethiopia", label: "Address" },
    { icon: FaClock, text: 'Monday - Friday: 9:00 AM - 6:00 PM', href: "#", label: "Working Hours" },
    { icon: FaGlobe, text: 'www.ikimtechco.com', href: "https://www.ikimtechco.com", label: "Website" },
    { icon: FaBuilding, text: 'IKIM Tech Co.', href: "#", label: "Company" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div>
            <Heading size="2xl" className="mb-6 font-bold tracking-tight text-[#033D54] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#033D54] after:rounded-full">
              Let's Work Together
            </Heading>
            <Text size="xl" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're excited to help bring your ideas to life! Whether you have a project in mind or need assistance with your existing applications, we're here to collaborate.
            </Text>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <Heading size="lg" className="mb-6 text-[#033D54]">Contact Information</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col p-4 rounded-lg hover:bg-[#033D54]/5 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-1">
                        <item.icon className="w-5 h-5 text-[#033D54]" />
                        <Text className="text-sm font-medium text-[#033D54]">{item.label}</Text>
                      </div>
                      <Text className="text-gray-600 text-sm ml-8">{item.text}</Text>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgb(0,0,0,0.04)] transition-all duration-500"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#033D54] w-5 h-5" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-[50px] pl-12 bg-gray-50 border border-gray-200 text-gray-700 text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-[#033D54] transition-all duration-200"
                    required
                  />
                </div>
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#033D54] w-5 h-5" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[50px] pl-12 bg-gray-50 border border-gray-200 text-gray-700 text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-[#033D54] transition-all duration-200"
                    required
                  />
                </div>
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-[#033D54] transition-all duration-200 p-4"
                  required
                />
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[50px] bg-[#033D54] text-white font-bold tracking-wide hover:bg-[#033D54]/90 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 