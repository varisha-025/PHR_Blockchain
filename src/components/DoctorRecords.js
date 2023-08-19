import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'S.No', width: 90 },
  {
    field: 'specialty',
    headerName: 'Specialty',
    width: 130,
    editable: false,
  },
  {
    field: 'doctorName',
    headerName: 'Doctor Name',
    width: 150,
    editable: false,
  },
  {
    field: 'qualification',
    headerName: 'Qualification',
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
  },
  {
    field: 'experience',
    headerName: 'Experience (in yrs)',
    type: 'number',
    width: 140,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    specialty: 'Cardiology',
    doctorName: 'Dr. John Smith',
    qualification: 'MD, Cardiologist',
    location: 'New York',
    age: 40,
    experience: 15,
  },
  {
    id: 2,
    specialty: 'Dermatology',
    doctorName: 'Dr. Emily Johnson',
    qualification: 'MD, Dermatologist',
    location: 'Los Angeles',
    age: 35,
    experience: 10,
  },
  {
    id: 3,
    specialty: 'Orthopedics',
    doctorName: 'Dr. Michael Brown',
    qualification: 'MD, Orthopedic Surgeon',
    location: 'Chicago',
    age: 45,
    experience: 20,
  },
  {
    id: 4,
    specialty: 'Pediatrics',
    doctorName: 'Dr. Sarah Davis',
    qualification: 'MD, Pediatrician',
    location: 'Houston',
    age: 32,
    experience: 7,
  },
  {
    id: 5,
    specialty: 'Neurology',
    doctorName: 'Dr. Robert Wilson',
    qualification: 'MD, Neurologist',
    location: 'San Francisco',
    age: 50,
    experience: 25,
  },
  {
    id: 6,
    specialty: 'Gastroenterology',
    doctorName: 'Dr. Lisa Anderson',
    qualification: 'MD, Gastroenterologist',
    location: 'Miami',
    age: 38,
    experience: 12,
  },
  {
    id: 7,
    specialty: 'Ophthalmology',
    doctorName: 'Dr. David Lee',
    qualification: 'MD, Ophthalmologist',
    location: 'Seattle',
    age: 42,
    experience: 18,
  },
  {
    id: 8,
    specialty: 'Psychiatry',
    doctorName: 'Dr. Jennifer Martinez',
    qualification: 'MD, Psychiatrist',
    location: 'Boston',
    age: 39,
    experience: 14,
  },
  {
    id: 9,
    specialty: 'Obstetrics and Gynecology',
    doctorName: 'Dr. Maria Rodriguez',
    qualification: 'MD, OB/GYN',
    location: 'Dallas',
    age: 37,
    experience: 11,
  },
  {
    id: 10,
    specialty: 'Urology',
    doctorName: 'Dr. James White',
    qualification: 'MD, Urologist',
    location: 'Phoenix',
    age: 48,
    experience: 22,
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