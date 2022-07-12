import StoryCard from "./StoryCard";

const stories = [
  {
    id: 1,
    name: "Inosuke",
    src: "/images/1.png",
    profile: "/images/1.png",
  },
  {
    id: 2,
    name: "Meowth",
    src: "/images/2.png",
    profile: "/images/2.png",
  },
  {
    id: 3,
    name: "Jeffrey",
    src: "/images/3.png",
    profile: "/images/3.png",
  },
  {
    id: 4,
    name: "Marky",
    src: "/images/4.png",
    profile: "/images/4.png",
  },
  {
    id: 5,
    name: "Marie",
    src: "/images/5.png",
    profile: "/images/5.png",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
