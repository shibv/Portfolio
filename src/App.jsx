import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Shiv Shankar Singh";
    AOS.init();
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-slate-950 relative h-full w-full ">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
