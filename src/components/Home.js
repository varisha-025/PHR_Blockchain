
import * as React from 'react';
import { Button, Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import Box from '@mui/material/Box'
import Features from './Features';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from './Common/Footer.js';
import FAQs from './Common/FAQs';

export default function Home() {

    return (
        <div >
            <Navbar />

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', paddingBottom: '100px' }}>

                <Box sx={{ width: '90%', height: '100vh', marginLeft: '70px', paddingTop: '200px', }}>

                    <Typography variant="h1" color="#8592FF" >
                        <b>
                            Carry your medical records in your pocket.
                        </b>
                    </Typography>
                    <Typography variant="h4" color="#737272" sx={{ marginTop: '65px', width: '75%', marginLeft: '140px' }}>
                        We make working as a healthcare professional <b>simpler</b>, <b>safer</b> and <b>smarter</b>.
                    </Typography>

                    <Button variant='contained' href="/choose/profile" sx={{ marginTop: '55px', height: '45px', width: '200px', borderRadius: '30px', backgroundColor: '#707EFF' }}>
                        Get started <ArrowRightAltIcon sx={{ marginLeft: '8px' }} />
                    </Button>

                </Box>
            </Box>
            <Features />
            <FAQs/>
            <Footer />
        </div>

    );
}