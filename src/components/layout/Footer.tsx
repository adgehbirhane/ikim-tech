'use client';

import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SmoothLink } from '@/components/ui/SmoothLink';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ],
  contact: [
    { icon: FaMapMarkerAlt, text: 'Jemo, Addis Ababa, Ethiopia', href: 'https://maps.google.com' },
    { icon: FaPhone, text: '+251 951 207 168', href: 'tel:+251951207168' },
    { icon: FaEnvelope, text: 'ikimtechco@gmail.com', href: 'mailto:ikimtechco@gmail.com' }
  ],
  social: [
    { icon: FaFacebookF, href: 'https://facebook.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
    { icon: FaInstagram, href: 'https://instagram.com' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#033D54] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Text size="lg" className="font-bold text-white">IKIM Tech Co.</Text>
            <Text className="text-white/70">
              We turn your concepts into reality through creative services. Our team delivers innovative design and exceptional results.
            </Text>
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text size="lg" className="font-bold mb-6 text-white">Quick Links</Text>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <SmoothLink href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </SmoothLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Text className="text-white font-semibold mb-4">Our Services</Text>
            <ul className="space-y-2">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Mobile Development", href: "/services/mobile-development" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Web Hosting", href: "/services/web-hosting" },
                { name: "Graphics Design", href: "/services/graphics-design" },
                { name: "Printing", href: "/services/printing" }
              ].map((service) => (
                <motion.li 
                  key={service.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SmoothLink
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </SmoothLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Text size="lg" className="font-bold mb-6 text-white">Contact Info</Text>
            <ul className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8">
          <Text className="text-center text-white/70">
            © {new Date().getFullYear()} IKIM Tech Co. All Rights Reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
} 