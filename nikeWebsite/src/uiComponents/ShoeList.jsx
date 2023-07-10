import { Box, Container } from '@mui/material'
import React from 'react'
import ShoeCard from './ShoeCard'
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'

const ShoeList = () => {
  return (
    <Container sx = {{
        display: "flex",
        gap: "40px",
        position: "relative",
        top: "-140px",
        maxHeight: "200px"
    }}>
       <ShoeCard cardImg={shoe1}/>
       <ShoeCard cardImg={shoe2}/>
       <ShoeCard cardImg={shoe3}/>
    </Container>
  )
}

export default ShoeList