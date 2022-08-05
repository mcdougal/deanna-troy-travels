import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const SiteMenu = (): JSX.Element => {
  const menuItems = [
    {
      key: `home`,
      label: `Home`,
      url: `/`,
    },
    {
      key: `about`,
      label: `About`,
      url: `/about`,
    },
    {
      key: `blog`,
      label: `Blog`,
      url: `/blog`,
    },
    {
      key: `workWithMe`,
      label: `Work With Me`,
      url: `/work-with-me`,
    },
  ];

  return (
    <List>
      {menuItems.map(({ key, label, url }) => {
        return (
          <ListItem key={key}>
            <ListItemButton href={url}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SiteMenu;
