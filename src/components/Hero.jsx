import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
  const container = useRef();
  useGSAP(() => {
    // wait for fonts to load first
    document.fonts.ready.then(() => {
      const heroSplit = new SplitText(".title", { type: "chars, words" });
      const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
      heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.05,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".right-left", { y: 200 }, 0)
        .to(".left-left", { y: -200 }, 0);
    });
  }, []);
  return (
    <section id="hero" className="noisy" ref={container}>
      <h1 className="title">MOJITO</h1>
      <img
        src={"/images/hero-left-leaf.png"}
        alt="left-leaf"
        className="left-leaf"
      />
      <img
        src={"/images/hero-right-leaf.png"}
        alt="right-leaf"
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Calssic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktails on our menu is a blend of premim ingredients,
              creative flair, and timeless recipes - designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
