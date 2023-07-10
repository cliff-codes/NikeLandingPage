import { Box, Container, Typography, makeStyles } from '@mui/material'
import React from 'react'
import { colors } from '../assets/colors'
import { font } from '../assets/font'


const Main = () => {
  return (
    <Container
    style={{
        marginTop: "30px"
    }}>
        <Box sx = {{
            display: "flex",
            gap: "70px",
            alignItems: "center", 
            
        }}>
            <Box sx={
                {
                    position: "relative",
                    bottom: "-12px"
                }
            }>
                <div style={{
                    width: "5px",
                    height: "90px",
                    background: colors.darkGrey,
                    borderRadius: "10px",
                    marginBottom: "10px"
                }}></div>

                <div style={{
                    width: "5px",
                    height: "40px",
                    background: colors.orange,
                    borderRadius: "10px"
                }}></div>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0"
            }}>
                <Box sx={{
                    position: "relative",
                    bottom: "-43px"
                }}>
                    <Typography fontSize={font.fontSize.semiMedium} fontWeight={"700"} fontFamily={font.family2}>Nike Air</Typography>
                </Box>
                <Box>
                    <Typography color={colors.orange} fontSize={font.fontSize.large} fontWeight={"200"}>Lebagh</Typography>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

export default Main