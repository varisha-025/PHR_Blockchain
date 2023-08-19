import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';




export default function Footer() {

    return (
        <div>
            <footer className="footer-main bg-dark ">
                <div className="container">
                    <div className="row address-main">
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                
                                {/* <div className="add-content">
                                    <h5>Address</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut veniam </p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                
                                {/* <div className="add-content">
                                    <h5>Phone</h5>
                                    <p>  +(91) 262633000 <br />
                                        +(91) 262633000  </p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                
                                {/* <div className="add-content">
                                    <h5>Email</h5>
                                    <p> <a href="mailto:" >collab@codewithfaraz.com</a> </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>



                <footer className="bg-dark text-center text-white">


                <Divider sx={{ backgroundColor: '#ffffff'}}/>



                    <div className="text-center p-3">
                        Health-e © 2023 All Rights Reserved.
                    </div>

                </footer>
            </footer>

        </div>
    )
}
