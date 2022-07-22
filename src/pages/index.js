import Navbar from "./components/nav-bar/nav-bar";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.net.min";
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
          points: 20.00,
          maxDistance: 34.00,
          color: 0x6c3fff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-screen h-screen" ref={vantaRef}>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
