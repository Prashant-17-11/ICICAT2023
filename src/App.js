import "./App.css";
import About from "./components/About";
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
    </div>
  );
}

export default App;
