
import * as React from 'react';
import {  Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import MedicalRecords from './MedicalRecords'

export default function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className='w-100 mt-10'>
                <Typography variant="h4" className='header'>
                    Dashboard
                </Typography>

                {/* <Typography variant="h4" gutterBottom>
                    <a href="/findDoctor">Find Doctor anywhere in the world</a>
                </Typography> */}
              

                <MedicalRecords />

            </div>

        </div>

    );
}