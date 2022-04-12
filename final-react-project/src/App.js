import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
