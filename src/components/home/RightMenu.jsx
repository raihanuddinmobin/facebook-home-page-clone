import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Using ai for generating this mongo style json 👻
export const messengerData = [
  {
    id: "u01",
    userName: "Ariana Gomez",
    profileImage: "https://picsum.photos/seed/ariana/80/80",
    lastMessage: "Are you coming tomorrow?",
    time: "10:42 AM",
    storyIds: ["story_001", "story_002"],
  },
  {
    id: "u02",
    userName: "Jonathan Smith",
    profileImage: "https://picsum.photos/seed/jonathan/80/80",
    lastMessage: "Awesome! thanks a lot",
    time: "09:11 AM",
    storyIds: ["story_003"],
  },
  {
    id: "u03",
    userName: "Emily Carter",
    profileImage: "https://picsum.photos/seed/emily/80/80",
    lastMessage: "I'll send it in a minute",
    time: "Yesterday",
    storyIds: [],
  },
  {
    id: "u04",
    userName: "Michael Johnson",
    profileImage: "https://picsum.photos/seed/michael/80/80",
    lastMessage: "Let’s meet at the café",
    time: "Yesterday",
    storyIds: ["story_004", "story_005"],
  },
  {
    id: "u05",
    userName: "Sophie Turner",
    profileImage: "https://picsum.photos/seed/sophie/80/80",
    lastMessage: "Can you check the file?",
    time: "2 days ago",
    storyIds: [],
  },
  {
    id: "u06",
    userName: "Daniel Reed",
    profileImage: "https://picsum.photos/seed/daniel/80/80",
    lastMessage: "typing...",
    time: "online",
    storyIds: ["story_006"],
  },
  {
    id: "u07",
    userName: "Olivia Brown",
    profileImage: "https://picsum.photos/seed/olivia/80/80",
    lastMessage: "Call me when free",
    time: "3 days ago",
    storyIds: ["story_007", "story_008"],
  },
  {
    id: "u08",
    userName: "Lucas Miller",
    profileImage: "https://picsum.photos/seed/lucas/80/80",
    lastMessage: "😂😂😂",
    time: "3 days ago",
    storyIds: [],
  },
  {
    id: "u09",
    userName: "Emma Wilson",
    profileImage: "https://picsum.photos/seed/emma/80/80",
    lastMessage: "Where are you right now?",
    time: "4 days ago",
    storyIds: ["story_009"],
  },
  {
    id: "u10",
    userName: "Chris Anderson",
    profileImage: "https://picsum.photos/seed/chris/80/80",
    lastMessage: "Send me the location",
    time: "4 days ago",
    storyIds: [],
  },
  {
    id: "u11",
    userName: "Natalie Hughes",
    profileImage: "https://picsum.photos/seed/natalie/80/80",
    lastMessage: "See you soon!",
    time: "Yesterday",
    storyIds: ["story_010"],
  },
  {
    id: "u12",
    userName: "Ethan Brooks",
    profileImage: "https://picsum.photos/seed/ethan/80/80",
    lastMessage: "Got it 👍",
    time: "08:15 AM",
    storyIds: [],
  },
  {
    id: "u13",
    userName: "Isabella Clark",
    profileImage: "https://picsum.photos/seed/isabella/80/80",
    lastMessage: "Let's catch up later",
    time: "online",
    storyIds: ["story_011", "story_012"],
  },
  {
    id: "u14",
    userName: "Matthew Wright",
    profileImage: "https://picsum.photos/seed/matthew/80/80",
    lastMessage: "Did you see this?",
    time: "Yesterday",
    storyIds: [],
  },
  {
    id: "u15",
    userName: "Sophia Lopez",
    profileImage: "https://picsum.photos/seed/sophia/80/80",
    lastMessage: "😂😂",
    time: "3 days ago",
    storyIds: ["story_013"],
  },
  {
    id: "u16",
    userName: "James Lee",
    profileImage: "https://picsum.photos/seed/james/80/80",
    lastMessage: "Meeting at 5pm",
    time: "2 days ago",
    storyIds: ["story_014", "story_015"],
  },
  {
    id: "u17",
    userName: "Mia Scott",
    profileImage: "https://picsum.photos/seed/mia/80/80",
    lastMessage: "Can you review this?",
    time: "online",
    storyIds: [],
  },
  {
    id: "u18",
    userName: "Benjamin Hall",
    profileImage: "https://picsum.photos/seed/benjamin/80/80",
    lastMessage: "On my way",
    time: "10:05 AM",
    storyIds: ["story_016"],
  },
  {
    id: "u19",
    userName: "Charlotte Adams",
    profileImage: "https://picsum.photos/seed/charlotte/80/80",
    lastMessage: "Thanks!",
    time: "Yesterday",
    storyIds: [],
  },
  {
    id: "u20",
    userName: "Alexander Young",
    profileImage: "https://picsum.photos/seed/alexander/80/80",
    lastMessage: "Check this out",
    time: "4 days ago",
    storyIds: ["story_017", "story_018"],
  },
  {
    id: "u21",
    userName: "Amelia King",
    profileImage: "https://picsum.photos/seed/amelia/80/80",
    lastMessage: "Got your message",
    time: "3 days ago",
    storyIds: [],
  },
  {
    id: "u22",
    userName: "William Hill",
    profileImage: "https://picsum.photos/seed/william/80/80",
    lastMessage: "Meeting rescheduled",
    time: "2 days ago",
    storyIds: ["story_019"],
  },
  {
    id: "u23",
    userName: "Harper Green",
    profileImage: "https://picsum.photos/seed/harper/80/80",
    lastMessage: "See you soon!",
    time: "Yesterday",
    storyIds: [],
  },
  {
    id: "u24",
    userName: "Daniela Rivera",
    profileImage: "https://picsum.photos/seed/daniela/80/80",
    lastMessage: "Thanks for sharing",
    time: "09:30 AM",
    storyIds: ["story_020"],
  },
  {
    id: "u25",
    userName: "Logan Parker",
    profileImage: "https://picsum.photos/seed/logan/80/80",
    lastMessage: "😂😂😂",
    time: "online",
    storyIds: [],
  },
];

export default function RightMenu() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg pb-2 ">Contacts</h3>
        <div className="flex gap-3">
          <Search />
          <Menu />
        </div>
      </div>

      {messengerData.map((item) => (
        <Link
          key={item.id}
          href={`/messages/${item.id}`}
          className="flex items-center gap-4 p-2 px-3 rounded-md hover:bg-light-gray w-full cursor-pointer"
        >
          <Image
            height={34}
            width={34}
            src={item.profileImage}
            alt={item.userName}
            title={item.userName}
            className={`rounded-full object-cover ${
              item.storyIds.length > 0 ? "border-3 border-primary" : ""
            }`}
          />
          <span className="text-sm">{item.userName}</span>
        </Link>
      ))}
    </div>
  );
}
