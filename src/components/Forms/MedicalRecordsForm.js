import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MultipleSelect from '../Common/MultipleSelect';
import BasicSelect from '../Common/Select';
import FormHelperText from '@mui/material/FormHelperText';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import yoga from '../../assets/icons/yoga.png';
import { useNavigate } from 'react-router-dom';

export default function MedicalRecordsForm() {

    const [errorHeight, setErrorHeight] = React.useState('');
    const [errorWeight, setErrorWeight] = React.useState('');

    const [height, setHeight] = React.useState('5');
    const [weight, setWeight] = React.useState(55);
    const [disease, setDisease] = React.useState('');
    const [allergiesValue, setAllergies] = React.useState('');
    const [bloodGroupValue, setBloodGroup] = React.useState('');

    const [btnDisabled, setBtnDisabled] = React.useState(true)

    const itemData = [
        {
            img: yoga,
            title: 'yoga',
        },
    ]

    const navigate = useNavigate();

    function handleSubmit(event) {

        event.preventDefault();

        let medicalData = {
            height: height,
            weight: weight,
            disease: disease,
            allergies: allergiesValue,
            bloodGroup: bloodGroupValue,
        }
        let basicDetails = JSON.parse(localStorage.getItem('basicDetails'))

        let finalDetails = {
            basicDetails,
            medicalData,
            aadhar: localStorage.getItem('aadhar'),
        };

        localStorage.setItem('userDetails', JSON.stringify(finalDetails))
        // navigate('/dashboard')
    }

    const allergies = [
        'None',
        'Milk',
        'Dust',
        'Peanuts',
        'Fish',
        'Eggs',
        'Shellfish',
        'Pollen',
        'Latex',
        'Certain medication'
    ];
    const chronicIllness = [
        'PCOD',
        'IBS',
        'Diabetes',
        'Hypertension',
        'Asthma',
        'Mood Disorders',
        'Arthritis',
        'Cancer',
        'Heart Disease',
        'Kidney Disease',
        'Cirrhosis',
        'Alzheimer’s Disease',
    ];

    const bloodGroup = [
        'O+',
        'A+',
        'B+',
        'AB+',
        'O-',
        'A-',
        'B-',
        'AB-',
    ];


    return (

        <div>
            <Typography variant="h4" component="h2" sx={{ paddingTop: '60px' }}>
                Medical Records Form
            </Typography>
            <div className='box flex items-center justify-center pt-10'>
                <div className='choose-box'>
                    <ImageList sx={{ width: '600px', height: '350px', marginLeft: '30px', marginTop: '70px' }}>
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
                    <form className='box'>
                        <TextField
                            label="Height"
                            required
                            type="number"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            onChange={event => {
                                setHeight(event.target.value)
                                setBtnDisabled(!event.target.value)
                            }

                            }
                            helperText={errorHeight}
                        />
                        <FormHelperText id="my-helper-text" sx={{ marginLeft: '13px' }}>in cms</FormHelperText>

                        <TextField
                            id="outlined-number"
                            label="Weight"
                            type="number"
                            sx={{ m: 1, width: '25ch' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={event => {
                                setWeight(event.target.value)

                            }}
                            helperText={errorWeight}
                        />
                        <FormHelperText id="my-helper-text" sx={{ marginLeft: '13px' }}>in kgs</FormHelperText>

                        <MultipleSelect data={allergies} label="Allergies" sx={{ m: 1, width: '25ch' }} onChange={event => {
                            setAllergies(event.target.value)

                        }} />
                        <MultipleSelect data={chronicIllness} label="Chronic Illness" sx={{ m: 1, width: '25ch' }} onChange={event => {
                            setDisease(event.target.value)

                        }} />
                        <BasicSelect data={bloodGroup} label="Blood Group" sx={{ m: 1, width: '25ch' }} onChange={event => {
                            setBloodGroup(event.target.value)

                        }} />
                        <Button variant="contained" color="primary" disabled={btnDisabled} href="/dashboard" sx={{ marginTop: '35px' }} onClick={handleSubmit}>
                            Submit
                        </Button>

                    </form>
                </div>


            </div >
        </div>
    );
}