import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

const Feed = () => {
  return (
    <Box flex={7} p={2} width="100%" >
        <Posts/>        
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
</Box>
  )
}

export default Feed