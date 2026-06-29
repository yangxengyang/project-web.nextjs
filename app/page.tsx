import Homepage from "./components/home";
import About from "./components/about";
import Connect from "./components/connect";
import Projects from "./components/projects";

export default function Page() {
  return (
    <>
      <main>
        <Homepage />
        <About />
        <Projects />
        <Connect />
      </main>
    </>
  );
}