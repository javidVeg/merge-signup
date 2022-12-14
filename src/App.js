import './App.css';
import Header from './Components/Header/Header';
import LandingBody from './Pages/LandingBody/LandingBody';
import SignUp from './Components/SignUp/SignUp';
import { ToastContainer } from "react-toastify"
import Pitch from './Components/Pitch/Pitch';
import Footer from './Components/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register/Register';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import VideoScroll from './Pages/VideoScroll/VideoScroll';
import NewGSAPTest from './NewGSAPTest/NewGSAPTest';



function App() {
  
  return (
    <div className='App'>
      {/* <SignUp/> */}
      <div className='header-main'><Header /></div>
      
      <Routes>
        <Route path='/' element={<Navigate to ="/home"/>}/>
        <Route path='/merge-signup/' element={<Navigate to ="/home"/>}/>
        <Route path='/home' element={<LandingBody />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/newGSAPtest' element={<NewGSAPTest/>}/>
        <Route path='/videoscroll' element={<VideoScroll/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      {/* <Pitch/> */}
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
