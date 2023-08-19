import { Typography } from '@mui/material';
import * as React from 'react';

export default function OrgRegister() {

    const [auth, setAuth] = React.useState(true);


    React.useEffect(() => {
        if (localStorage.getItem('user') === null) {
            setAuth = false;
        }

    }, [])

    function handleSubmit(data) {
        console.log(data)
    }

    return (
        <div>
            <div className="box pt-10">

                <Typography variant='h4' sx={{ fontWeight: 600 }}>
                    Create your Healthcare Professional ID
                </Typography>
                <Typography variant='h5' className='mt-5 flex2'>
                    The Healthcare Professional ID will allow healthcare professional to connect to India’s digital health ecosystem
                </Typography>

                <form onSubmit={handleSubmit} action='/healthProffRegister'>
                    <div className="row  box9">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name" className='mt-4'>Full Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your full name." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="phone" className='mt-4'>Phone Number</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Enter your phone number" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="profession">Profession</label>
                            <select name="profession" className="form-control" id="profession">
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                            </select>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="medicine">System of Medicine</label>
                            <select name="medicine" className="form-control" id="medicine">
                                <option value="doctor">Modern Medicine</option>
                                <option value="doctor">Homeopathy</option>
                                <option value="doctor">Unani</option>
                                <option value="nurse">Ayurveda</option>
                                <option value="nurse">Dentistry</option>
                               
                            </select>
                        </div>

                        <div className="col-sm-12">
                            <button className="btn btn-primary float-center mb-4">Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}




