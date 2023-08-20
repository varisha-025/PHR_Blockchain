import * as React from 'react';
import Navbar from './Common/Navbar';
import { Typography } from '@mui/material';
import {useEffect, useState} from "react";
import axios from "axios";

export default function Decision() {

    let [data, setData] = useState([]);
    
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(`http://localhost:3001/link-request?HFR_id=${user.HFR_id}`);
        axios.get(`http://localhost:3001/link-request?HFR_id=${user.HFR_id}`).then(({data}) => {
            setData(data);
        })
    }, []);

    async function handleApprove(item) {
        console.log(item);
        let {data} = await axios.post("http://localhost:3001/approve-link-request", {
            request_details: {
                id: item.id
            }
        });
        setData(data);
    }

    const dat = [
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
                    <Typography  variant='h5' className='mb-5' sx={{ fontWeight: 600, width: '430px'}}>
                        Choose Health Professionals for your Organisation
                    </Typography>
                    {data.map((item,ind) => (
                        <div className='decision-box' key={ind}>

                            <Typography variant='h6' sx={{ fontWeight: 500}} >Name: {item.patientName}</Typography>
                            {/* <br/> */}
                           
                            <Typography variant='h6' sx={{ fontWeight: 500}} >Profession: {item.profession}</Typography>
                        
                            <Typography variant='h6' sx={{ fontWeight: 500 }}>Phone: {item.phone}</Typography>

                            <button onClick={() => handleApprove(item)} className="btn btn-primary float-center">Approve</button>

                            <button className="btn btn-danger float-center ml-4">Reject</button>
                        </div>
                    ))}


                </div>

            </div>

        </div>

    );
}