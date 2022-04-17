import './App.css';
import React, { Component } from "react";
import MusicContextProvider from './context/MusicContext';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

// const handleSubmit = (e, searchInput) => {
//   e.preventDefault();
//   e.currentTarget.reset();
//   let url = `/search/${searchInput}`;
//   useNavigate(searchInput);
// };

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  // handleSubmit = (e, history, searchInput) => {
  //   e.preventDefault();
  //   e.currentTarget.reset();
  //   let url = `/search/${searchInput}`;
  //   history.push(url);
  // };

  handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    useNavigate(url);
  };

  render() {
    return (
      <MusicContextProvider>
        <Router>
          <div className="container">
            <Routes>
              <Route
                path="/nav"
                element ={< Header />}
              />
              </Routes>
            <Routes>
              <Route
                exact
                path="/"
                element = {<Navigate replace to="/electro" />}
              />

              <Route
                path="/electro"
                element = {<Item searchTerm="Zedd" />}
              />
              <Route path="/dnb" element = {<Item searchTerm="Paperclip" />} />
              <Route path="/trap" element={<Item searchTerm="Zomboy" />} />
              <Route path="/house" element={<Item searchTerm="Carl Cox" />} />
              <Route path="/trance" element={<Item searchTerm="Cosmic Gate" />} />
              <Route path="/psytrance" element={<Item searchTerm="Astrix" />} />
              <Route
                path="/search/:searchInput"
                element = {<Search handleSubmit = {this.handleSubmit}/>}
              />
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </MusicContextProvider>
    );
  }
}

export default App;
