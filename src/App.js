import './App.css';
import * as React from 'react'
import Home from './components/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorRecords from './components/DoctorRecords';
import UserProfile from './components/UserProfile';
import UserRegistrationForm from './components/Forms/UserRegistrationForm';
import MedicalRecordsForm from './components/Forms/MedicalRecordsForm';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile.js';
import OtpInput from './components/Forms/Otp'
import FindDoctor from './components/FindDoctor';
import FindPatient from './components/FindPatient';
import OrgRegister from './components/BasicDetails'
import HealthProffRegister from './components/HealthProffRegister'
import Hospitals from './components/HospitalsData'
import Decision from './components/Decision';
import Login from './components/Forms/LoginForm';
import AddMedicalRecordForm from './components/Forms/AddMedicalRecordForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/otp" element={<OtpInput />} />
        </Routes>
        <Routes>
          <Route path="/user_register" element={<UserRegistrationForm />} />
        </Routes>
        <Routes>
          <Route path="/addRecord" element={<AddMedicalRecordForm />} />
        </Routes>
        <Routes>
          <Route path="/welcome" element={<Welcome/>} />
        </Routes>
        <Routes>
          <Route path="/hospitals" element={<Hospitals/>} />
        </Routes>
        <Routes>
          <Route path="/medical" element={<MedicalRecordsForm />} />
        </Routes>
        <Routes>
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
        <Routes>
          <Route path="/findDoctor" element={<FindDoctor />} />
        </Routes>
        <Routes>
          <Route path="/basicDetails" element={<OrgRegister />} />
        </Routes>
        <Routes>
          <Route path="/decision" element={<Decision />} />
        </Routes>
        <Routes>
          <Route path="/healthProfRegister" element={<HealthProffRegister />} />
        </Routes>
        <Routes>
          <Route path="/findPatient" element={<FindPatient />} />
        </Routes>
        <Routes>
          <Route path="/choose" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/records" element={<DoctorRecords />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
