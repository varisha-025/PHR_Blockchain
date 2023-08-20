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
    specialty: 'Oncologist',
    doctorName: 'Vikram Shah',
    qualification: 'MD, Oncology',
    location: 'Jabalpur, India',
    age: 55,
    experience: 20,
  },
  {
    id: 2,
    specialty: 'Dermatology',
    doctorName: 'Snehalatha Alapati',
    qualification: 'MD, Dermatology',
    location: 'Bengaluru, India',
    age: 40,
    experience: 10,
  }
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