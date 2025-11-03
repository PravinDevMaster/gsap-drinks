import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CSSPlugin, ScrollTrigger, SplitText } from "gsap/all";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      {/* <div className="h-dvh bg-black"></div> */}
    </main>
  );
};

export default App;
