'use client';

import { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
      <div
        ref={bar}
        className="from-primary-400 to-ns-yellow h-full origin-left scale-x-0 bg-gradient-to-r shadow-[0_0_12px_rgba(13,143,132,.6)]"
      />
    </div>
  );
};

export default ScrollProgress;
