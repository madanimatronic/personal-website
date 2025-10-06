import clsx from 'clsx';
import { FC } from 'react';
import s from './TerminalHero.module.scss';

interface TerminalHeroProps {
  className?: string;
}

export const TerminalHero: FC<TerminalHeroProps> = ({
  className: additionalClassName,
}) => {
  return (
    <div className={clsx(s.hero, additionalClassName)}>
      <h1 className={s.message}>
        <span className={clsx(s.animatedMessage, s.typewriterEffect)}>
          {'I DO '}
          <span className={s.accent}>BACKEND</span>
        </span>
      </h1>
    </div>
  );
};
