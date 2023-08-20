import {useEffect, useState} from "react";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


let Login = () => {
    const [password, setPassword] = useState('varru1029')
    const [profile, setProfile] = useState('Patient')
    const [aadhar, setAadhar] = useState('993123098489')

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()
        localStorage.setItem("profile", profile)
        if (profile === "Patient") {
            let {data} = await axios.post("http://localhost:3001/login-patient", {
                login_details: {
                    adhar_number: aadhar,
                    password: password
                }
            });
            localStorage.setItem("user", JSON.stringify(data));
        } else {
            let {data} = await axios.post("http://localhost:3001/login/HPR", {
                login: {
                    adhar_number: aadhar,
                    password: password
                }
            });
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("HPR_details", JSON.stringify(data));
        }
        navigate("/dashboard");
    }
    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ paddingTop: '60px' }} className='header'>
                Login
            </Typography>
            <div className="box pt-10">
                <form method="POST">
                    <div className="login-box">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="aadhar">Aadhar Number</label>
                            <input type="text" className="form-control" name="aadhar" id="aadhar" placeholder="Enter your aadhar number" required onChange={event => {
                                setAadhar(event.target.value)
                            }} />
                        </div>

                        <div className="col-sm-6 form-group mt-3">
                            <label htmlFor="aadhar">Profile</label>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Patient"
                                name="radio-buttons-group"
                                onChange={event => {
                                    setProfile(event.target.value)
                                }}
                                sx={{ marginLeft: '120px', marginTop: '15px' }}
                            >
                                <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                                <FormControlLabel value="HealthProfessional" control={<Radio />} label="Health Professional" />
                            </RadioGroup>
                        </div>

                        <div className="col-sm-6 form-group mt-3">
                            <label htmlFor="password" >Password</label>
                            <input type="Password" name="password" className="form-control" id="pass" placeholder="Enter your password." required onChange={event => {
                                setPassword(event.target.value)
                            }} />
                        </div>
                        <div className="col-sm-12">
                            <button className="btn btn-primary float-center pr-6 pl-6" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;