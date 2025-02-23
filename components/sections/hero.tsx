'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80" />
      
      {/* Hero content */}
      <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="block text-foreground">
              Creation AI Platform
            </span>
            <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Building the Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            Harness the power of multiple AI models to transform your development workflow.
            Built for modern teams, powered by cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-x-6"
          >
            {/* Add your CTA buttons here */}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          {/* Add decorative SVG patterns */}
        </svg>
      </div>
    </section>
  );
}