import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllCommittee from "./components/AllCommittee";
import Registration from "./components/Registration";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/committee' element={<AllCommittee />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
