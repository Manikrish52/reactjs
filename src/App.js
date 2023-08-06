import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
   <Container >
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
  
    </Container>


  );
}

export default App;
