import Navbar from "../components/nav-bar/nav-bar";
import Contact from "./contact";

const About = () => {
  return (
    <div className="h-screen bg-primary overflow-hidden">
      <Navbar />
      <div classname="flex flex-col h-full">
        <Contact />
      </div>
    </div>
  );
};

export default About;
