import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Login } from './component/login/login';
import { Mobiles } from './component/mobiles/mobiles';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header>
          <h1>Shopper</h1>
          <nav>
            <Link to={'/'}>Home</Link><span>|</span>
            <Link to={'kids'}>Kids</Link><span>|</span>
            <Link to={'men'}>Men</Link><span>|</span>
            <Link to={'login'}>Login</Link>
          </nav>

        </header>
        <hr />
        <Routes >
          <Route path="/" element={<><h2>Home</h2><p>Year end sale 40%Off</p></>}></Route>
          <Route path="kids" element={<><h2>Kids Fashion</h2><p>Year end sale 30%Off</p></>}></Route>
          <Route path="men" element={<><h2>Men's Fashion</h2><p>Year end sale 60%Off</p></>}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path="mobile/:category" element={<Mobiles />}></Route>
          <Route path="*" element={<><code>Not Found:Path you requested not found</code></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
