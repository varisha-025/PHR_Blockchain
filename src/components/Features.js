
import * as React from 'react';
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



export default function Features() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (

        <div>
            <Typography variant="h3" color="#707EFF" sx={{ marginTop: '100px', marginBottom: '50px', marginLeft: '10px' }}>
                <b>Features</b>
            </Typography>

            <div className='features'>
                <Box sx={{ width: '80%', justifyContent: 'space-between', alignItems: 'center', marginLeft: '145px', marginTop: '2rem' }}>
                    <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                        <Grid item sx={{ width: '440px', marginRight: '45px' }}>
                            
                                <Typography variant="h5" color="#262633" sx={{ marginTop: '10px' }}>
                                    <b>Easy Sharing & Access</b>
                                </Typography>
                                <Typography variant="h6" color="#737272" sx={{ marginTop: '20px' }}>
                                    Share medical records effortlessly between doctors, clinics, and patients on a secure blockchain platform.
                                </Typography>
                            
                        </Grid>
                        <Grid item sx={{ width: '440px',  }}>
                            
                            
                                <Typography variant="h5" color="#262633" sx={{ marginTop: '10px' }}>
                                    <b> Secure Identity </b>
                                </Typography>
                                <Typography variant="h6" color="#737272" sx={{ marginTop: '20px' }}>
                                    Ensure privacy with reliable ID verification using Abha ID and Aadhar integration for patients and healthcare professionals.
                                </Typography>
                            
                        </Grid>
                        <Grid item sx={{ width: '440px', marginRight: '45px' }}>

                            
                                <Typography variant="h5" color="#262633" sx={{ marginTop: '10px' }}>
                                    <b>  Quick Document Search </b>
                                </Typography>
                                <Typography variant="h6" color="#737272" sx={{ marginTop: '20px' }}>
                                    Find records fast with simple filters like date, doctor, and hospital, and share them easily as images or PDFs.
                                </Typography>

                            
                        </Grid>
                        <Grid item sx={{ width: '440px' }}>

                            
                                <Typography variant="h5" color="#262633" sx={{ marginTop: '10px' }}>
                                    <b> Go Digital with PHRs </b>
                                </Typography>
                                <Typography variant="h6" color="#737272" sx={{ marginTop: '20px' }}>
                                    Turn paper health records into digital files, making them accessible and organized within the blockchain system.
                                </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
            </div>



        </div>


    );
}






