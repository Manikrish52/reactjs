import logo from './logo.svg';
import './App.css';
import './header.css'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Navbarheader from './navbar/navbar';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div>
   <Header/>
   <Navbarheader/>
   </div>
  );
}

export default App;
