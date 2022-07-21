import Navbar from "./components/nav-bar/nav-bar";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import Content from "./components/center-content";
import Footer from "./components/nav-bar/footer";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ height: "100vh" }} ref={vantaRef}>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Content></Content>
        <Footer />
      </div>
    </div>
  );
}
