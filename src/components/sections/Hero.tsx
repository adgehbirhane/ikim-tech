import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/site-data';

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.1
  },
  center: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
};

export function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideIndex = Math.abs(page % siteData.hero.slides.length);
  const currentSlide = siteData.hero.slides[slideIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={page}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <Container className="relative h-full flex items-center">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="space-y-6"
                >
                  <Text className="text-lg md:text-xl  text-white font-medium">
                    {currentSlide.subtitle}
                  </Text>
                  <Heading size="2xl" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    {currentSlide.title}
                  </Heading>
                  <Text size="lg" className="text-lg md:text-xl text-gray-200 max-w-2xl">
                    {currentSlide.description}
                  </Text>
                </motion.div>
              </div>
            </Container>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {siteData.hero.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setPage([index, index > slideIndex ? 1 : -1]);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === slideIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
} 