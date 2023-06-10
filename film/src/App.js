import'./App.css';
import Navigation from './Component/navigation';
import Film from './Component/films';
 function App(){
  return(
    <div className='App'>
      <Navigation/>
      <Film/>
    </div>
  )
}
export default App;