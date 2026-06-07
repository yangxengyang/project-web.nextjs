import Spline from "@splinetool/react-spline";
import About from "./components/about";
import BinaryBackground from "./components/binary_ui";
import Contact from "./components/connect";
import Hero from "./components/hero";
import Skills from "./components/skills";

export default function Home() {
  return (
   <main>
    <Hero/>
      <About/>
      <Skills/>
    <Contact/>
   </main>
  );
}
