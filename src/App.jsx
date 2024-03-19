import { React } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/shared/Login';
import Home from './pages/shared/Home';
import Parentlogin from './pages/parent/Parentlogin';
import Adminlogin from './pages/admin/Adminlogin';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <header>
          <img src="src/assets/img/GCWHlogo.svg" alt="" />
          <div>
            <nav>
              <ul className='flex'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/parentlogin">Parent login</Link>
                </li>
                <li>
                  <Link to="/adminlogin">Admin login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
          <hr />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
      </Router>
    </>
  )
}

export default App
