import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CSSPlugin, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div className="h-dvh bg-black"></div> */}
    </main>
  );
};

export default App;
