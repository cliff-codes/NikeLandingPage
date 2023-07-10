import React from 'react'
import { Box } from '@mui/material'
import { colors } from '../assets/colors'

const textStyle = {
    letterSpacing: "10px",
    zIndex: "-1",
    opacity: ".2",
    color: colors.orange,
    fontSize: "150px"
}

const JustDoIt = () => {
  return (
    <Box sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        maxWidth: "200px",
        height: "100%",
        fontWeight: "300"

    }}>
        <Box sx={{
            width: "100%",
            position: "relative",
            right: "-75%",
            top: "-29%"
        }}>
            <Box sx={textStyle}>Just</Box>
            <Box sx={textStyle}>Do</Box>
            <Box sx={textStyle}>It</Box>
        </Box>
    </Box>
  )
}

export default JustDoIt