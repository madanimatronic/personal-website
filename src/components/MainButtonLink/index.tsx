import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import s from './MainButtonLink.module.scss';

interface MainButtonLinkProps {
  className?: string;
  children?: ReactNode;
}

// TODO: учитывая, что кнопки на сайте в основном используются как ссылки, нужно будет использовать вместо button <a>
// также сам компонент скорее всего надо будет назвать ButtonLink или вроде того

export const MainButtonLink: FC<MainButtonLinkProps> = ({
  className: additionalClassName,
  children,
}) => {
  return (
    <button className={clsx(s.button, additionalClassName)}>{children}</button>
  );
};
