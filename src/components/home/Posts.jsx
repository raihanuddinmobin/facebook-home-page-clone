import {
  Frown,
  Heart,
  MessageCircleDashed,
  Share,
  Smile,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: "post_001",
    user: "Ariana Gomez",
    profileImage: "https://picsum.photos/seed/u1/50/50",
    postImage: "https://picsum.photos/seed/p1/400/300",
    caption: "Enjoying a sunny day at the park! 🌞",
    likes: 120,
    comments: [
      { user: "John Doe", text: "Looks amazing!" },
      { user: "Emily Smith", text: "Wish I was there!" },
    ],
    createdAt: new Date("2025-12-01T08:15:00"),
  },
  {
    id: "post_002",
    user: "Leo Martinez",
    profileImage: "https://picsum.photos/seed/u2/50/50",
    postImage: "https://picsum.photos/seed/p2/400/300",
    caption: "Just finished my morning run. Feeling great! 🏃‍♂️",
    likes: 89,
    comments: [{ user: "Sarah Lee", text: "Go Leo! 💪" }],
    createdAt: new Date("2025-12-01T07:45:00"),
  },
  {
    id: "post_003",
    user: "Maya Patel",
    profileImage: "https://picsum.photos/seed/u3/50/50",
    postImage: "https://picsum.photos/seed/p3/400/300",
    caption: "Homemade pizza night 🍕",
    likes: 150,
    comments: [
      { user: "David Kim", text: "Yum! Recipe?" },
      { user: "Nina Zhao", text: "Looks delicious!" },
    ],
    createdAt: new Date("2025-12-01T18:30:00"),
  },
  {
    id: "post_004",
    user: "Chris Johnson",
    profileImage: "https://picsum.photos/seed/u4/50/50",
    postImage: "https://picsum.photos/seed/p4/400/300",
    caption: "Exploring the mountains this weekend 🏔️",
    likes: 210,
    comments: [{ user: "Olivia Brown", text: "Amazing view!" }],
    createdAt: new Date("2025-11-30T12:00:00"),
  },
  {
    id: "post_005",
    user: "Sophia Williams",
    profileImage: "https://picsum.photos/seed/u5/50/50",
    postImage: "https://picsum.photos/seed/p5/400/300",
    caption: "Coffee + Book = Perfect Sunday ☕📖",
    likes: 98,
    comments: [
      { user: "Liam Scott", text: "So cozy!" },
      { user: "Emma Davis", text: "Which book?" },
    ],
    createdAt: new Date("2025-12-01T09:20:00"),
  },
  {
    id: "post_006",
    user: "Ryan Lee",
    profileImage: "https://picsum.photos/seed/u6/50/50",
    postImage: "https://picsum.photos/seed/p6/400/300",
    caption: "Throwback to my trip to Italy 🇮🇹",
    likes: 320,
    comments: [
      { user: "Mia Chen", text: "Italy is on my bucket list!" },
      { user: "Noah Wilson", text: "Beautiful!" },
    ],
    createdAt: new Date("2025-11-29T15:45:00"),
  },
  {
    id: "post_007",
    user: "Ella Thompson",
    profileImage: "https://picsum.photos/seed/u7/50/50",
    postImage: "https://picsum.photos/seed/p7/400/300",
    caption: "Homemade cupcakes for the weekend 🧁",
    likes: 140,
    comments: [{ user: "Jack Martinez", text: "Yummy!" }],
    createdAt: new Date("2025-12-01T11:00:00"),
  },
  {
    id: "post_008",
    user: "Liam White",
    profileImage: "https://picsum.photos/seed/u8/50/50",
    postImage: "https://picsum.photos/seed/p8/400/300",
    caption: "Sunset vibes 🌅",
    likes: 205,
    comments: [{ user: "Ava Clark", text: "So peaceful!" }],
    createdAt: new Date("2025-12-01T17:30:00"),
  },
  {
    id: "post_009",
    user: "Chloe Adams",
    profileImage: "https://picsum.photos/seed/u9/50/50",
    postImage: "https://picsum.photos/seed/p9/400/300",
    caption: "Beach day with friends 🏖️",
    likes: 310,
    comments: [
      { user: "Ethan Miller", text: "Looks fun!" },
      { user: "Sophia Johnson", text: "Miss the beach!" },
    ],
    createdAt: new Date("2025-11-30T14:15:00"),
  },
  {
    id: "post_010",
    user: "Mason Taylor",
    profileImage: "https://picsum.photos/seed/u10/50/50",
    postImage: "https://picsum.photos/seed/p10/400/300",
    caption: "Late-night coding session 💻",
    likes: 75,
    comments: [{ user: "Isabella Moore", text: "Keep it up!" }],
    createdAt: new Date("2025-12-01T23:00:00"),
  },
];

export default function Posts() {
  return (
    <div className="mx-auto mt-6 space-y-6">
      {posts.map((post) => (
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
              className="rounded-full mr-3"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100">{post.user}</span>
              <span className="text-sm text-slate-300">
                {post.createdAt.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="p-4 pt-0">
            <p className="text-slate-50">{post.caption}</p>
          </div>
          <div className="relative w-full h-96">
            <Image
              src={post.postImage}
              alt="Post"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">{post.likes} likes</p>
              <p className="text-gray-500 text-sm">
                {post.comments.length} Comments
              </p>
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-slate-500" />

            <div className="flex space-x-4 relative  justify-between">
              <div className="group relative ">
                <ThumbsUp
                  size={28}
                  className="cursor-pointer text-gray-400 hover:text-blue-500"
                />

                <div className="absolute -top-14 left-18  -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray rounded-full p-2">
                  <button className="w-8 h-8  rounded-full flex items-center justify-center text-white text-xs ">
                    <ThumbsUp className="cursor-pointer" />
                  </button>
                  <button className="w-8 h-8  rounded-full flex items-center justify-center text-white text-xs">
                    <Heart className="cursor-pointer" />
                  </button>
                  <button className="w-8 h-8  rounded-full flex items-center justify-center text-white text-xs">
                    <Smile className="cursor-pointer" />
                  </button>
                  <button className="w-8 h-8  rounded-full flex items-center justify-center text-white text-xs">
                    <Frown className="cursor-pointer" />
                  </button>
                </div>
              </div>

              <MessageCircleDashed
                size={28}
                className="cursor-pointer text-gray-400 hover:text-blue-500"
              />
              <Share
                size={28}
                className="cursor-pointer text-gray-400 hover:text-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
