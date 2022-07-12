import Widgets from "./components/chatbar/chatbar";
import Feed from "./components/maincontent/feed/Feed";
import Navbar from "./components/nav-bar/nav-bar";
import Sidebar from "./components/side-bar/Sidebar";

export default function Home() {
  return (
    <div className="h-screen bg-primary overflow-hidden">
      <Navbar />

      <div className="flex justify-center	">
        <Sidebar />
        <Feed/>
        <Widgets />
      </div>
    </div>
  );
}
