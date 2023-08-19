import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Typography } from "@mui/material";
import meditation from '../../src/assets/icons/meditation.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Dashboard() {

    const itemData = [
        {
            img: meditation,
            title: 'Mediation',
        },
    ]

    return (
        <div>
            <div className='flex align-center justify-center pt-20'>

                <div className='choose-box'>
                <ImageList sx={{ width: '500px', height: '350px', marginLeft: '30px', marginTop: '70px' }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>


                <FormControl sx={{ marginTop: '100px' }}>
                    <Typography variant="h5" gutterBottom>
                        Choose your profile:
                    </Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Patient"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                        <FormControlLabel value="Hospital" control={<Radio />} label="Hospital" />
                        <FormControlLabel value="Clinic" control={<Radio />} label="Clinic" />
                        <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
                    </RadioGroup>

                    <Button variant="contained" color="primary" href="/user_register" sx={{marginTop: '20px'}}>
                        Next
                    </Button>

                </FormControl>
                </div>
                
            </div>




        </div>

    );
}