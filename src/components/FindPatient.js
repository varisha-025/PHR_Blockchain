
import React from 'react';
import Navbar from './Common/Navbar';
import PatientRecords from './PatientRecords'
import { Typography } from '@mui/material';

export default function FindDoctor() {

  return (
    <div >
      <Navbar/>
        <Typography variant='h4' sx={{ marginTop: '60px'}}>
            Find Patient by Aadhar Number
        </Typography>
        <PatientRecords/>
    </div>
  );
}
