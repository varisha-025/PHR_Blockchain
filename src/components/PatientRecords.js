import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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
    width: 160,
    editable: false,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 100,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 80,
    editable: false,
  }
];

const rows = [
    {
      id: 1,
      aadhar: '123456789012',
      patientName: 'John Doe',
      gender: 'Male',
      location: 'New York',
      age: 30,
    },
    {
      id: 2,
      aadhar: '234567890123',
      patientName: 'Jane Smith',
      gender: 'Female',
      location: 'Los Angeles',
      age: 25,
    },
    {
      id: 3,
      aadhar: '345678901234',
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
      aadhar: '901234567890',
      patientName: 'Maria Martinez',
      gender: 'Female',
      location: 'Dallas',
      age: 38,
    },
    {
      id: 10,
      aadhar: '012345678901',
      patientName: 'James White',
      gender: 'Male',
      location: 'Phoenix',
      age: 42,
    },
  ];

  

export default function DataGridDemo() {
  return (
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
  );
}