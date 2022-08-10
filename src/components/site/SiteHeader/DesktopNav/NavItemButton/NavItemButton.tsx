import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

import sx from './NavItemButton.styles';

export type NavItem =
  | {
      type: `button`;
      key: string;
      label: string;
      id: string;
      onClick: ButtonProps[`onClick`];
    }
  | {
      type: `externalLink`;
      key: string;
      label: string;
      externalUrl: string;
    }
  | {
      type: `internalLink`;
      key: string;
      label: string;
      internalPath: string;
    };

interface Props {
  navItem: NavItem;
}

const NavItemButton = ({ navItem }: Props): JSX.Element => {
  const baseButtonProps = {
    color: `inherit`,
    size: `large`,
    sx: sx.navButton,
    variant: `text`,
  } as const;

  if (navItem.type === `button`) {
    return (
      <Button {...baseButtonProps} id={navItem.id} onClick={navItem.onClick}>
        {navItem.label}
      </Button>
    );
  }

  if (navItem.type === `externalLink`) {
    return (
      <Button
        {...baseButtonProps}
        component="a"
        href={navItem.externalUrl}
        target="_blank">
        {navItem.label}
      </Button>
    );
  }

  if (navItem.type === `internalLink`) {
    return (
      <Link href={navItem.internalPath} passHref>
        <Button {...baseButtonProps} component="a">
          {navItem.label}
        </Button>
      </Link>
    );
  }

  const exhaustiveCheck: never = navItem;
  return exhaustiveCheck;
};

export default NavItemButton;
