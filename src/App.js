import './App.css';
import Home from './components/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorRecords from './components/DoctorRecords';
import UserProfile from './components/UserProfile';
import UserRegistrationForm from './components/Forms/UserRegistrationForm';
import MedicalRecordsForm from './components/Forms/MedicalRecordsForm';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile.js';
import * as React from 'react'
import OtpInput from './components/Forms/Otp'
import FindDoctor from './components/FindDoctor';
import FindPatient from './components/FindPatient';
import MedicalProfile from './components/MedicalProfile'
import OrgRegister from './components/OrgRegister'
import HealthProffRegister from './components/HealthProffRegister'


function App() {

  const user = localStorage.getItem('user');
  // localStorage.setItem('user', 'Varisha Rashid');

  const [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    if (user === null) {
      setAuth = false;
    }
  })

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
          <Route path="/welcome" element={<Welcome name={user} />} />
        </Routes>
        <Routes>
          <Route path="/medical" element={<MedicalRecordsForm />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Routes>
          <Route path="/medicalProfile" element={<MedicalProfile />} />
        </Routes>
        <Routes>
          <Route path="/findDoctor" element={<FindDoctor />} />
        </Routes>
        <Routes>
          <Route path="/orgRegister" element={<OrgRegister />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
