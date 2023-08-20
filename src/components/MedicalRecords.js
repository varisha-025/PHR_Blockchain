
import * as React from 'react';
import { Typography } from "@mui/material";

export default function UserProfile() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    let medicalData = {
        height: userDetails.medicalData.height,
        weight: userDetails.medicalData.weight,
        disease: userDetails.medicalData.disease,
        allergies: userDetails.medicalData.allergies,
        bloodGroup: userDetails.medicalData.bloodGroup,
    }

    let personalDetails = {
        name: userDetails.basicDetails.name,
        email: userDetails.basicDetails.email,
        address: userDetails.basicDetails.address,
        dob: userDetails.basicDetails.dob,
        gender: userDetails.basicDetails.gender,
        state: userDetails.basicDetails.state,
        password: userDetails.basicDetails.password,
        phone: userDetails.basicDetails.phone,
    }
    

    return (
        <div className='box-new pt-10'>
            <div className='profile-box'>
                <div className="card">
                    <div className="card-body">
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Typography variant="h6" sx={{marginBottom: '40px', fontWeight: 500}}>Personal Details</Typography>
                               
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Name</Typography>
                                    <h1>{personalDetails.name}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Email</Typography>
                                    <h1>{personalDetails.email}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Phone</Typography>
                                    <h1>{personalDetails.phone}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Address</Typography>
                                    <h1>{personalDetails.address}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Typography variant="h6" sx={{ marginTop: '20px', marginBottom: '40px', fontWeight: 500}}>Medical Details</Typography>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Height</Typography>
                                    <h1>{medicalData.height}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Weight</Typography>
                                    <h1>{medicalData.weight}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" >Chronic Illness</Typography>
                                    <h1>{medicalData.disease}</h1>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5">Allergies</Typography>
                                    <h1>{medicalData.allergies}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}