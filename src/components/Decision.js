

import * as React from 'react';
import Navbar from './Common/Navbar';
import { Typography } from '@mui/material';

export default function Decision() {


    const data = [
        {
            "name": "Vikram",
            "adhar_number": "1234121313341",
            "password": "abcdefgh",
            "phone": "9111426544",
            "email": "abcd@gmail.com",
            "profession": "doctor",
            "HPR_id": "2786382b-876e-427d-a25f-d13c82e8319b",
            "HFR_id": "",
            "requested_hfr_id": "",
            "is_admin": false
        },
        {
            "name": "Ayushi",
            "adhar_number": "930230293203",
            "password": "abcdefgh",
            "phone": "9111426544",
            "email": "abcd@gmail.com",
            "profession": "doctor",
            "HPR_id": "2786382b-876e-427d-a25f-d13c82e8319b",
            "HFR_id": "",
            "requested_hfr_id": "",
            "is_admin": false
        },
    ]

    return (
        <div>
            <Navbar />
            <div className='w-100 mt-10'>
                <div className='flex items-center justify-center flex-column pt-10'>
                    <Typography  variant='h5' className='header mb-5' sx={{ width: '430px'}} >
                        Choose Health Professionals for your Organisation
                    </Typography>
                    {data.map((item) => (
                        <div className='decision-box' key={item.HPR_id}>

                            <Typography variant='h6' sx={{ fontWeight: 500}} >Name: {item.name}</Typography>
                            {/* <br/> */}
                           
                            <Typography variant='h6' sx={{ fontWeight: 500}} >Profession: {item.profession}</Typography>
                        
                            <Typography variant='h6' sx={{ fontWeight: 500 }}>Phone: {item.phone}</Typography>

                            <button className="btn btn-primary float-center">Approve</button>

                            <button className="btn btn-danger float-center ml-4">Reject</button>
                        </div>
                    ))}


                </div>

            </div>

        </div>

    );
}