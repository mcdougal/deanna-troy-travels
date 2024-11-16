import {
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';

import sx from './SiteMenuListItem.styles';

export type SiteMenuItem =
  | {
      type: `button`;
      key: string;
      label: string;
      id: string;
      onClick: ListItemButtonProps[`onClick`];
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

type Props = {
  menuItem: SiteMenuItem;
};

const SiteMenuListItem = ({ menuItem }: Props): JSX.Element => {
  const listItemProps = {
    disablePadding: true,
  };

  const listItemTextProps = {
    sx: sx.listItemText,
    primary: menuItem.label,
  };

  if (menuItem.type === `button`) {
    return (
      <ListItem {...listItemProps}>
        <ListItemButton id={menuItem.id} onClick={menuItem.onClick}>
          <ListItemText {...listItemTextProps} />
        </ListItemButton>
      </ListItem>
    );
  }

  if (menuItem.type === `externalLink`) {
    return (
      <ListItem {...listItemProps}>
        <ListItemButton href={menuItem.externalUrl} target="_blank">
          <ListItemText {...listItemTextProps} />
        </ListItemButton>
      </ListItem>
    );
  }

  if (menuItem.type === `internalLink`) {
    return (
      <ListItem {...listItemProps}>
        <Link href={menuItem.internalPath} legacyBehavior passHref>
          <ListItemButton>
            <ListItemText {...listItemTextProps} />
          </ListItemButton>
        </Link>
      </ListItem>
    );
  }

  const exhaustiveCheck: never = menuItem;
  return exhaustiveCheck;
};

export default SiteMenuListItem;
