'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/site-data';
import { FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { BiArrowToRight } from 'react-icons/bi';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isInitialLoad) {
        setIsInitialLoad(false);
        return;
      }

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isInitialLoad]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200"
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/akim_logo.jpg"
                alt="Akim Tech Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteData.nav.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-[#033D54] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/#contact">
                <Button className="ml-4 bg-[#033D54] hover:bg-[#033D54]/90 text-white">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="group flex items-center justify-center gap-2 "
                  > Contact Us
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#033D54] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#033D54] md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="space-y-1 px-4 py-3">
                {siteData.nav.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#033D54]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <Link href="/#contact">
                    <Button className="w-full justify-center bg-[#033D54] hover:bg-[#033D54]/90 text-white">Contact Us
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
} 