

import * as React from 'react';
import Navbar from './Common/Navbar';

export default function Decision() {


    const data = [
        {
            "name": "Vikram",
            "adhar_number": "1234121313341",
            "password": "abcdefgh",
            "phone": "9111426544",
            "email": "abcd@gmail.com",
            "profession": "doctor",
            "HPR_id": "2786382b-876e-427d-a25f-d13c82e8319b",
            "HFR_id": "",
            "requested_hfr_id": "",
            "is_admin": false
        },
        {
            "name": "Ayushi",
            "adhar_number": "930230293203",
            "password": "abcdefgh",
            "phone": "9111426544",
            "email": "abcd@gmail.com",
            "profession": "doctor",
            "HPR_id": "2786382b-876e-427d-a25f-d13c82e8319b",
            "HFR_id": "",
            "requested_hfr_id": "",
            "is_admin": false
        },
    ]

    return (
        <div>
            <Navbar />
            <div className='box mt-10'>
                <div className='flex align-center justify-center flex-column pt-20'>
                    {data.map((item) => (
                        <div className='decision-box'>

                            <h1>Name - {item.name}</h1>
                            <br/>
                            <h1>Aadhar number - {item.adhar_number}</h1>

                            <button className="btn btn-primary float-center">Approve</button>

                            <button className="btn btn-danger float-center ml-4">Reject</button>
                        </div>
                    ))}


                </div>

            </div>

        </div>

    );
}