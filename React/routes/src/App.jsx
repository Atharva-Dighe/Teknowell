import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (

    <div style={{ textAlign: 'center' }}>
      <Home name="Home"/>
      <About name="About"/>
      {/* 👇 Same as <a> 
        NAVIGATION LINKS (Like menu bar) 
        On Clicking on (Home)element where to redirect.
        We can give it to anything like Menu, Cards, Images, etc*/}

      <nav style={{ margin: '20px' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '10px' }}>About</Link>
      </nav>

      {/* 👇 ROUTES Where to show what 
          eg-  On route "/" show Home page*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
