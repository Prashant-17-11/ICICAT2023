import "./App.css";
import About from "./components/About";
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
    </div>
  );
}

export default App;
