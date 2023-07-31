import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '../ui';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Jose Manuel Montano Mengual' />
        <meta name='description' content={`Pokemon about ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      <NavBar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
