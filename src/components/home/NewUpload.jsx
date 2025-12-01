import { ImageIcon, ListVideo, Video } from "lucide-react";
import Image from "next/image";

export default function NewUpload() {
  return (
    <div className="p-3 bg-gray rounded-md flex items-center gap-3">
      <Image
        src="/profile.png"
        className="rounded-full"
        alt="Profile Image"
        height={34}
        width={34}
      />

      <input
        className="bg-light-gray-50 rounded-full px-5 pl-2 md:pl-5 h-full py-2 flex-1 min-w-0"
        type="text"
        placeholder="Whats on your mind, Raihan?"
      />

      <div className="flex items-center gap-4 shrink-0">
        <Video
          size={32}
          className="text-red-500 cursor-pointer hidden sm:block"
        />
        <ImageIcon size={26} className="text-green-500 cursor-pointer" />
        <ListVideo
          size={26}
          className="text-pink-600 cursor-pointer hidden sm:block"
        />
      </div>
    </div>
  );
}
