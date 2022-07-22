import Navbar from "./components/nav-bar/nav-bar";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import Content from "./components/center-content";
import Footer from "./components/nav-bar/footer";
import Landing from "./landing/Landing";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fa4ff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ height: "50vh", width: "100vw" }} ref={vantaRef}>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
