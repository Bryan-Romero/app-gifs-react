import React, { useEffect } from 'react';
import './App.css';
import {Link ,Route, useLocation} from "wouter"
import Home from './pages/Home';
import SearchGifs from './pages/SearchGifs/searchGifs';
import StaticContext from './context/StaticContext';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {

  const location = useLocation()
  /*
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [location])*/

  return (
    <StaticContext.Provider value={{
      name: 'HassielRomero',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className='App-content'>
          <Link to='/'>
            <h1>GIFty</h1>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchGifs}
              path='/search/:keyword/:rating?/:lang?'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
            <Route
              component={() => <h1>404 ERROR :(</h1>}
              path='/404'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App; 
