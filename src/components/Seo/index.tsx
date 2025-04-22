import Head from 'next/head';
import { FC } from 'react';

interface SeoProps {
  headTitle: string;
  metaDescription: string;
}

export const Seo: FC<SeoProps> = ({ headTitle, metaDescription }) => {
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name='description' content={metaDescription} />
    </Head>
  );
};
