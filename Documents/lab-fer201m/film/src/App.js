import'./App.css';
import Navigation from './component/navigation';
import Film from './component/films';
import Footer from './component/footer';
import Detail from './component/Detail';
import News from './component/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Film/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;