import "./App.css";
import About from "./components/About";
import HomeImageSlider from "./components/HomeImageSlider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomeImageSlider />
      <About />
    </div>
  );
}

export default App;
