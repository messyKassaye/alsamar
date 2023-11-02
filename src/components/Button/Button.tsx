import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, SyntheticEvent } from 'react';

type IconVariantType = 'transparent' | 'dot' | 'circle' | 'location' | 'stack';

type IconVariants = {
  [key in IconVariantType]: JSX.Element | null;
};

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  variant?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | 'transparent';
  icon?: JSX.Element;
  iconVariant?: IconVariantType;
  iconPosition?: 'left' | 'right';
  handleClick?: (e?: SyntheticEvent) => void;
  className?: string;
}

const Button = ({ text, size, type, active, variant, className, handleClick, ...rest }: IButton) => {
  return (
    <button
      type={type}
      className={cn('mp-btn', `mp-btn-${variant}`, `${active ? 'mp-btn-active' : ''}`)}
      onClick={handleClick}
      {...rest}
    >
      {!!text && <span>{text}</span>}
    </button>
  );
};

export default Button;
