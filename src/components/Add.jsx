import { Avatar, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Add = () => {
  const [open, setOpen] = useState(false)

  const StyledModal=styled(Modal)({

    display:"flex",
    alignItems:"left",
    justifyContent:"center"
  })

  const UseBox=styled(Box)({

    display:"flex",
    alignItems:"center",
    gap:"20px",
    marginBottom:"20px"
  })

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 }
        }}
        onClick={(e)=>{setOpen(true)}}
      > 
     <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
   
       
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box height={250} width={380} bgcolor={"background.default"}  color={"text.primary"} p={3} borderRadius="0px 10px" mt={2} textAlign="left">
          <Typography textAlign="center" color="gray">Create Post</Typography>
          <UseBox>
           <Avatar alt="Remy Sharp" src="./assets/girlimage.jpg" />
           <Typography fontWeight={500} variant="span">Dannie</Typography>
           
        </UseBox>
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" mt={2} mb={2} gap={1}>
        <EmojiEmotionsIcon color="warning"/>
        <ImageIcon color="secondary"/>
        <VideocamIcon color="success"/>
        <PersonAddIcon color="error"/>
        </Stack>

        <ButtonGroup variant="contained" aria-label="outlined button group" fullWidth >
         <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
         </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
