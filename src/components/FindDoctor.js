
import React from 'react';
import Navbar from './Common/Navbar';
import DoctorRecords from './DoctorRecords'
import { Typography } from '@mui/material';

export default function FindDoctor() {

  return (
    <div >
      <Navbar/>
        <Typography variant='h4' sx={{ marginTop: '60px'}} className='header'>
            Search Doctors
        </Typography>
      <DoctorRecords/>


    </div>
  );
}
