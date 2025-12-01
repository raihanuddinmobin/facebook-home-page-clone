"use client";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import { faTableCells } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Home, LayoutDashboard, ShoppingBag, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuList from "./home/MenuList";
import PlaceholderMenu from "./home/PlaceHolderMenu";

const menus = [
  {
    title: "Home",
    route: "/",
    icon: Home,
  },
  {
    title: "Professional Dashboard",
    route: "/prof-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Video",
    route: "/video",
    icon: Video,
  },
  {
    title: "Marketplace",
    route: "/marketplace",
    icon: ShoppingBag,
  },
  {
    title: "Groups",
    route: "/groups",
    icon: Users,
  },
];

const quickMenu = [
  {
    title: "Menu",
    route: "/menu",
    icon: faTableCells,
  },
  {
    title: "Messages",
    route: "/messages",
    icon: faFacebookMessenger,
  },
  {
    title: "Notifications",
    route: "/notifications",
    icon: faBell,
  },
  {
    title: "Profile",
    route: "/profile",
    icon: faUser,
  },
];

export default function Header() {
  const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <>
      <section className=" flex justify-between items-center  px-4 py-2 bg-gray border-gray-200/40 border-b fixed w-full z-50">
        <div className="flex gap-3">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Facebook Logo"
              height={40}
              width={40}
              objectFit="cover"
            />
          </Link>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center justify-center  pointer-events-none bg-light-gray md:bg-transparent rounded-full p-3">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              className="bg-light-gray rounded-full px-7 pl-8 h-full hidden md:inline-block"
              type="string"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex">
            {menus.map((m) => {
              const isActive =
                m.route === "/"
                  ? pathName === "/"
                  : pathName.startsWith(m.route);

              return (
                <Link
                  href={m.route}
                  key={m.route}
                  title={m.title}
                  className={`hover:bg-light-gray py-3 px-8 xl:px-12 rounded-md relative`}
                >
                  {isActive && (
                    <span className="block absolute  border-b-3 border-primary w-full -bottom-2 left-0" />
                  )}
                  <m.icon
                    size={30}
                    className={`${isActive ? "text-primary" : ""}`}
                  />
                </Link>
              );
            })}
          </ul>
        </nav>
        <nav className="relative">
          <ul className="flex gap-4 items-center">
            {quickMenu.map((m) => {
              const isActive =
                pathName.startsWith(m.route) || activeMenu.startsWith(m.route);

              const isProfile = m.title === "Profile";

              const menuClasses = {
                "/menu":
                  "left-[-110px] sm:left-[-190px]  md:left-[-420px] lg:left-[-460px]",
                "/profile":
                  "left-[-300px] sm:left-[-380px]  md:left-[-580px] lg:left-[-590px]",
                "/notifications":
                  "left-[-250px] sm:left-[-310px]  md:left-[-520px] lg:left-[-530px]",
                "/messages":
                  "left-[-210px] sm:left-[-250px]  md:left-[-520px] lg:left-[-460px]",
              };

              return (
                <li key={m.route} className="relative">
                  {isProfile ? (
                    <Image
                      src={"/profile.png"}
                      className="rounded-full cursor-pointer"
                      objectFit="contain"
                      alt="Profile Image"
                      height={40}
                      width={40}
                      onClick={() =>
                        setActiveMenu((prev) =>
                          prev === m.route ? "" : m.route
                        )
                      }
                    />
                  ) : (
                    <button
                      onClick={() =>
                        setActiveMenu((prev) =>
                          prev === m.route ? "" : m.route
                        )
                      }
                      className="bg-light-gray cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
                      title={m.title}
                    >
                      <FontAwesomeIcon
                        icon={m.icon}
                        style={{ fontSize: "22px" }}
                        className={`${isActive ? "text-primary" : ""}`}
                      />
                    </button>
                  )}

                  {activeMenu === m.route && (
                    <div
                      className={`absolute top-13 bg-light-gray rounded-md p-2 z-50 flex items-center justify-center shadow-2xl ${menuClasses[activeMenu]}`}
                    >
                      {activeMenu === "/menu" ? (
                        <MenuList
                          onClose={() => {
                            setActiveMenu("");
                          }}
                        />
                      ) : (
                        <PlaceholderMenu activeMenu={activeMenu} />
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <div className="h-18" />
    </>
  );
}
