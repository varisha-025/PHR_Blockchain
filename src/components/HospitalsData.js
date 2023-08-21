import * as React from 'react';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Navbar from './Common/Navbar';

export default function Hospitals() {
  let [hospital, setHospital] = useState([]);
  let [selectedHosptial, setSelectedHospital] = useState("");
  let [hpr_profile, setHpr_profile] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    let {data} = await axios.post("http://localhost:3001/link-request", {
      request_details: {
        "HPR_id": hpr_profile.HPR_id,
        "HFR_id": selectedHosptial
      }
    })
    setHpr_profile(data);
    localStorage.setItem("HPR_details", JSON.stringify(data));
    localStorage.setItem("user", JSON.stringify(data));
  }

  useEffect(() => {
    let HPR_profile = JSON.parse(localStorage.getItem("HPR_details"));
    console.log(HPR_profile);
    setHpr_profile(HPR_profile);
    if (HPR_profile.requested_hfr_id !== "") {
      setSelectedHospital(HPR_profile.requested_hfr_id);
    }
    axios.get("http://localhost:3001/hospitals").then(({data}) => {
      setHospital(data.hospitals);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className='box pt-4'>
      <Typography variant='h4' sx={{ marginTop: '60px' }}>
        <b>Choose Hospital</b> <br />
      </Typography>
      <Typography variant='h5' sx={{ marginLeft: '420px', marginTop: '60px', marginBottom: '60px', width: '490px' }}>
        {(hpr_profile.requested_hfr_id === "" ? <>Hey {hpr_profile.name}, kindly mention the health care organisation you want to be associated with.</> : <>Looks like your profile is under <b>review</b>, kindly wait or update the health care organisation to approve you request.</>)}
      </Typography>
      <div className='flex-box'>
        <FormControl className='col-4'>
        <InputLabel id="demo-simple-select-label">Health Care Org.</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedHosptial}
          label="health care org"
          onChange={(event) => {setSelectedHospital(event.target.value)}}
        >
          {hospital.map(ele => {
            return (<MenuItem value={ele.HFR_id}>{ele.name}</MenuItem>);
          })}
        </Select>
        {
          hpr_profile.requested_hfr_id === "" ? 
          <>
            <Button variant="contained" color="primary" disabled={selectedHosptial === ""} sx={{ marginTop: '35px', marginLeft: '170px', width: '20%' }} onClick={handleSubmit}>
                Submit
            </Button>
          </> : 
          <>
            <Button variant="contained" color="primary" disabled={selectedHosptial === hpr_profile.requested_hfr_id} sx={{ marginTop: '35px', marginLeft: '170px', width: '20%'  }} onClick={handleSubmit}>
                Update
            </Button>
          </>
        }
      </FormControl>
      </div>
    </div>
    </>
  );
}