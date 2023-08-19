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

                <Typography variant='h4' sx={{ fontWeight: 600}}>
                    Create your Healthcare Professional ID
                </Typography>
                <Typography variant='h5' className='mt-5 flex'>
                    The Healthcare Professional ID will allow healthcare professional to connect to India’s digital health ecosystem
                </Typography>

                <form onSubmit={handleSubmit} action='/'>
                    <div className="row  box9">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name-f" className='mt-4'>Registration Council</label>
                            <input type="text" className="form-control" name="fname" id="name-f" placeholder="Enter your first name." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name-l" className='mt-4'>Registration Number</label>
                            <input type="text" className="form-control" name="lname" id="name-l" placeholder="Enter your last name." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email." required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="profession">Profession</label>
                            <input type="text" className="form-control" name="profession" id="profession" />
                        </div>


                        <div className="col-sm-12">
                            <label htmlFor="chb" className="form-check-label"><input type="checkbox" className="form-check d-inline mt-3" id="chb" required /> &nbsp;I accept all terms and conditions.
                            </label>
                            <button className="btn btn-primary float-right mr-6">Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}




