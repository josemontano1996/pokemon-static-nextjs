import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '../ui';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Jose Manuel Montano Mengual' />
        <meta name='description' content={`Pokemon about ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Information about ${title}`} />
        <meta property='og:description' content={`This is the page about ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
