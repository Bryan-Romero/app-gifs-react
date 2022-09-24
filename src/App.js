import React from 'react';
import './App.css';
import {Link ,Route} from "wouter"
import Home from './pages/Home';
import SearchGifs from './pages/SearchGifs/searchGifd';
import StaticContext from './context/StaticContext';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'HassielRomero',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className='App-content'>
          <Link to='/'>
            <h1>APP GIFS BRYAN</h1>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchGifs}
              path='/search/:keyword'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App; 
