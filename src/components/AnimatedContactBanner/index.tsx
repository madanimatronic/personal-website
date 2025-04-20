import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import s from './AnimatedContactBanner.module.scss';

interface AnimatedContactBannerProps {
  className?: string;
}

export const AnimatedContactBanner: FC<AnimatedContactBannerProps> = ({
  className: additionalClassName,
}) => {
  return (
    <div className={clsx(s.bannerContainer, additionalClassName)}>
      <h2 className={s.title}>Хотите связаться?</h2>
      <div className={s.screen}>
        <Link className={s.link} href={'/contacts'}>
          <Image
            className={s.image}
            src={'/images/phone.webp'}
            alt='Винтажный телефон'
            width={162}
            height={556}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
