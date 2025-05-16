'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/site-data';
import { FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { SmoothLink } from '@/components/ui/SmoothLink';

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
            <SmoothLink href="/" className="flex items-center space-x-2">
              <Image
                src="/akim_logo.jpg"
                alt="Akim Tech Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </SmoothLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteData.nav.items.map((item) => (
                <SmoothLink
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-[#033D54] transition-colors"
                >
                  {item.name}
                </SmoothLink>
              ))}
              <SmoothLink href="/contact">
                <Button className="ml-4 bg-[#033D54] hover:bg-[#033D54]/90 text-white">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="group flex items-center justify-center gap-2"
                  >
                    Contact Us
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </Button>
              </SmoothLink>
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

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-screen w-[300px] bg-white shadow-2xl md:hidden z-50 border-r border-gray-200"
              >
                <div className="flex h-20 items-center justify-between px-4 border-b border-gray-100">
                  <SmoothLink href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="/akim_logo.jpg"
                      alt="Akim Tech Logo"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                      priority
                    />
                  </SmoothLink>
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#033D54] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#033D54]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-6">
                  <nav className="space-y-6">
                    {siteData.nav.items.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SmoothLink
                          href={item.href}
                          className="block text-lg font-medium text-gray-700 hover:text-[#033D54] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </SmoothLink>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                  >
                    <SmoothLink href="/#contact" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full justify-center bg-[#033D54] hover:bg-[#033D54]/90 text-white">
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="group flex items-center justify-center gap-2"
                        >
                          Contact Us
                          <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.div>
                      </Button>
                    </SmoothLink>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
} 