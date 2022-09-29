import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import React, { useState } from "react";
// import { Badge, Mail, Notifications } from '@mui/icons-material';
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SettingsPowerRounded } from "@mui/icons-material";

const Navbar = () => {
const [open, setOpen] = useState(false)
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    Padding: 2,
    width: "40%",
    borderRadius: theme.shape.borderRadius,
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
  }));

  const UseBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
  }));
  return (
    <Box>
      <AppBar position="fixed">
        <StyledToolBar>
          <Typography
            variant="h4"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Elegent
          </Typography>
          <LocalFloristIcon sx={{ display: { xs: "block", sm: "none" } }} size={128}/>
          <Search>
            <SearchIcon />
            <InputBase placeholder="Search....." />
          </Search>
          <Icons >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
         
          <Avatar
            sx={{ width: "50px", height: "50px" }}
            alt="Cindy Baker"
            src="./assets/girlimage.jpg"
            onClick={(e)=>{setOpen(true)}}
          />
           </Icons>
         <UseBox>
          <Avatar
            sx={{ width: "50px", height: "50px" }}
            alt="Cindy Baker"
            src="./assets/girlimage.jpg"
            onClick={(e)=>{setOpen(true)}}
          />
          <Typography variant="span">Aarna</Typography>
          </UseBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
