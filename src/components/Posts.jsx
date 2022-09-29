import React from 'react'
import { Box } from '@mui/system';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

const Posts = () => {
  return (
  
   <Card sx={{m:5 ,width:"100%",padding:"10px 10px",mb:5}}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        width="25%"
        image="./assets/images (5).jpg"
        alt="nature"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error" />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
         </CardActions>
      
    </Card>
    
  
  )
}

export default Posts