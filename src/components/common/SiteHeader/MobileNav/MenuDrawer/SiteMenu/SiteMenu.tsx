import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

const SiteMenu = (): JSX.Element => {
  const menuItems = [
    {
      key: `home`,
      label: `Home`,
      url: `/`,
    },
    {
      key: `workWithMe`,
      label: `Work With Me`,
      url: `/work-with-me`,
    },
    {
      key: `blog`,
      label: `Blog`,
      url: `/blog`,
    },
    {
      key: `about`,
      label: `About`,
      url: `/about`,
    },
  ];

  return (
    <List>
      {menuItems.map(({ key, label, url }) => {
        return (
          <ListItem key={key}>
            <Link href={url} passHref>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SiteMenu;
