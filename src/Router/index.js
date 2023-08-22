import About from '../About/about'
import Contact from '../Contact/contact'
import Errorpage from '../Errorpage/Errorpage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function Index() {
  return (
    <Router>
    <div>
      <h1> React Router</h1>
      <ul>
        <li><Link to ='/'>about</Link></li>
        <li><Link to ='/contact'>contact</Link></li>
          <li><Link to ='*'>404 Error</Link></li>
      </ul>
      <Routes>
        <Route path='/' element ={<About/>}></Route>
           <Route path='/contact' element ={<Contact/>}></Route>
           <Route path='*' element ={<Errorpage/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}
export default Index