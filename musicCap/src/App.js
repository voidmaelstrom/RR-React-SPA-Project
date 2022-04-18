import React, { Component } from "react";
import MusicContextProvider from "./context/MusicContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <MusicContextProvider>
        <HashRouter>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/electro" />}
              />

              <Route
                path="/electro"
                render={() => <Item searchTerm="Zedd" />}
              />
              <Route path="/dnb" render={() => <Item searchTerm="Paperclip" />} />
              <Route path="/dubstep" render={() => <Item searchTerm="Zomboy" />} />
              <Route path="/techno" render={() => <Item searchTerm="Carl Cox" />} />
              <Route path="/trance" render={() => <Item searchTerm="Cosmic Gate" />} />
              <Route path="/psytrance" render={() => <Item searchTerm="Juno Reactor" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </MusicContextProvider>
    );
  }
}

export default App;
