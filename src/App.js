import './App.css';
import Header from './Components/Header/Header';
import LandingBody from './Components/LandingBody/LandingBody';
import SignUp from './Components/SignUp/SignUp';
import { ToastContainer } from "react-toastify"
import Pitch from './Components/Pitch/Pitch';


function App() {
  return (
    <div className='App'>
      {/* <SignUp/> */}
      <Header/>
      <LandingBody/>
      <Pitch/>
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
