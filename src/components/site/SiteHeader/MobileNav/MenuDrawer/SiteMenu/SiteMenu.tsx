import { List } from '@mui/material';
import { useState } from 'react';

import SocialsMenu, { SocialsMenuAnchor } from '../../../../SocialsMenu';

import SiteMenuListItem, { SiteMenuItem } from './SiteMenuListItem';

const SOCIALS_BUTTON_HTML_ID = `site-header-mobile-nav-socials-button`;

const SiteMenu = (): JSX.Element => {
  const [socialsMenuAnchor, setSocialsMenuAnchor] =
    useState<SocialsMenuAnchor | null>(null);

  const menuItems: Array<SiteMenuItem> = [
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
    {
      type: `button`,
      key: `socials`,
      label: `Socials`,
      id: SOCIALS_BUTTON_HTML_ID,
      onClick: (event): void => {
        setSocialsMenuAnchor({
          element: event.currentTarget,
          elementId: SOCIALS_BUTTON_HTML_ID,
        });
      },
    },
  ];

  return (
    <>
      <List>
        {menuItems.map((menuItem) => {
          return <SiteMenuListItem key={menuItem.key} menuItem={menuItem} />;
        })}
      </List>
      <SocialsMenu
        anchor={socialsMenuAnchor}
        onClose={(): void => {
          setSocialsMenuAnchor(null);
        }}
      />
    </>
  );
};

export default SiteMenu;
