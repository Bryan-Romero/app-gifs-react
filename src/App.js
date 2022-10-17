import React  from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchGifs from "./pages/SearchGifs/searchGifs";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "context/UserContext";
import LogIn from "pages/LogIn/LogIn";
import Header from "components/Header/Header";
import { App as AppWindow, AppContent, Title } from './App.styles'

function App() {

  return (
    <UserContextProvider>
      <AppWindow>
        <Header />
        <AppContent className="App-content">
          <Link to={'/'}>
            <Title>GIFty</Title>
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
        </AppContent>
      </AppWindow>
    </UserContextProvider>
  );

}

export default App;
