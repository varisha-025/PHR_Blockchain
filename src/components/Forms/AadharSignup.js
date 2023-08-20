

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect,  } from "react";

export default function AadharSignup() {

    const [aadhar, setAadhar] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.setItem('aadhar', aadhar)
       
      },[aadhar]);

    const changeValue = (value) => {
        if (value.length > 12) {
            setError('Aadhar number should not be greater than 12 digits');
            return;
        }
        else if (value.length < 12) {
            setError('Aadhar number should be 12 digits');
            return;
        }
        else if (value.length === 0) {
            setError('Aadhar number is required');
            return;
        }
        else{
            setError('Good to go!');
        }
        setAadhar(value);

    }

    return (

        <div className='box pt-24'>
            <Typography variant="h4" component="h2" className='header'>
                Aadhar Linking
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '80px', marginLeft: '500px', width: '400px' }}>
                <Typography variant="h6" component="h2" className='mt-14'>
                    Enter your Aadhar number (12 digits)
                </Typography>
                <TextField
                    label="Aadhar Number"
                    required
                    id="outlined-start-adornment"
                    sx={{ mt: '2rem', width: '32ch' }}
                    onChange={event => changeValue(event.target.value)}
                    helperText={error}
                />
            </Box>
            
            <Button variant="contained" color="primary" href="/verify/otp" sx={{ marginTop: '30px', marginLeft: '47px' }}>
                Next
            </Button>
        </div>
    );
}