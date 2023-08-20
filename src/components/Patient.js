import React, { useState, useEffect } from 'react';
import Navbar from './Common/Navbar';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function FindPatient() {

    const navigate = useNavigate();

  const handleClick = (event, cellValues) => {
    navigate(`/profile/${cellValues.row.aadhar}`)
  };

  function calculate_age(dob) {
        var diff_ms = Date.now() - new Date(dob);
        var age_dt = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

  useEffect(() => {
    axios.get("http://localhost:3001/patients").then(({data}) => {
        console.log(data);
        data = data.map((ele, idx) => {
            ele.age = calculate_age(ele.dob);
            ele.id = idx+1;
            ele.aadhar = ele.adhar_number;
            return ele;
        })
        setRows(data);
    })
  }, [])
  

  const columns = [
    { field: 'id', headerName: 'S.No', width: 90 },
    {
      field: 'aadhar',
      headerName: 'Aadhar',
      width: 130,
      editable: false,
    },
    {
      field: 'patientName',
      headerName: 'Patient Name',
      width: 150,
      editable: false,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 130,
      editable: false,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 120,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 70,
      editable: false,
    },
    {
      field: "View profile",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
            sx={{ marginLeft: '25px' }}
          >
            View
          </Button>
        );
      }
    },
  ];

  const [rows, setRows] = useState([])

  async function searchPatient(event) {
    const inputAadharNumber = event.target.value.trim();
    console.log(inputAadharNumber);
    if (inputAadharNumber === "") {
        axios.get("http://localhost:3001/patients").then(({data}) => {
            console.log(data);
            data = data.map((ele, idx) => {
                ele.age = calculate_age(ele.dob);
                ele.id = idx+1;
                ele.aadhar = ele.adhar_number;
                return ele;
            })
            setRows(data);
        })
        return;
    }

    let {data} = await axios.get(`http://localhost:3001/patient?adhar_number=${inputAadharNumber}`);
    data = data.map((ele, idx) => {
            ele.age = calculate_age(ele.dob);
            ele.id = idx+1;
            ele.aadhar = ele.adhar_number;
            return ele;
        })
    setRows(data || []);

  };

  return (
    <div >
      <Typography variant='h4' sx={{ marginTop: '60px' }} className='header'>
        Search Patient by Aadhar Number
      </Typography>

      <TextField
        placeholder="Search patients by aadhar"
        onChange={searchPatient}
        sx={{ pt:4, width: '20%'}}

      />
      <SearchIcon sx={{ pt:6 }}/>


      <div className='flex-box'>
        <Box sx={{ textAlign: 'center', height: 420, width: '70%', marginTop: '30px', marginLeft: '10px' }}>
          <DataGrid
            rows={rows}
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
    </div>
  );
}