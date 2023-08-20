import './App.css';
import * as React from 'react'
import Home from './components/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorRecords from './components/DoctorRecords';
import UserProfile from './components/MedicalRecords';
import AadharSignup from './components/Forms/AadharSignup';
import MedicalRecordsForm from './components/Forms/MedicalRecordsForm';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/ChooseProfile.js';
import OtpInput from './components/Forms/VerifyOtp'
import FindDoctor from './components/FindDoctor';
import FindPatient from './components/FindPatient';
import OrgRegister from './components/Forms/PersonalDetailsForm'
import HealthProffRegister from './components/Forms/HealthProffRegisterForm'
import Hospitals from './components/FindHospital'
import Decision from './components/Decision';
import AddMedicalRecordForm from './components/Forms/AddMedicalRecordForm';
import LoginForm from './components/Forms/LoginForm';

function App() {

  const user = localStorage.getItem('user');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/verify/otp" element={<OtpInput />} />
        </Routes>
        <Routes>
          <Route path="/aadhar" element={<AadharSignup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Routes>
          <Route path="/welcome" element={<Welcome name={user} />} />
        </Routes>
        <Routes>
          <Route path="/hospitals" element={<Hospitals name={user} />} />
        </Routes>
        <Routes>
          <Route path="/medical" element={<MedicalRecordsForm />} />
        </Routes>
        <Routes>
          <Route path="/user/profile" element={<UserProfile />} />
        </Routes>
        <Routes>
          <Route path="/search/doctor" element={<FindDoctor />} />
        </Routes>
        <Routes>
          <Route path="/search/patient" element={<FindPatient />} />
        </Routes>
        <Routes>
          <Route path="/personalDetails" element={<OrgRegister />} />
        </Routes>
        <Routes>
          <Route path="/decision" element={<Decision />} />
        </Routes>
        <Routes>
          <Route path="/signup/hpr" element={<HealthProffRegister />} />
        </Routes>
        <Routes>
          <Route path="/choose/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/view/records" element={<DoctorRecords />} />
        </Routes>
        <Routes>
          <Route path="/add/record" element={<AddMedicalRecordForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
