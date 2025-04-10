import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import s from './MainButton.module.scss';

interface MainButtonProps {
  className?: string;
  children?: ReactNode;
}

// TODO: учитывая, что кнопки на сайте в основном используются как ссылки, нужно будет использовать вместо button <a>
// также сам компонент скорее всего надо будет назвать ButtonLink или вроде того

export const MainButton: FC<MainButtonProps> = ({
  className: additionalClassName,
  children,
}) => {
  return (
    <button className={clsx(s.button, additionalClassName)}>{children}</button>
  );
};
