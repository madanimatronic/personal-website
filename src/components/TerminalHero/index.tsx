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
        {'>'}
        {'I DO'} {/* Первый вариант выделения */}
        <span className={s.accent}>FRONTEND</span>_
        {/* Второй вариант выделения */}
        {/* <span
        style={{
          backgroundColor: '#d10404',
          color: 'black',
        }}
      >
        FRONTEND
      </span>
      _ */}
      </h1>
    </div>
  );
};
