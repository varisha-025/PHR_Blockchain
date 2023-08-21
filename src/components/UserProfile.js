
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function UserProfile() {
    let [medicalData, setMedicalData] = useState({});
    let [personalDetails, setPersonalDetails] = useState({});
    let [record, setRecord] = useState([]);
    let [profile, setProfile] = useState("patient");
    let {id} = useParams();

    const columns = [
        {
          field: 'doctor_name',
          headerName: 'Doctor Name',
          width: 130,
          editable: false,
        },
        {
          field: 'illnes',
          headerName: 'Illness',
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
          headerName: 'Date of Diagnosis',
          width: 140,
          editable: false,
        },
        {
          field: "Health Record document",
          width: 250,
          renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                href="https://s3-grid.s3.ap-south-1.amazonaws.com/01c4fb1aa2b022966a369f6fa9bad35b"
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
        if (!id) {
            let userDetails = JSON.parse(localStorage.getItem("user"));
            id = userDetails.patient_details.adhar_number;
        }
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
        <div className='box-new pt-7'>
            <div className='profile-box'>
                    <div className="card-body pr-14">
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <Typography variant="h5" sx={{ marginBottom: '40px', marginTop: '15px', fontWeight: 600 }}>Personal Details</Typography>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', fontWeight: '600' }}>Name</Typography>
                                    <Typography variant="h6">{personalDetails.name}</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', fontWeight: '600' }}>Email</Typography>
                                    <Typography variant="h6">{personalDetails.email}</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', marginTop: '25px', fontWeight: '600' }}>Phone</Typography>
                                    <Typography variant="h6">{personalDetails.phone}</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Address</Typography>
                                    <Typography variant="h6">{personalDetails.address}</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <Typography variant="h5" sx={{ marginTop: '30px', marginBottom: '40px', fontWeight: 600 }}>Medical Details</Typography>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', marginTop: '10px' , fontWeight: '600'}}>Height</Typography>

                                    <Typography variant="h6">{medicalData.height} cms</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', marginTop: '10px' , fontWeight: '600'}}>Weight</Typography>
                                    <Typography variant="h6">{medicalData.weight} kgs</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', marginTop: '10px' , fontWeight: '600'}} >Chronic Illness</Typography>
                                    <Typography variant="h6">IBS, Diabetes</Typography>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <Typography variant="h5" sx={{ marginBottom: '15px', marginTop: '10px' , fontWeight: '600'}}>Allergies</Typography>
                                    <Typography variant="h6">None</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div >
        <div>
        <Typography variant="h5" sx={{ marginBottom: '10px', marginTop: '15px', fontWeight: 600, textAlign: 'center' }}> Medical Records</Typography>
        {
          profile !== "Patient" &&  <Typography variant="h5" sx={{ marginBottom: '-100px', marginTop: '10px', fontWeight: 600, textAlign: 'center' }}>Add Records <a href="/addRecord"><ControlPointIcon /></a></Typography>
         
        }
        <Box sx={{ textAlign: 'center', height: 420, width: '70%', marginTop: "150px", marginLeft: '190px', paddingBottom: '50px' }}>
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