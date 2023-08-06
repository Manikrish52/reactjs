import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
   <Container className='container'>
      <div className='box-content'>
    <header className='header-content'>Grey</header>
    <div className='middle-content'>
      <aside className='rightside-content'>Menu<div>Panel</div></aside>
      <section className='section-content'>Blue</section>
      <article className='articlebox-content'>
        <div className='rightarticle-content'>Red</div>
         <div className='leftarticle-content'>Orange</div>
      </article>
      <footer className='footer-content'>Footer</footer>
    </div>
  </div> 
      {/* <Row> 
        <Col className='header-content'>Grey</Col>
      </Row>
      <Row className='middle-content'>
        <Col className='rightside-content'>Menu<span>Panel</span></Col>
        <Col className='leftside-content'>Blue</Col>      
      </Row>
      <Row>
        <Col className='footer-content'>Footer</Col>
      </Row> */}
    </Container>


  );
}

export default App;
