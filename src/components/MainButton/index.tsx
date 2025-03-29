import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import s from './MainButton.module.scss';

interface MainButtonProps {
  className?: string;
  children?: ReactNode;
}

export const MainButton: FC<MainButtonProps> = ({
  className: additionalClassName,
  children,
}) => {
  return (
    <button className={clsx(s.button, additionalClassName)}>{children}</button>
  );
};
