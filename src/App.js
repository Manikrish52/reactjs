import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function App() {
  return (
        <Table>
      <thead>
        <tr >
          <td className='header-content' colSpan={7}>Time Table</td>
        </tr>
      </thead>
      <tbody>
        <tr className='aside-content '>
          <td  rowspan={7}>Hours</td>
        </tr>
        <tr >
          <td className='middle-content'>Mon</td>
          <td className='middle-content'>Tue</td>
          <td className='middle-content'>Wed</td>
          <td className='middle-content'>Thu</td>
          <td className='middle-content'>Fri</td>
        </tr>
        <tr>
          <td className='middle-content'>Science</td>
          <td className='middle-content'>maths</td>
          <td className='middle-content'>Science</td>
          <td className='middle-content'>maths</td>
          <td className='middle-content'>arts</td>
        </tr>
         <tr>
          <td className='middle-content'>social</td>
          <td className='middle-content'>history</td>
          <td className='middle-content'>english</td>
          <td className='middle-content'>social</td>
          <td className='middle-content'>soprts</td>
        </tr>
         <tr>
          <td className='lunch-content' colSpan={5}>Lunch</td>
         </tr>
         <tr>
          <td className='middle-content'>Science</td>
          <td className='middle-content'>maths</td>
          <td className='middle-content'>Science</td>
          <td className='middle-content'>maths</td>
          <td className='middle-content' rowSpan={2}>Project</td>
        </tr>
         <tr>
          <td className='middle-content'>social</td>
          <td className='middle-content'>history</td>
          <td className='middle-content'>english</td>
          <td className='middle-content'>social</td>
        </tr>
      </tbody>
    </Table>

  );
}

export default App;
