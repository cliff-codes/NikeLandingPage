import React from 'react'
import { Card, Box, CardContent, Typography } from '@mui/material'
import { font } from '../assets/font'
import StarIcon from '@mui/icons-material/Star';
import { colors } from '../assets/colors';

const ShoeCard = ({cardImg}) => {
  return (
    <Box sx = {{
       width: "140px",
       position: "relative"
    }}>
        <Box>
            <Box sx = {{
                width: "240px",
                position: "relative",
                top: "130px",
                left: "-50px"
            }}>
                <img width={"100%"} src={cardImg} alt='Nike Air Shoe'/>
            </Box>

            <Box sx={{
                background: colors.grey,
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "start",
                padding: "0 0 0 20px",
                borderRadius: "16px"
            }}>
            <Box><Typography fontSize={font.fontSize.small} >Nike Air</Typography></Box>
            <Box sx = {{
                fontWeight: font.fontWeight.bold
            }}>One Take</Box>
            <Box>
                <Box>
                    <StarIcon fontSize='10px'/>
                    <StarIcon fontSize='10px'/>
                    <StarIcon fontSize='10px'/>
                    <StarIcon fontSize='10px'/>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
} 
 
export default ShoeCard