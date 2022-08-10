import { List } from '@mui/material';

import SiteMenuListItem, { SiteMenuItem } from './SiteMenuListItem';

const SiteMenu = (): JSX.Element => {
  const menuItems: Array<SiteMenuItem> = [
    {
      type: `internalLink`,
      key: `home`,
      label: `Home`,
      internalPath: `/`,
    },
    {
      type: `internalLink`,
      key: `workWithMe`,
      label: `Work With Me`,
      internalPath: `/work-with-me`,
    },
    {
      type: `externalLink`,
      key: `videos`,
      label: `Videos`,
      externalUrl: `https://www.youtube.com/deannatroytravels/videos`,
    },
    {
      type: `internalLink`,
      key: `blog`,
      label: `Blog`,
      internalPath: `/blog`,
    },
    {
      type: `internalLink`,
      key: `about`,
      label: `About`,
      internalPath: `/about`,
    },
  ];

  return (
    <List>
      {menuItems.map((menuItem) => {
        return <SiteMenuListItem key={menuItem.key} menuItem={menuItem} />;
      })}
    </List>
  );
};

export default SiteMenu;
