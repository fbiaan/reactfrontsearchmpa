
import './App.css';
import SearchSensitive from './components/SearchSensitive';
import Searchquery from './components/Searchquery';
import SearchQTable from './components/SearchQTable';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import UnLegajo from './pages/UnLegajo';
function App() {
  return (
    <>
      <Router>
        
        <div className="App">
          <h1>SEARCH ENGINE BASIC</h1>
          <Routes>
                  {/*
                  <Searchquery/>
              */}
                <Route path='/' element={<Home/>}  ></Route>
                <Route path='/predictivo' element={<SearchSensitive/>}> </Route>
                <Route path='/listado' element={<SearchQTable/>}> </Route>
                <Route path='/listado/:legajoId' element={<UnLegajo/>}>                
              </Route>
          </Routes>        
        </div>
        </Router>
    </>
  );
}

export default App;