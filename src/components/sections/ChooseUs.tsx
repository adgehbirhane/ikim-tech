import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { chooseUsSlides } from '@/data/choose-us';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % chooseUsSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % chooseUsSlides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + chooseUsSlides.length) % chooseUsSlides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#033D54]/5 via-transparent to-transparent"
      />
      
      <Container className="relative">
        <div className="grid min-h-[80vh] gap-12 py-20 md:grid-cols-2 md:gap-8 md:py-32">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left mb-10"
            >
              <Heading
                size="lg"
                className="m-0 p-0 font-bold tracking-tight text-[#033D54] relative inline-block"
              >
                <span className="relative z-10 text-white">
                  Why You Choose Us?
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[#033D54] pointer-events-none [text-shadow:_-2px_-2px_0_#033D54,_2px_-2px_0_#033D54,_-2px_2px_0_#033D54,_2px_2px_0_#033D54]"
                >
                  Why You Choose Us?
                </span>
              </Heading>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Text size="lg" className="text-[#033D54] font-semibold">
                    {chooseUsSlides[currentSlide].subtitle}
                  </Text>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Heading size="2xl" className="max-w-2xl text-[#033D54]">
                    {chooseUsSlides[currentSlide].title}
                  </Heading>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Text size="xl" className="max-w-xl text-gray-600">
                    {chooseUsSlides[currentSlide].description}
                  </Text>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={chooseUsSlides[currentSlide].image}
                  alt={chooseUsSlides[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#033D54]/20 to-transparent"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-10"
        >
          <div className="flex flex-col gap-3">
            {chooseUsSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#033D54]' : 'bg-[#033D54]/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
          </div>

        <motion.button
          onClick={nextSlide}
            className="p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.9 }}
        >
            <FaChevronRight className="w-6 h-6 text-[#033D54] bg-white/70 p-2 rounded-full" />
        </motion.button>
        </motion.div>
      </Container>
    </section>
  );
} 