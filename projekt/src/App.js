import './App.css';
import Navigacija from './Components/Navigacija'
import Pocetna from './Components/Pocetna';
import ONama from './Components/ONama';
import Kontakt from './Components/Kontakt';
import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigacija />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Pocetna/>}/>
            <Route path='/onama' element={<ONama/>}/>
            <Route path='/kontakt' element={<Kontakt/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
