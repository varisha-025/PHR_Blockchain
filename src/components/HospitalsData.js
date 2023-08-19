import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'S.No', width: 100 },
  {
    field: 'hospitalName',
    headerName: 'Hospital Name',
    width: 130,
    editable: false,
  },
  {
    field: 'adminName',
    headerName: 'Owner Name',
    width: 150,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 200,
    editable: false,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 100,
    editable: false,
  },
  {
    field: 'establishmentYear',
    headerName: 'Establishment Year',
    type: 'number',
    width: 100,
    editable: false,
  }
];

const rows = [
  {
    id: 1,
    hospitalName: 'Apollo Hospital',
    adminName: 'Dr. Rajesh Sharma',
    address: '123 Main Street, New Delhi',
    establishmentYear: 1990,
    state: 'Jharkhand'
  },
  {
    id: 2,
    hospitalName: 'Fortis Healthcare',
    adminName: 'Dr. Nisha Patel',
    address: '456 Park Avenue, Mumbai',
    establishmentYear: 1985,
    state: 'Jharkhand'
  },
  {
    id: 3,
    hospitalName: 'AIIMS Hospital',
    adminName: 'Dr. Manoj Verma',
    address: '789 Central Road, Kolkata',
    establishmentYear: 1956,
    state: 'Jharkhand'
  },
  {
    id: 4,
    hospitalName: 'Columbia Asia Hospital',
    adminName: 'Dr. Sunita Reddy',
    address: '234 South Street, Bangalore',
    establishmentYear: 2000,
    state: 'Jharkhand'
  },
  {
    id: 5,
    hospitalName: 'Medanta - The Medicity',
    adminName: 'Dr. Vikram Singh',
    address: '567 North Avenue, Gurgaon',
    establishmentYear: 2009,
    state: 'Jharkhand'
  },
  {
    id: 6,
    hospitalName: 'Manipal Hospital',
    adminName: 'Dr. Deepa Shah',
    address: '890 East Road, Pune',
    establishmentYear: 1997,
    state: 'Jharkhand'
  },
  {
    id: 7,
    hospitalName: 'Max Healthcare',
    adminName: 'Dr. Anand Kapoor',
    address: '123 West Lane, Noida',
    establishmentYear: 2001,
    state: 'Jharkhand'
  },
  {
    id: 8,
    hospitalName: 'Artemis Hospital',
    adminName: 'Dr. Aparna Singh',
    address: '456 Outer Circle, Gurgaon',
    establishmentYear: 2007,
    state: 'Jharkhand'
  },
  {
    id: 9,
    hospitalName: 'Narayana Health',
    adminName: 'Dr. Rahul Sharma',
    address: '789 Inner Avenue, Bangalore',
    establishmentYear: 2000,
    state: 'Jharkhand'
  },
  {
    id: 10,
    hospitalName: 'KIMS Hospital',
    adminName: 'Dr. Shruti Das',
    address: '234 Main Road, Hyderabad',
    establishmentYear: 1988,
    state: 'Jharkhand'
  },
];



export default function Hospitals() {
  return (
    <div className='box pt-4'>
      <Typography variant='h4' sx={{ marginTop: '60px' }}>
        Find Hospitals
      </Typography>
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