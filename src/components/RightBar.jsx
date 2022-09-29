import { TypeSpecimen } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'


export const RightBar = () => {
  return (
  <Box  flex={4} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed" sx={{margin:6}} width={250}>
        <Typography variant="h6" fontWeight={100}>
            Online Friends
        </Typography>

   <AvatarGroup max={5} >
      <Avatar alt="Remy Sharp" src="./assets/girlimage.jpg" />
      <Avatar alt="Travis Howard" src="./assets/boy1.jpg" />
      <Avatar alt="Cindy Baker" src="./assets/gir2.jpg" />
      <Avatar alt="Agnes Walker" src="./assets/boy2.jpg" />
      <Avatar alt="Trevor Henderson" src="./assets/girl3.jpg" />
      <Avatar alt="Trevor Henderson" src="./assets/girl4.jpg" />
</AvatarGroup>
<br/>
<Typography variant="h6" fontWeight={100} > Latest Photos</Typography>
<ImageList  cols={3} rowHeight={100} mt={2} mb={2}                                                >
    
<ImageListItem gap="20px">
         <img src='./assets/images (1).jpg' alt="i" />
    </ImageListItem>

    <ImageListItem gap="20px">
         <img src='./assets/images (2).jpg ' alt="m"/>
    </ImageListItem>

    <ImageListItem gap="20px">
         <img src='./assets/images (4).jpg' alt="a"/>
    </ImageListItem>

    <ImageListItem gap="20px">
         <img src='./assets/images (5).jpg' alt="g"/>
    </ImageListItem>

    <ImageListItem gap="20px">
         <img src='./assets/images (6).jpg' alt="e"/>
    </ImageListItem>

    <ImageListItem gap="20px">
         <img src='./assets/images (3).jpg' alt="e"/>
    </ImageListItem>
</ImageList>

<Typography variant="h6" fontWeight={100} > Latest Converstations</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="./assets/boy2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="./assets/girl3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="./assets/gir2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    
    </Box>
    
    
    
  )
}
