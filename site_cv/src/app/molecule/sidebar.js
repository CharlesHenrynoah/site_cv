import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider,
  Avatar, Typography, Box, Button
} from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Image from 'next/image';



const drawerWidth = 240;

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: open ? drawerWidth : 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      backgroundColor: '#000000',
    },
  }),
);

const sidebarTextStyles = {
  color: '#FFFFFF',
};

const sidebarHoverStyles = {
  '&:hover': {
    color: '#0AFF65',
    '& .MuiListItemIcon-root': {
      color: '#0AFF65',
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Bouton pour ouvrir/fermer le tiroir */}
      {/* <Button onClick={toggleDrawer} sx={{ color: '#FFFFFF', mt: 1 }}>
        <MenuIcon />
      </Button> */}
      <StyledDrawer variant="permanent" open={open}>
      <Box sx={{ my: 4, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
         <Avatar sx={{ width: 80, height: 80, bgcolor: 'secondary.main' }}>
             <Image src="/photo.png" alt="Avatar" width={80} height={80} />
         </Avatar>
        <Typography variant="h6" align="center" sx={{ mt: 2, color: '#0AFF65', ...sidebarTextStyles }}>
          Charles-Henry Noah
        </Typography>
        </Box>
        <Divider />
        <Box sx={{ ml: 2.7 }}>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', ...sidebarTextStyles }}>
            À propos
          </Typography>
        </Box>
        <List>
          {[
            { text: "Mon I.A", icon: <PersonIcon />, link: "/monia" },
            { text: "Mon CV", icon: <AccountCircleIcon />, link: "/moncv" },
            { text: "Mes passions", icon: <FavoriteIcon />, link: "/mespassions" },
            { text: "Mes projets", icon: <FolderIcon />, link: "/mesprojets" },
          ].map((item, index) => (
            <Link href={item.link} key={index} style={{ textDecoration: 'none' }} underline="none">
              <ListItem
                button
                sx={{ ...sidebarTextStyles, ...sidebarHoverStyles }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', ...sidebarHoverStyles }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </Box>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', ...sidebarTextStyles }}>
            Contacts &amp; Ressources
          </Typography>
        </Box>
        <List>
          {[{ text: "Let’s Connect", icon: <ContactPhoneIcon />, link: "/letsconnect" },
            { text: "Ressources", icon: <LinkIcon />, link: "/ressources" }].map((item, index) => (
            <Link href={item.link} key={index} style={{ textDecoration: 'none' }} underline="none">
              <ListItem
                button
                sx={{ ...sidebarTextStyles, ...sidebarHoverStyles }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', ...sidebarHoverStyles }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </Box>
              </ListItem>
            </Link>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
};

export default Sidebar;
