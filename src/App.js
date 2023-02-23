import "./App.css";
import About from "./components/About";
import AboutCity from "./components/AboutCity";
import Committee from "./components/Committee";
import HomeImageSlider from "./components/HomeImageSlider";
import Navbar from "./components/Navbar";
import Tracks from "./components/Tracks";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomeImageSlider />
      <About />
      <Tracks />
      <Committee />
      <AboutCity />
    </div>
  );
}

export default App;
