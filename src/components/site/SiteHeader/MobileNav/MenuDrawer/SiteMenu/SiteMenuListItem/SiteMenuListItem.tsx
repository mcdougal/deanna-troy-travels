import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

export type SiteMenuItem =
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
  menuItem: SiteMenuItem;
}

const SiteMenuListItem = ({ menuItem }: Props): JSX.Element => {
  if (menuItem.type === `externalLink`) {
    return (
      <ListItem>
        <ListItemButton href={menuItem.externalUrl} target="_blank">
          <ListItemText primary={menuItem.label} />
        </ListItemButton>
      </ListItem>
    );
  }

  if (menuItem.type === `internalLink`) {
    return (
      <ListItem>
        <Link href={menuItem.internalPath} passHref>
          <ListItemButton>
            <ListItemText primary={menuItem.label} />
          </ListItemButton>
        </Link>
      </ListItem>
    );
  }

  const exhaustiveCheck: never = menuItem;
  return exhaustiveCheck;
};

export default SiteMenuListItem;
