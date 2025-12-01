import {
  Bell,
  Home,
  LayoutDashboard,
  MessageCircle,
  Settings,
  ShoppingBag,
  User,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";

const leftMenu = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Friends", icon: Users, link: "/friends" },
  { name: "Marketplace", icon: ShoppingBag, link: "/marketplace" },
  { name: "Videos", icon: Video, link: "/videos" },
  { name: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
  { name: "Groups", icon: Users, link: "/groups" },
];

const rightMenu = [
  { name: "Notifications", icon: Bell, link: "/notifications" },
  { name: "Messages", icon: MessageCircle, link: "/messages" },
  { name: "Profile", icon: User, link: "/profile" },
  { name: "Settings", icon: Settings, link: "/settings" },
];

export default function MenuList({ onClose }) {
  return (
    <div className="w-78 sm:w-100 md:w-150 p-3">
      <h3 className="text-xl font-semibold tracking-wide">Menu</h3>

      <div className="py-2 flex gap-2 flex-col md:flex-row">
        <div className="bg-gray flex-3 p-3 rounded-md">
          <div className="flex  flex-col gap-4">
            {leftMenu.map((item) => (
              <Link
                onClick={onClose}
                key={item.name}
                href={item.link}
                className="flex items-center cursor-pointer gap-2  hover:bg-light-gray-50 rounded-md p-2"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-gray flex-2 p-3 rounded-md flex flex-col gap-3">
          {rightMenu.map((item) => (
            <Link
              onClick={onClose}
              key={item.name}
              href={item.link}
              className="flex items-center cursor-pointer gap-2  hover:bg-light-gray-50 rounded-md p-2"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
