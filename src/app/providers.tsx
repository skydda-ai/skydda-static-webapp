'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';

import * as gtag from '@/lib/gtag';
import { store } from '@/store/store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return <Provider store={store}>{children}</Provider>;
};
