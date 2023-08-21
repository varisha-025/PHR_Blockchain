import { Typography } from '@mui/material';
import * as React from 'react';

export default function AddMedicalRecordForm() {


    function handleSubmit(data) {
        console.log(data)
    }

    return (
        <div>
            <div className="box pt-10">

                <Typography variant='h4' sx={{ fontWeight: 600 }} >
                    Add Medical Record
                </Typography>

                <form onSubmit={handleSubmit} action='/profile'>
                    <div className="row box9">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="doc_name" className='mt-14'>Doctor Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter the doctor name" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="illness" className='mt-14'>Illness</label>
                            <input type="text" className="form-control" name="illness" id="illness" placeholder="Enter the name of illness" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="org_name">Organisation Name</label>
                            <input type="text" className="form-control" name="org_name" id="org_name" placeholder="Enter the name of organisation." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="date">Date of Diagnosis</label>
                            <input type="date" className="form-control" name="date" id="date" placeholder="Enter your date" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="date">Upload Health Document</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="col-sm-12">
                            <a href='/profile'><button className="btn btn-primary float-center mb-4">Add Record</button></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}