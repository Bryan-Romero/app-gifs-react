import React, { useEffect } from "react";
import "./App.css";
import { Link, Route, useLocation } from "wouter";
import Home from "./pages/Home";
import SearchGifs from "./pages/SearchGifs/searchGifs";
import StaticContext from "./context/StaticContext";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "context/UserContext";
import LogIn from "pages/LogIn/LogIn";
import Header from "components/Header/Header";

function App() {
  const location = useLocation();
  /*
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [location])*/

  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <section className="App-content">
          <Link to="/">
            <h1>GIFty</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route
              component={SearchGifs}
              path="/search/:keyword/:rating?/:lang?"
            />
            <Route component={Detail} path="/gif/:id" />
            <Route component={LogIn} path="/login/:type?" />
            <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
