import { BrowserRouter } from "react-router-dom";
import herobg from "./assets/herobg.png";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Blank from "./components/Blank";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816]">
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <Blank />
        <About />

        <div className="md:block hidden">
          <Blank />
          <Tech />
        </div>
        <Blank />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
