import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Navbarheader from './navbar/navbar';
import Slider from './sliderarea/slider';
import Static from './staticarea/static';
import Index from './Router/index';
import Seller from './Seller/seller';
import Categories from './Categories/Categories'
function App() {
  return (
    <div>
   <Header/>
   <Navbarheader/>
   <Slider />
   <Static />
   <Seller />
   <Categories />
   <Index />
   </div>
  );
}

export default App;
