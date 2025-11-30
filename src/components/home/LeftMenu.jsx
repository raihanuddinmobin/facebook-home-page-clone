"use client";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Bell,
  Bookmark,
  Bot,
  Calendar,
  Clock,
  FileStack,
  Flag,
  Gamepad2,
  Heart,
  HelpCircle,
  Layers3,
  Map,
  MessageCircle,
  Newspaper,
  Settings,
  Star,
  Store,
  Trophy,
  User,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const options = [
  { title: "Profile", route: "/profile", icon: User },
  { title: "Meta AI", route: "/meta-ai", icon: Bot },
  { title: "Pages", route: "/pages", icon: FileStack },
  { title: "Friends", route: "/friends", icon: Users },
  { title: "Groups", route: "/groups", icon: Layers3 },
  { title: "Marketplace", route: "/marketplace", icon: Store },
  { title: "Watch", route: "/watch", icon: Video },
  { title: "Events", route: "/events", icon: Calendar },
  { title: "Saved", route: "/saved", icon: Bookmark },
  { title: "Tournaments", route: "/tournaments", icon: Trophy },
  { title: "Gaming", route: "/gaming", icon: Gamepad2 },
  { title: "Memories", route: "/memories", icon: Clock },
  { title: "Feeds", route: "/feeds", icon: Newspaper },
  { title: "Following", route: "/following", icon: Star },
  { title: "Activity", route: "/activity", icon: Heart },
  { title: "Messages", route: "/messages", icon: MessageCircle },
  { title: "Notifications", route: "/notifications", icon: Bell },
  { title: "Ad Center", route: "/ad-center", icon: Flag },
  { title: "Nearby", route: "/nearby", icon: Map },
  { title: "Settings", route: "/settings", icon: Settings },
  { title: "Help & Support", route: "/help", icon: HelpCircle },
];

export default function LeftMenu() {
  const [isSeeMoreActive, setIsSeeMoreActive] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {(isSeeMoreActive ? options : options?.slice(0, 6)).map((item) => (
        <button
          key={item.route}
          className="flex items-center gap-4 p-2 px-3 rounded-md hover:bg-light-gray w-full cursor-pointer"
        >
          <>
            {item.title === "Profile" ? (
              <>
                <Image
                  src={"/profile.png"}
                  className="rounded-full static"
                  objectFit="contain"
                  alt="Profile Image"
                  height={40}
                  width={40}
                />
                <span className="font-medium">Raihan Uddin Mobin</span>
              </>
            ) : (
              <>
                <item.icon size={30} strokeWidth={1.8} />
                <span className="font-medium">{item.title}</span>
              </>
            )}
          </>
        </button>
      ))}

      <button
        className="flex items-center gap-4 p-2 px-3 rounded-md hover:bg-light-gray w-full cursor-pointer"
        onClick={() => {
          setIsSeeMoreActive((prev) => !prev);
        }}
      >
        <div className="bg-light-gray-50 p-2 rounded-full">
          {isSeeMoreActive ? (
            <ArrowUpIcon size={22} />
          ) : (
            <ArrowDownIcon size={22} />
          )}
        </div>
        <span className="font-medium">
          {isSeeMoreActive ? "See less" : "See more"}
        </span>
      </button>
    </div>
  );
}
