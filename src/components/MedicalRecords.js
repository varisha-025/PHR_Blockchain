
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

export default function UserProfile() {

    const user = localStorage.getItem('user');
    const profile = localStorage.getItem('profile');
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }));

    return (
        <div className='box-new pt-10'>

            {/* <Box className="side-box">

                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2, fontWeight: '600' }} variant="h6" component="div">
                        Medical Documents
                    </Typography>
                    <Demo>
                        <List dense={dense} >
                            {generate(
                                <ListItem sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px', boxShadow: 1 }}>
                                    <ListItemText
                                        primary="Document Name"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <SaveAltRoundedIcon />
                                    <RemoveRedEyeRoundedIcon sx={{ marginLeft: '10px'}}/>
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Box> */}

            <div className='profile-box'>
                <div className="card">
                    <div className="card-body">
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">Personal Details</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="fullName">Name</label>
                                    <input type="text" className="form-control" id="fullName" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="eMail">Email</label>
                                    <input type="email" className="form-control" id="eMail" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="website">Address</label>
                                    <input type="url" className="form-control" id="website" />
                                </div>
                            </div>
                        </div>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">Medical Details</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="Street">Height</label>
                                    <input type="name" className="form-control" id="Street" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="ciTy">Weight</label>
                                    <input type="name" className="form-control" id="ciTy" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="sTate">Chronic Illness</label>
                                    <input type="text" className="form-control" id="sTate" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="zIp">Allergies</label>
                                    <input type="text" className="form-control" id="zIp" />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div >
    );
}