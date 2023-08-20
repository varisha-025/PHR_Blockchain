
import React, { useState } from 'react';
import Navbar from './Common/Navbar';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FindDoctor() {

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };
  

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

  const initialData = [
    {
      id: 1,
      aadhar: '989012345678',
      patientName: 'John Doe',
      gender: 'Male',
      location: 'New York',
      age: 30,
    },
    {
      id: 2,
      aadhar: '889017655678',
      patientName: 'Jane Smith',
      gender: 'Female',
      location: 'Los Angeles',
      age: 25,
    },
    {
      id: 3,
      aadhar: '893483493489',
      patientName: 'Michael Johnson',
      gender: 'Male',
      location: 'Chicago',
      age: 40,
    },
    {
      id: 4,
      aadhar: '456789012345',
      patientName: 'Emily Brown',
      gender: 'Female',
      location: 'Houston',
      age: 28,
    },
    {
      id: 5,
      aadhar: '567890123456',
      patientName: 'Robert Davis',
      gender: 'Male',
      location: 'San Francisco',
      age: 50,
    },
    {
      id: 6,
      aadhar: '678901234567',
      patientName: 'Lisa Wilson',
      gender: 'Female',
      location: 'Miami',
      age: 35,
    },
    {
      id: 7,
      aadhar: '789012345678',
      patientName: 'David Anderson',
      gender: 'Male',
      location: 'Seattle',
      age: 45,
    },
    {
      id: 8,
      aadhar: '890123456789',
      patientName: 'Jennifer Lee',
      gender: 'Female',
      location: 'Boston',
      age: 32,
    },
    {
      id: 9,
      aadhar: '991234567890',
      patientName: 'Maria Martinez',
      gender: 'Female',
      location: 'Dallas',
      age: 38,
    },
    {
      id: 10,
      aadhar: '990329392324',
      patientName: 'James White',
      gender: 'Male',
      location: 'Phoenix',
      age: 42,
    },
  ];

  const [rows, setRows] = useState(initialData)

  function searchPatient(event) {
    const inputAadharNumber = event.target.value.trim();

    const filteredRows = initialData.filter(row =>
      row.aadhar.includes(inputAadharNumber)
    );
  
    setRows(filteredRows);

  };

  return (
    <div >
      <Navbar />
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
