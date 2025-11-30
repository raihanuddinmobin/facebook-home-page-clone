import { ImageIcon, ListVideo, Video } from "lucide-react";
import Image from "next/image";

export default function NewUpload() {
  return (
    <div className="p-3 bg-gray rounded-md flex items-center gap-3 flex-wrap">
      <Image
        src={"/profile.png"}
        className="rounded-full static"
        objectFit="contain"
        alt="Profile Image"
        height={40}
        width={40}
      />

      <input
        className="bg-light-gray-50 rounded-full px-7 pl-8 h-full hidden md:inline-block py-3 flex-1"
        type="string"
        placeholder="Whats One your Mind, Raihan?"
      />

      <div className="flex items-center  gap-4">
        <Video size={34} className="text-red-500 cursor-pointer" />
        <ImageIcon size={30} className="text-green-500 cursor-pointer" />
        <ListVideo size={30} className="text-pink-600 cursor-pointer" />
      </div>
    </div>
  );
}
