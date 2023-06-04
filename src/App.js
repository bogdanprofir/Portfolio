import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import './index.css'


function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    </div>
  );
}

export default App;
