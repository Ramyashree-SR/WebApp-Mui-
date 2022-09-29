import { Home, ModeNight } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import ArticleIcon from '@mui/icons-material/Article';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import React from "react";

const SideBar = ({mode,setMode}) => {
  return (
    <Box
    //   bgcolor="skyblue"
      flex={2}
      p={2}
      mt="40px"
      ml={0}
      sx={{ display: { xs: "none", sm: "block" } }}
    > 
    <Box position="fixed">

         <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href="#pages">
              <ListItemIcon>
                < ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href="#groups">
              <ListItemIcon>
                <GroupAddIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component='a' href="#groups">
              <ListItemIcon>
                < StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href="#freinds">
              <ListItemIcon>
                <Person2Icon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#sett">
              <ListItemIcon>
                < SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#profile">
              <ListItemIcon>
              < AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href="#profile">
              <ListItemIcon>
              < ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=> setMode(mode==="light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  );
};

export default SideBar;
