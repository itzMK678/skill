'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from './loading-context';

export default function LoadingHandler() {
  const pathname = usePathname();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // adjust duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
