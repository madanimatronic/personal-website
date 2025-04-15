import clsx from 'clsx';
import { FC } from 'react';
import s from './TerminalHero.module.scss';

interface TerminalHeroProps {
  className?: string;
}

// TODO: развить эту задумку:
// Надпись 'I DO FRONTEND' выводится анимированно в стиле терминала
// 'FRONTEND' можно выделить, сделать акцент на этом слове
// 1) сделать тень от текста
// 2) залить контейнер слова акцентным цветом, а цвет слова сделать фоновым (чёрным)
// Выделение слова тоже можно анимировать для красоты

export const TerminalHero: FC<TerminalHeroProps> = ({
  className: additionalClassName,
}) => {
  return (
    <div className={clsx(s.hero, additionalClassName)}>
      <h1 className={s.message}>
        <span className={clsx(s.animatedMessage, s.typewriterEffect)}>
          {'I DO '}
          <span className={s.accent}>FRONTEND</span>
        </span>
      </h1>
    </div>
  );
};
