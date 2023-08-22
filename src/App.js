import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Navbarheader from './navbar/navbar';
import Slider from './sliderarea/slider';
import Static from './staticarea/static';
import Index from './Router/index';
import Seller from './Seller/seller';
function App() {
  return (
    <div>
   <Header/>
   <Navbarheader/>
   <Slider />
   <Static />
   <Seller />
   <Index />
   </div>
  );
}

export default App;
