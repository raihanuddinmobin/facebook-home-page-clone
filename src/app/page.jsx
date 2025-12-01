import GroupChat from "@/components/home/GroupChat";
import LeftGroup from "@/components/home/LeftGroup";
import LeftMenu from "@/components/home/LeftMenu";
import NewUpload from "@/components/home/NewUpload";
import PeopleYouMightKnow from "@/components/home/PeopleYouMightKnow";
import Posts from "@/components/home/Posts";
import RightMenu from "@/components/home/RightMenu";
import UsersStory from "@/components/home/UsersStory";

export default function HomePage() {
  return (
    <main>
      <div className="flex h-screen">
        <div className="w-64 lg:w-80 xl:w-96 h-full overflow-hidden hover:overflow-auto p-2 hidden xl:block cursor-default hover:cursor-pointer fixed">
          <LeftMenu />
          <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
          <LeftGroup />
        </div>

        <div className="w-full lg:w-[70%] xl:w-[45%] 3xl:w-[36%] xl:mx-auto">
          <div className="p-4">
            <NewUpload />
            <UsersStory />
            <Posts />
            <PeopleYouMightKnow />
          </div>
        </div>

        <div
          // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/direction
          className="w-64 lg:w-80 xl:w-96 h-full p-2 hidden lg:block cursor-default hover:cursor-pointer fixed right-0"
          // Added overflow: overlay
          style={{ direction: "rtl", overflowY: "overlay" }}
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
