import Image from "next/image";
import Link from "next/link";

export default async function LeftGroup() {
  // IM keeping this as async components just to assuming that this data will be fetched on the server component!
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

  return (
    <div className="pb-4">
      <h3 className="text-lg pb-2">Your shortcuts</h3>

      {itemGroups.map((item) => (
        <Link
          key={item.link}
          href={`/groups/${item.link}`}
          className="flex items-center gap-4 p-2 px-3 rounded-md hover:bg-light-gray w-full cursor-pointer"
        >
          <Image
            height={40}
            width={40}
            src={item.image}
            alt={item.name}
            className="rounded-md object-cover"
          />
          <span className="text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
