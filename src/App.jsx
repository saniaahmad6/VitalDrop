import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route, Routes, Link, Outlet, } from 'react-router-dom'

import HomePage from './routes/Home';
import DonatePage from './routes/Donate';
import SeekPage from './routes/Seek';
import LoginPage from './routes/Login';
import LogoutPage from './routes/Logout';

const NavBar = () => {
  return <section className="hero is-dark is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item is-size-4">
                Home
              </Link>
              <Link to="donate" className="navbar-item is-size-4">
                Donate
              </Link>
              <Link to="seek" className="navbar-item is-size-4">
                Seek
              </Link>
              <Link to="login" className="navbar-item is-size-4">
                Login
              </Link>
              <Link to="logout" className="navbar-item is-size-4">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className='hero-body'><Outlet /></div>

    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active"><a>Overview</a></li>
            <li className='is-size-4'><a>Email: xyz@blood.donate</a></li>
            <li className='is-size-4'><a>Phone: +91 123-4567-890</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
}

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='' element={<HomePage />} />
            <Route path='donate' element={<DonatePage />} />
            <Route path='seek' element={<SeekPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='logout' element={<LogoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;