import { ToastContainer } from 'react-toastify';
import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4nz94o58gt71TFjOOHvERpgfyM8EHqXU",
  authDomain: "my-portfolio-34217.firebaseapp.com",
  projectId: "my-portfolio-34217",
  storageBucket: "my-portfolio-34217.appspot.com",
  messagingSenderId: "1080495387849",
  appId: "1:1080495387849:web:af071c0c7d503cc57d0918",
  measurementId: "G-6KNDWPS34T"
};

function App() {
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <div className='App'>
      <ToastContainer/>
      <PortfolioContainer/>
    
    </div>
  );
}

export default App;
