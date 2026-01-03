import { List } from '@mui/material';
import { useState } from 'react';

import { Miscellaneous } from '@lib/miscellaneous';

import ContactDialog from '../../../../ContactDialog';

import SiteMenuListItem, { SiteMenuItem } from './SiteMenuListItem';

const CONTACT_BUTTON_HTML_ID = `mobile-menu-contact-button`;

type Props = {
  miscellaneous: Miscellaneous;
};

const SiteMenu = ({ miscellaneous }: Props): JSX.Element => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const openContactDialog = (): void => {
    setIsContactDialogOpen(true);
  };

  const closeContactDialog = (): void => {
    setIsContactDialogOpen(false);
  };

  const menuItems: Array<SiteMenuItem> = [
    {
      type: `internalLink`,
      key: `destinations`,
      label: `Destinations`,
      internalPath: `/destinations`,
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
      key: `workWithMe`,
      label: miscellaneous.workWithMeTitle.text,
      internalPath: `/work-with-me`,
    },
    {
      type: `internalLink`,
      key: `about`,
      label: `About`,
      internalPath: `/about`,
    },
    {
      type: `button`,
      key: `contact`,
      label: `Contact Me`,
      id: CONTACT_BUTTON_HTML_ID,
      onClick: openContactDialog,
    },
  ];

  return (
    <>
      <List>
        {menuItems.map((menuItem) => {
          return <SiteMenuListItem key={menuItem.key} menuItem={menuItem} />;
        })}
      </List>
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </>
  );
};

export default SiteMenu;
