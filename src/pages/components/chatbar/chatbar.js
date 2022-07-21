import { AiOutlineVideoCamera } from "react-icons/ai";
import { GrFormSearch } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Contact from "./Contact";

const contacts = [
  {
    key: 1,
    name: "Vladimir Putin",
    src: "/images/1.png",
    profile: "/images/1.png",
  },
  {
    key: 2,
    name: "Donald Trump",
    src: "/images/2.png",
    profile: "/images/2.png",
  },
  {
    key: 3,
    name: "Jef",
    src: "/images/3.png",
    profile: "/images/3.png",
  },
  {
    key: 4,
    name: "John",
    src: "/images/4.png",
    profile: "/images/4.png",
  },
  {
    key: 5,
    name: "Giovannetta",
    src: "/images/5.png",
    profile: "/images/5.png",
  },
  
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-96 p-2">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl font-semibold">Contacts</h2>
        <div className="flex gap-x-5">
          <AiOutlineVideoCamera className="h-6 w-8" />
          <GrFormSearch className="h-6 w-8" />
          <BiDotsHorizontalRounded className="h-6 w-8"/>
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact
          key={contact.key}
          src={contact.profile}
          name={contact.name}
        />
      ))}
    </div>
  );
}

export default Widgets;
