import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function Nav(props) {
  return (
    <>
      <Link to="/">Nav</Link>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    // <div className='navbar'>
    //     <div className='logo'>
    //       <img src="https://www.teknowell.in/assets/img/Teknowell%20logo-new.webp" className='logo-img' alt="Logo" />
    //     </div>
    //     <div className='menu'>
    //       <Link to={"/"}><p>Home</p></Link>
    //       <Link to={"/about"}><p>About</p></Link>
    //       <Link to={"/contact"}><p>Contact</p></Link>
    //     </div>
    // </div>
  );
}

export default Nav