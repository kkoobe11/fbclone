import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div
      className="relative h-32 w-32 md:h-36 md:w-32
        lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105"
    >
      <Image
        className="object-cover filter brightness-75 rounded-md "
        src={src}
        layout="fill"
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-semibold truncate ">
        {name}
      </p>
      <Image
        className="absolute opacity-5 lg:opacity-100 rounded-full top-10 border-8"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
    </div>
  );
}

export default StoryCard;
