
import * as React from 'react';
import { Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import MedicalRecords from './MedicalRecords'

export default function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className='w-100 mt-10'>
                <Typography variant="h4" className='header' sx={{ marginRight: '30px'}}>
                    Dashboard
                </Typography>

                {/* <Typography variant="h4" gutterBottom className='header'>
                    <a href="/findDoctor">Search Doctors</a>
                </Typography> */}

                <MedicalRecords />
            </div>
        </div>

    );
}