import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import welcome from '../../src/assets/icons/welcome2.png';
import {  Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

export default function Welcome(props) {

    const itemData = [
        {
          img: welcome,
          title: 'Welcome',
        },
    ]
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box sx={{  height: '100vh', paddingTop: '25px', marginBottom: '20px' }} >
                        <ImageList sx={{ width: '800px', height: '350px', marginLeft: '240px' }}>
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
                        <Typography variant="h4" component="h3">
                            Welcome <p className='user'>{props.name}</p>
                        </Typography>
                        <Typography variant="h5" component="h3" sx={{ padding: '20px', width: '470px', marginLeft: '200px' }}>
                            {(localStorage.getItem("profile") === "patient" ? <>We will need some more information of your health profile</> : <>We will require some more details to get you registered to national health stack! <br /> <br /> Don't worry your Healthcare professional Id is safe with us. <br /><br /> </>)}
                        </Typography>
                        <Button variant="contained" color="primary" href="/basicDetails">
                            Let's Go
                        </Button>
                    </Box>
                </Container>
            </React.Fragment>

        </div>
    );
}
