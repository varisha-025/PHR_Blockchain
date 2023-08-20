
import * as React from 'react';
import { Button, Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import FindPatient from './Patient';
import Hospitals from './HospitalsData';

export default function Dashboard() {

    let [profile, setProfile] = useState();
    let [userDetails, setUserDetails] = useState();

    useEffect(() => {
         let prof = localStorage.getItem("profile");
         let user = JSON.parse(localStorage.getItem("user"));
         console.log(user);
         setUserDetails(user);
         setProfile(prof);
    }, []);

    return (
        <div>
            <Navbar />
            <div className='box mt-10'>
                {
                    profile === "patient" ? 
                    <>
                        
                    </> :
                    <>
                        {userDetails && userDetails.HFR_id === "" ? <Hospitals /> : <FindPatient />}
                    </>
                }
            </div>
        </div>
    );
}