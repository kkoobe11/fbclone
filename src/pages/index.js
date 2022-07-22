import Navbar from "./components/nav-bar/nav-bar";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import Content from "./components/center-content";
import Footer from "./components/nav-bar/footer";
import Landing from "./landing/Landing";

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        THREE,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div style={{ height: "100vh" }} ref={myRef}>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default MyComponent;