import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

import sx from './NavItemButton.styles';

type ButtonPropOverrides = {
  color?: ButtonProps['color'];
  startIcon?: ButtonProps['startIcon'];
};

export type NavItem =
  | {
      type: `button`;
      key: string;
      buttonProps?: ButtonPropOverrides;
      label: string;
      id: string;
      onClick: ButtonProps[`onClick`];
    }
  | {
      type: `externalLink`;
      key: string;
      buttonProps?: ButtonPropOverrides;
      label: string;
      externalUrl: string;
    }
  | {
      type: `internalLink`;
      key: string;
      buttonProps?: ButtonPropOverrides;
      label: string;
      internalPath: string;
    };

type Props = {
  navItem: NavItem;
};

const NavItemButton = ({ navItem }: Props): JSX.Element => {
  const baseButtonProps = {
    color: `inherit`,
    size: `small`,
    sx: sx.navButton,
    variant: `text`,
  } as const;

  if (navItem.type === `button`) {
    return (
      <Button
        {...baseButtonProps}
        {...navItem.buttonProps}
        id={navItem.id}
        onClick={navItem.onClick}>
        {navItem.label}
      </Button>
    );
  }

  if (navItem.type === `externalLink`) {
    return (
      <Button
        {...baseButtonProps}
        {...navItem.buttonProps}
        component="a"
        href={navItem.externalUrl}
        target="_blank">
        {navItem.label}
      </Button>
    );
  }

  if (navItem.type === `internalLink`) {
    return (
      <Link href={navItem.internalPath} legacyBehavior passHref>
        <Button {...baseButtonProps} {...navItem.buttonProps} component="a">
          {navItem.label}
        </Button>
      </Link>
    );
  }

  const exhaustiveCheck: never = navItem;
  return exhaustiveCheck;
};

export default NavItemButton;
