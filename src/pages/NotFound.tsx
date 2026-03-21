import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { buttonVariants } from '@/components/Button';

export default function NotFound() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32 sm:py-48 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-display text-lg text-accent font-semibold tracking-tight mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Whatever you were looking for isn't here. But the good stuff is just a
          click away.
        </p>
        <Link
          to="/"
          className={buttonVariants({ variant: 'primary', className: 'mt-8' })}
        >
          Take me home
        </Link>
      </motion.div>
    </section>
  );
}
