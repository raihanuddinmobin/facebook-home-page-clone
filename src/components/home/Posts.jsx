"use client";
import {
  Frown,
  Heart,
  MessageCircle,
  Share2,
  Smile,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    id: "post_001",
    user: "Ariana Gomez",
    profileImage: "https://picsum.photos/seed/u1/50/50",
    images: [
      "https://picsum.photos/seed/p1/800/600",
      "https://picsum.photos/seed/p2/800/600",
      "https://picsum.photos/seed/p3/800/600",
    ],
    caption: "Enjoying a sunny day at the park!",
    likes: 120,
    shares: [
      {
        user: "Daniel Smith",
        userImage: "https://picsum.photos/seed/s1/40/40",
        time: "3h",
      },
      {
        user: "Emily Davis",
        userImage: "https://picsum.photos/seed/s2/40/40",
        time: "1h",
      },
    ],
    comments: [
      {
        user: "John Doe",
        userImage: "https://picsum.photos/seed/c1/40/40",
        text: "This looks so relaxing!",
        time: "2h",
      },
      {
        user: "Sarah Kim",
        userImage: "https://picsum.photos/seed/c2/40/40",
        text: "Love the vibes!",
        time: "1h",
      },
      {
        user: "Mike Chen",
        userImage: "https://picsum.photos/seed/c3/40/40",
        text: "Wish I was there right now",
        time: "45m",
      },
    ],
    createdAt: new Date("2025-12-01T08:15:00"),
  },
  {
    id: "post_002",
    user: "Leo Martinez",
    profileImage: "https://picsum.photos/seed/u2/50/50",
    images: ["https://picsum.photos/seed/p4/800/600"],
    caption: "Just finished my morning run. Feeling great!",
    likes: 89,
    shares: [
      {
        user: "Oliver Turner",
        userImage: "https://picsum.photos/seed/s3/40/40",
        time: "4h",
      },
    ],
    comments: [
      {
        user: "Emma Wilson",
        userImage: "https://picsum.photos/seed/c4/40/40",
        text: "You're killing it Leo!",
        time: "3h",
      },
      {
        user: "David Park",
        userImage: "https://picsum.photos/seed/c5/40/40",
        text: "Keep pushing bro",
        time: "2h",
      },
    ],
    createdAt: new Date("2025-12-01T07:45:00"),
  },
  {
    id: "post_003",
    user: "Maya Patel",
    profileImage: "https://picsum.photos/seed/u3/50/50",
    images: [
      "https://picsum.photos/seed/p5/800/600",
      "https://picsum.photos/seed/p6/800/600",
    ],
    caption: "Homemade pizza night",
    likes: 150,
    shares: [
      {
        user: "Isabella Foster",
        userImage: "https://picsum.photos/seed/s4/40/40",
        time: "2h",
      },
      {
        user: "Ethan Harris",
        userImage: "https://picsum.photos/seed/s5/40/40",
        time: "1h",
      },
      {
        user: "Aidan Ross",
        userImage: "https://picsum.photos/seed/s6/40/40",
        time: "50m",
      },
    ],
    comments: [
      {
        user: "Nina Zhao",
        userImage: "https://picsum.photos/seed/c6/40/40",
        text: "That looks better than delivery!",
        time: "1h",
      },
      {
        user: "Alex Rivera",
        userImage: "https://picsum.photos/seed/c7/40/40",
        text: "Recipe please!!",
        time: "50m",
      },
      {
        user: "Sofia Lopez",
        userImage: "https://picsum.photos/seed/c8/40/40",
        text: "I'm hungry now",
        time: "30m",
      },
    ],
    createdAt: new Date("2025-12-01T18:30:00"),
  },
  {
    id: "post_004",
    user: "Chris Johnson",
    profileImage: "https://picsum.photos/seed/u4/50/50",
    images: [
      "https://picsum.photos/seed/p7/800/600",
      "https://picsum.photos/seed/p8/800/600",
      "https://picsum.photos/seed/p9/800/600",
      "https://picsum.photos/seed/p10/800/600",
      "https://picsum.photos/seed/p11/800/600",
    ],
    caption: "Exploring the mountains this weekend",
    likes: 210,
    shares: [
      {
        user: "Jacob Evans",
        userImage: "https://picsum.photos/seed/s7/40/40",
        time: "6h",
      },
      {
        user: "Victoria Nguyen",
        userImage: "https://picsum.photos/seed/s8/40/40",
        time: "5h",
      },
    ],
    comments: [
      {
        user: "Olivia Brown",
        userImage: "https://picsum.photos/seed/c9/40/40",
        text: "Incredible views!",
        time: "5h",
      },
      {
        user: "James Lee",
        userImage: "https://picsum.photos/seed/c10/40/40",
        text: "Take me with you next time!",
        time: "4h",
      },
    ],
    createdAt: new Date("2025-11-30T12:00:00"),
  },
  {
    id: "post_005",
    user: "Sophia Williams",
    profileImage: "https://picsum.photos/seed/u5/50/50",
    images: ["https://picsum.photos/seed/p12/800/600"],
    caption: "Coffee + Book = Perfect Sunday",
    likes: 98,
    shares: [
      {
        user: "Henry Clark",
        userImage: "https://picsum.photos/seed/s9/40/40",
        time: "3h",
      },
      {
        user: "Ariana Gomez",
        userImage: "https://picsum.photos/seed/s10/40/40",
        time: "2h",
      },
      {
        user: "Chris Johnson",
        userImage: "https://picsum.photos/seed/s11/40/40",
        time: "1h",
      },
    ],
    comments: [
      {
        user: "Liam Scott",
        userImage: "https://picsum.photos/seed/c11/40/40",
        text: "This is my kind of Sunday",
        time: "2h",
      },
      {
        user: "Isabella Moore",
        userImage: "https://picsum.photos/seed/c12/40/40",
        text: "Which book are you reading?",
        time: "1h",
      },
      {
        user: "Noah Clark",
        userImage: "https://picsum.photos/seed/c13/40/40",
        text: "So cozy",
        time: "40m",
      },
    ],
    createdAt: new Date("2025-12-01T09:20:00"),
  },
  {
    id: "post_006",
    user: "Ryan Lee",
    profileImage: "https://picsum.photos/seed/u6/50/50",
    images: [
      "https://picsum.photos/seed/p13/800/600",
      "https://picsum.photos/seed/p14/800/600",
      "https://picsum.photos/seed/p15/800/600",
      "https://picsum.photos/seed/p16/800/600",
    ],
    caption: "Throwback to my trip to Italy",
    likes: 320,
    shares: [
      {
        user: "Evan Brooks",
        userImage: "https://picsum.photos/seed/s12/40/40",
        time: "9h",
      },
      {
        user: "Samantha Carter",
        userImage: "https://picsum.photos/seed/s13/40/40",
        time: "8h",
      },
      {
        user: "Anthony Cruz",
        userImage: "https://picsum.photos/seed/s14/40/40",
        time: "7h",
      },
      {
        user: "Olivia Brown",
        userImage: "https://picsum.photos/seed/s15/40/40",
        time: "5h",
      },
    ],
    comments: [
      {
        user: "Mia Chen",
        userImage: "https://picsum.photos/seed/c14/40/40",
        text: "Italy is pure magic",
        time: "6h",
      },
      {
        user: "Ethan Miller",
        userImage: "https://picsum.photos/seed/c15/40/40",
        text: "Dream destination",
        time: "5h",
      },
      {
        user: "Ava Thompson",
        userImage: "https://picsum.photos/seed/c16/40/40",
        text: "Those colors are unreal!",
        time: "4h",
      },
      {
        user: "Lucas Garcia",
        userImage: "https://picsum.photos/seed/c17/40/40",
        text: "When are we going back?",
        time: "2h",
      },
    ],
    createdAt: new Date("2025-11-29T15:45:00"),
  },
];

const icons = [
  { name: "Like", icon: ThumbsUp },
  { name: "Love", icon: Heart },
  { name: "Haha", icon: Smile },
  { name: "Sad", icon: Frown },
];

export default function Posts() {
  const [liked, setLiked] = useState(null);
  const getGridLayout = (count) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-2";
    if (count === 3) return "grid-cols-2";
    return "grid-cols-2";
  };

  const getImageHeightClass = (count, index) => {
    if (count === 1) return "h-96";
    if (count === 3 && index === 0) return "row-span-2";
    return "h-48";
  };

  function handleLiked(li) {
    setLiked(li);
  }

  return (
    <div className="mx-auto mt-2 space-y-6 ">
      {posts.map((post) => {
        const imageCount = post.images.length;
        const showCounter = imageCount > 4;

        return (
          <div
            key={post.id}
            className="bg-light-gray-25 rounded-lg shadow-md overflow-hidden border border-gray-50/10"
          >
            <div className="flex items-center p-4">
              <Image
                src={post.profileImage}
                alt={post.user}
                width={40}
                height={40}
                className="rounded-full mr-3 object-cover"
              />
              <div>
                <span className="font-semibold text-slate-100">
                  {post.user}
                </span>
                <span className="block text-sm text-slate-300">
                  {post.createdAt.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="px-4 pb-2">
              <p className="text-slate-50">{post.caption}</p>
            </div>

            <div className="relative">
              <div
                className={`grid ${getGridLayout(imageCount)} gap-1 bg-black`}
              >
                {post.images
                  .slice(0, imageCount === 3 ? 3 : 4)
                  .map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative overflow-hidden cursor-pointer ${getImageHeightClass(
                        imageCount,
                        idx
                      )} ${imageCount === 3 && idx === 0 ? "row-span-2" : ""}`}
                    >
                      <Image
                        src={img}
                        alt={`Post image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />

                      {showCounter && idx === 3 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">
                            +{imageCount - 4}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            <div className=" space-y-2">
              <div className="flex justify-between items-center gap-5 p-4 pb-0">
                <p className="text-slate-200 text-sm font-medium flex gap-1 items-center">
                  <div className="flex -space-x-1">
                    <span className="w-6 h-6 flex items-center justify-center text-[13px] bg-blue-600 text-white rounded-full shadow">
                      👍
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center text-[13px] bg-red-500 text-white rounded-full shadow">
                      ❤️
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center text-[13px] bg-yellow-400 text-white rounded-full shadow">
                      😢
                    </span>
                  </div>
                  {liked && liked.postId === post.id
                    ? post.likes + 1
                    : post.likes}{" "}
                  likes
                </p>
                <p className="text-slate-200 text-sm ml-auto font-medium">
                  {post.comments.length} Comments
                </p>
                <p className="text-slate-200 text-sm font-medium">
                  {post.shares.length} Shares
                </p>
              </div>
              <hr className="my-4 h-[0.2px] border-t-0 bg-neutral-100 dark:bg-white/20" />

              <div className="flex space-x-4 relative items-center  justify-between pb-3 px-3  pt-0">
                <div className="group relative flex flex-1 justify-center">
                  <div
                    className="cursor-pointer w-full justify-center  flex items-center gap-2 hover:bg-gray px-6 rounded-md transition-all duration-100 py-1"
                    onClick={() => setLiked("")}
                  >
                    {liked && liked.postId === post.id ? (
                      <>
                        <liked.icon
                          size={24}
                          className=" text-slate-200   hover:text-blue-500"
                        />
                        <span className="hidden md:block font-semibold tracking-wide pt-1">
                          {liked.name}
                        </span>
                      </>
                    ) : (
                      <>
                        <ThumbsUp
                          size={24}
                          className=" text-slate-200   hover:text-blue-500"
                        />
                        <span className="hidden md:block font-semibold tracking-wide pt-1">
                          {" "}
                          Likes{" "}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="absolute -top-14 left-18  -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray rounded-full p-2 ">
                    {icons.map((ic) => (
                      <button
                        onClick={() => handleLiked({ ...ic, postId: post.id })}
                        key={ic.name}
                        className="w-8 h-8  rounded-full flex items-center justify-center text-white text-xs  hover:scale-[1.3] transition-all duration-150"
                      >
                        <ic.icon className="cursor-pointer hover:-translate-y-1" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cursor-pointer flex items-center-safe gap-2 hover:bg-gray px-6  rounded-md transition-all duration-100 flex-1 justify-center py-1">
                  <MessageCircle
                    size={24}
                    className="cursor-pointer  text-slate-200  hover:text-blue-500"
                  />
                  <span className="hidden md:block font-semibold tracking-wide pt-1">
                    Comments
                  </span>
                </div>

                <div className="cursor-pointer flex items-center gap-2 hover:bg-gray px-6  rounded-md transition-all duration-100 flex-1 justify-center py-1">
                  <Share2
                    size={24}
                    className="cursor-pointer text-slate-200 hover:text-blue-500"
                  />

                  <span className="text-slate-200 hidden md:block">Share</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
