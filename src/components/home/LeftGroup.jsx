import GroupItems from "./GroupItems";

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
    <div className="pb-6">
      <h3 className="text-lg pb-2">Your shortcuts</h3>

      <GroupItems prefixLink={"/groups"} items={itemGroups} />
    </div>
  );
}
