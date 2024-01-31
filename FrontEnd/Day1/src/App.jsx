// import React from 'react'
// import Hello from './Components/Hello'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './Components/HomePage';
import Offers from './Components/Offers';
import AdminPage from "./AdminPage";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignupPage";
import Nav from './Components/Nav';
import RegistrationForm from './Components/RegistrationForm';
import AboutUsPage from './Components/AboutUsPage';


const App = () => {
  return (
    <><>
    {/* <RegistrationForm/> */}
      {/* <SignUpPage/>
    <SignInPage/> */}
      {/* <AdminPage/> */}
    </><Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path='/Register' element={<RegistrationForm/>}/>
          <Route path='/About' element={<AboutUsPage/>}/>
          <Route path='/Admin' element={<AdminPage/>}/>
        </Routes>
      </Router></>
  );
};

export default App;