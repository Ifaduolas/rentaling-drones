import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import './App.css'
import UserDashboard from "./components/UserDashboard"
import DroneDetails from "./components/DroneDetails"
import DroneList from "./components/DroneList"
import BookingForm from "./components/BookingForm"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookingManagement from "./components/BookingManagement"
import DroneCard from './components/DroneCard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Admin from './pages/Admin';
import ManageBooking from './components/ManageBooking';
import ManageUser from './components/ManageUser';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/userDashboard" element={<UserDashboard/>}/>
        <Route path="/drones/:id" element={<DroneDetails/>}/>
        <Route path="/droneList" element={<DroneList/>}/>
         <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/bookingManagement" element={<BookingManagement/>}/>
        <Route path="/droneCard" element={<DroneCard/>}/>
        <Route path="/manageBooking" element={<ManageBooking/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/manageUser" element={<ManageUser/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
