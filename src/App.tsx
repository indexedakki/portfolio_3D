import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
      
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
       {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
