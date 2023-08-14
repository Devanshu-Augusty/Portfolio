import { useState } from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Education from './Education.jsx';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='education' element={<Education />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

const Root = () => {
  const [navbar, setNavbar] = useState("hide-menu");

  const menu = () => {
    if (navbar == "hide-menu") {
      setNavbar("show-menu");
    }
    else {
      setNavbar("hide-menu");
    }
  }

  return (
    <>
      {/* navbar */}
      <nav>
        <ul>
          <li className="name"><Link to='/' className='link'>Devanshu</Link></li>
          <li className='pages'><Link to='/' className='link'>Home</Link></li>
          <li className='pages'><Link to='/projects' className='link'>Projects</Link></li>
          <li className='pages'><Link to='/education' className='link'>Education</Link></li>
          <button onClick={() => menu()}>< AiOutlineBars /></button>
        </ul>
      </nav>
      <ul className={navbar}>
        <li><Link to='/' className='menu-link' onClick={() => menu()}>Home</Link></li>
        <li><Link to='/projects' className='menu-link' onClick={() => menu()}>Projects</Link></li>
        <li><Link to='/education' className='menu-link' onClick={() => menu()}>Education</Link></li>
      </ul>

      <div><Outlet /></div>

      {/* Footer */}
      <div className="footer">
        <div className="icons">
          <div className="svg">
            <Link to="https://www.linkedin.com/in/devanshu-augusty-25204a1b8/" target="_blank" className="social-link"><BsLinkedin /></Link>
          </div>
          <div className="svg">
            <Link to="https://github.com/Devanshu-Augusty/" target="_blank" className="social-link"><BsGithub /></Link>
          </div>
          <div className="svg">
            <Link to="https://twitter.com/DAugus7" target="_blank" className="social-link"><BsTwitter /></Link>
          </div>
        </div>
        <p>©2023 devanshuaugusty17@gmail.com</p>
      </div>
    </>
  )
}

export default App
