import Image from "next/image";

function Roomsusers({ src }) {
  return (
    <div
      className="flex items-center space-x-3
        relative mr-2 rounded-full"
    >
      <Image
        className="rounded-full cursor-pointer"
        objectFit="cover"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
      <div
        className="absolute bottom-1 left-5 bg-green-400
                h-2 w-2 rounded-full"
      />
    </div>
  );
}

export default Roomsusers;
