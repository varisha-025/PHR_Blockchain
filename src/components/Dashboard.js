
import * as React from 'react';
import { Button, Typography } from "@mui/material";
import Navbar from './Common/Navbar';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import FindPatient from './Patient';
import Hospitals from './HospitalsData';
import UserProfile from './UserProfile';

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
        <div className='w-100'>
            <Navbar />
            <div className=''>
                {
                    profile === "Patient" ? 
                    <>
                        <UserProfile />
                    </> :
                    <>
                        {userDetails && userDetails.HFR_id === "" ? <Hospitals /> : <FindPatient />}
                    </>
                }
            </div>
        </div>
    );
}