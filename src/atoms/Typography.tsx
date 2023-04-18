import { FC } from 'react';
import { x, SystemProps, Theme } from '@xstyled/emotion';

type Size =
  | '6xl'
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | '6xl'
  | 'lg'
  | 'base'
  | 'sm'
  | 'xs';
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'
  | 'em'
  | 'sup'
  | 'sub';

interface TypographyProps extends Omit<SystemProps<Theme>, 'children'> {
  size?: Size;
  variant?: Variant;
  children: React.ReactNode;
}

const variantTag = (variant: Variant) => {
  switch (variant) {
    case 'h1':
      return x.h1;
    case 'h2':
      return x.h2;
    case 'h3':
      return x.h3;
    case 'h4':
      return x.h4;
    case 'h5':
      return x.h5;
    case 'h6':
      return x.h6;
    case 'em':
      return x.em;
    case 'strong':
      return x.strong;
    case 'sup':
      return x.sup;
    case 'sub':
      return x.sub;
    case 'p':
      return x.p;
    case 'span':
      return x.span;
    default:
      return x.p;
  }
};

const Typography: FC<TypographyProps> = ({
  size = 'base',
  variant = 'p',
  children,
  ...props
}) => {
  const Tag = variantTag(variant);

  return (
    <Tag fontSize={size} lineHeight={size} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
