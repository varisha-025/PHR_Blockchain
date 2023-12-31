import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


class Otpinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(value1, event) {

        this.setState({ [value1]: event.target.value });
    }

    handleSubmit(event) {

        console.log(this.state);
        event.preventDefault();

        if (localStorage.getItem('profile') === 'patient'){
            window.location.href = 'http://localhost:3000/personalDetails';
        }
        else {
            window.location.href = 'http://localhost:3000/hospitals';
        }
    }

    inputfocus = (elmnt) => {
    
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            console.log("next");

            const next = elmnt.target.tabIndex;
            if (next < 6) {
                elmnt.target.form.elements[next].focus()
            }
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='box padding'>
                    <Typography variant='h5'>
                        Enter the OTP on your registered mobile number:
                    </Typography>
                    <div className="otpContainer pt-5">

                        <input
                            name="otp1"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp1}
                            onChange={e => this.handleChange("otp1", e)}
                            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp2"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp2}
                            onChange={e => this.handleChange("otp2", e)}
                            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp3"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp3}
                            onChange={e => this.handleChange("otp3", e)}
                            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp4"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp4}
                            onChange={e => this.handleChange("otp4", e)}
                            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                        />
                        <input
                            name="otp5"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp5}
                            onChange={e => this.handleChange("otp5", e)}
                            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                        />
                        <input
                            name="otp6"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp6}
                            onChange={e => this.handleChange("otp6", e)}
                            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                        />

                    </div>
                    <Button variant="contained" sx={{ marginTop: '40px'}} type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}


export default Otpinput;