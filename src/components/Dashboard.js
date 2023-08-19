
import * as React from 'react';
import { Button, Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className='box mt-10'>
                <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography>

                <Typography variant="h4" gutterBottom>
                   <a href="/findDoctor">Find Doctor anywhere in the world</a>
                </Typography>
                <Typography variant="h4" gutterBottom>
                <a href="/profile">Medical History</a>
                </Typography>
                
            </div>

        </div>

    );
}