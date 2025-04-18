import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import s from './MainContentBlock.module.scss';

interface MainContentBlockProps {
  title: string;
  titleAnchorId?: string;
  children?: ReactNode;
  className?: string;
}

export const MainContentBlock: FC<MainContentBlockProps> = ({
  title,
  titleAnchorId,
  children,
  className: additionalClassName,
}) => {
  return (
    <section className={clsx(s.contentBlock, additionalClassName)}>
      <h2 className={s.title} id={titleAnchorId}>
        {title}
        {titleAnchorId ? (
          <Link
            tabIndex={-1}
            className={s.anchorLink}
            href={`#${titleAnchorId}`}
          >
            <Image
              className={s.linkImage}
              aria-hidden
              src='/link.svg'
              alt='Ссылка на заголовок'
              width={40}
              height={40}
            />
          </Link>
        ) : undefined}
      </h2>
      {children}
    </section>
  );
};
