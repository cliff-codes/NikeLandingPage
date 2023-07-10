import React from 'react'
import Logo from '../assets/Vector.png'
import { font } from '../assets/font'
import { colors } from '../assets/colors'
//mui
import {Box, Container, Typography} from '@mui/material'

const Nav = () => {
  return (
    <>
      <Container sx={{
        display: "flex",
        height: "120px",
        placeItems: "center",
        gap: "90px",
        maxWidth: "100%",
      }}>
        <Box>
          <img src={Logo} alt='logo of nike'/>
        </Box>
        <Box sx = {{
          display: "flex",
          gap: "40px",
          fontSize: font.fontSize.small
        }}>
          <Typography fontSize={font.fontSize.small}>MEN</Typography>
          <Typography fontSize={font.fontSize.small}>WOMEN</Typography>
          <Typography fontSize={font.fontSize.small}>SALE</Typography>
          <Typography fontSize={font.fontSize.small}>SNKRS</Typography>
        </Box>
      </Container>
    </>

  )
}

export default Nav