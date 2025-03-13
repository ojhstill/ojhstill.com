import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="relative z-10 text-4xl sm:text-7xl font-semibold tracking-tight">
            404 - Page Not Found
          </h1>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 text-xs/6 lg:text-sm">
          <a
            href="/"
            className="rounded-md bg-primary hover:bg-primary/70 text-primary-foreground px-3.5 py-2.5 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Take Me Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
