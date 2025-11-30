import GroupChat from "@/components/home/GroupChat";
import LeftGroup from "@/components/home/LeftGroup";
import LeftMenu from "@/components/home/LeftMenu";
import NewUpload from "@/components/home/NewUpload";
import PeopleYouMightKnow from "@/components/home/PeopleYouMightKnow";
import RightMenu from "@/components/home/RightMenu";
import UsersStory from "@/components/home/UsersStory";

export default function HomePage() {
  return (
    <main>
      <div className="flex h-screen">
        <div className="w-64 lg:w-80 xl:w-96 h-full overflow-auto p-2 hidden xl:block">
          <LeftMenu />
          <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
          <LeftGroup />
        </div>

        <div className="flex-1 h-full overflow-auto 3xl:px-52">
          <div className="p-4">
            <NewUpload />
            <UsersStory />

            <PeopleYouMightKnow />
          </div>
        </div>

        <div
          className="w-64 lg:w-80 xl:w-96 h-full overflow-auto p-2 hidden md:block"
          // Ref how i get this idea
          // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/direction
          style={{
            direction: "rtl",
          }}
        >
          <div
            style={{
              direction: "ltr",
            }}
          >
            <RightMenu />
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
            <GroupChat />
          </div>
        </div>
      </div>
    </main>
  );
}
