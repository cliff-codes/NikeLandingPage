import React from 'react'
import { Box, Button, ButtonBase, Container, Typography } from '@mui/material'
import { font } from '../assets/font'

const Content = () => {
  return (
    <Container>
        <Box sx = {{
            maxWidth: "470px",
            position: "relative",
            left: "85px"
        }}>
            <Box>
            <Typography sx = {{
                lineHeight: "1.8",
                wordSpacing: "4px",
                zIndex: "2"
            }} fontSize={font.fontSize.small}>
            
                celebrating the hoops classic in original form as first introduced during UNDERCOVER's Autumn/Winter 2021 presentation. Genuine black leather takes over the upper while a smooth leather Swoosh accents the texture and collar bring a decades-old classic look.
                        
            </Typography>
            </Box>

            <Box sx={{
                margin: "40px 0 0 0",
                display: "flex",
                placeItems: "center",
                gap: "100px"
            }}>
                <Box><Typography fontSize={font.fontSize.medium}>$190</Typography></Box>

                <Box>
                    <Button sx = {{
                        borderRadius: "20px",
                        color: "black",
                        padding: "7px 14px",
                        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",
                        fontSize: "14",
                        textTransform: "capitalize"
                    }}>
                        Add to cart
                    </Button>
                </Box>
            </Box>


        </Box>
    </Container>
  )
}

export default Content