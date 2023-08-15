import { AppStoreLink } from '@/components/AppStoreLink'
import { HeartBackground } from '@/components/HeartBackground'
import { Container } from '@/components/Container'

import { useState, useEffect } from 'react';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
}

export function CallToAction() {
  const isDesktop = useIsDesktop();
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-19 top-[42%] -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      <HeartBackground
          color="#fff"
          className="animate-pulse"
          width={isDesktop ? 800 : 400} // Adjusted width
          height={isDesktop ? 900 : 450} // Adjusted height
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Create a Loving Keepsake for Your Proposal
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          It&apos;s easy to get started with Bundl. Download the app, sign up in 30 seconds, and we&apos;ll assist you in making a special book filled with messages from her family and friends.

          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
