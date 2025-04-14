import clsx from 'clsx';
import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';
import s from './MainButtonLink.module.scss';

interface MainButtonLinkProps {
  className?: string;
  href?: string;
  external?: boolean;
  target?: HTMLAttributeAnchorTarget | undefined;
  rel?: string;
  children?: ReactNode;
}

export const MainButtonLink: FC<MainButtonLinkProps> = ({
  className: additionalClassName,
  href = '/',
  external = false,
  target,
  rel,
  children,
}) => {
  if (external) {
    return (
      <a
        className={clsx(s.buttonLink, additionalClassName)}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        className={clsx(s.buttonLink, additionalClassName)}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }
};
