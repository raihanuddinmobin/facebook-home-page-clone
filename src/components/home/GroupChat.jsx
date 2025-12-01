import { PlusIcon } from "lucide-react";
import GroupItems from "./GroupItems";

// I just copy pasted that cz of i showed before how to fetch data in server components
const itemGroups = [
  {
    name: "Daily Motivation",
    image: "https://picsum.photos/seed/motiv/64/64",
    link: "/motivation",
  },
  {
    name: "Workout Planner",
    image: "https://picsum.photos/seed/workout/64/64",
    link: "/workout",
  },
  {
    name: "Finance Tracker",
    image: "https://picsum.photos/seed/finance/64/64",
    link: "/finance",
  },

  {
    name: "Friends Hub",
    image: "https://picsum.photos/seed/friends/64/64",
    link: "/friends",
  },
  {
    name: "Local Events",
    image: "https://picsum.photos/seed/events/64/64",
    link: "/events",
  },
  {
    name: "Volunteers Network",
    image: "https://picsum.photos/seed/volunteer/64/64",
    link: "/volunteers",
  },

  {
    name: "Job Opportunities",
    image: "https://picsum.photos/seed/jobs/64/64",
    link: "/jobs",
  },
  {
    name: "Tech Courses",
    image: "https://picsum.photos/seed/courses/64/64",
    link: "/courses",
  },
  {
    name: "Portfolio Builder",
    image: "https://picsum.photos/seed/portfolio/64/64",
    link: "/portfolio",
  },
];

export default function GroupChat() {
  return (
    <div className="pb-20">
      <h3 className="text-md pb-2 font-medium">Group Chats</h3>
      <GroupItems prefixLink={"/groups/chat/"} items={itemGroups} />
      <button className="flex items-center gap-4 p-1 px-2 rounded-md hover:bg-light-gray w-full cursor-pointer mt-4">
        <div className="bg-light-gray-50 p-2 rounded-full">
          <PlusIcon />
        </div>
        <span className="font-medium">Create Group Chat</span>
      </button>
    </div>
  );
}
