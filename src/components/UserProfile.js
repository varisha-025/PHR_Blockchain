
import CustomAvatar from "./Common/Avatar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";


export default function UserProfile() {
    let [medicalData, setMedicalData] = useState({});
    let [personalDetails, setPersonalDetails] = useState({});
    let [record, setRecord] = useState([]);
    let [profile, setProfile] = useState("patient");
    const {id} = useParams();

    let handleClick = () => {

    }

    const columns = [
        {
          field: 'doctor_name',
          headerName: 'Doctor Name',
          width: 130,
          editable: false,
        },
        {
          field: 'illnes',
          headerName: 'Illnes',
          width: 150,
          editable: false,
        },
        {
          field: 'organisation_name',
          headerName: 'Organisation name',
          width: 200,
          editable: false,
        },
        {
          field: 'date_of_diagnose',
          headerName: 'Date of Diagnose',
          width: 140,
          editable: false,
        },
        {
          field: "health record document",
          width: 250,
          renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                href={cellValues.row.health_record_document}
              >
                Download document
              </Button>
            );
          }
        },
      ];

    useEffect(() => {
        let prof = localStorage.getItem("profile");
        setProfile(prof);
        axios.get(`http://localhost:3001/patient/record?adhar_number=${id}`)
        .then(({data}) => {
            console.log(data);
            let userDetails = data.patient_details;
            setMedicalData({
                height: userDetails.height,
                weight: userDetails.weight,
                disease: userDetails.disease,
                allergies: userDetails.allergies,
                bloodGroup: userDetails.bloodGroup,
            })
            setPersonalDetails({
                name: userDetails.patientName,
                email: userDetails.email,
                address: userDetails.location,
                dob: userDetails.dob,
                gender: userDetails.gender,
                state: userDetails.state,
                password: userDetails.password,
                phone: userDetails.phone
            })
            setRecord(data.record);
        })
    }, [])
    

    return (
        <>
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
        <div>
        <Box sx={{ textAlign: 'center', height: 420, width: '90%', marginTop: "-250px", marginLeft: '10px' }}>
          <DataGrid
            rows={record}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
        </div>
        </>
    );
}