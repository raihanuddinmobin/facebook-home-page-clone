import BirthdayList from "@/components/home/BirthdayList";
import LeftGroup from "@/components/home/LeftGroup";
import LeftMenu from "@/components/home/LeftMenu";
import RightMenu from "@/components/home/RightMenu";

export default function HomePage() {
  return (
    <main>
      <div className="flex h-screen">
        <div className="w-80 h-full overflow-auto p-2">
          <LeftMenu />
          <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
          <LeftGroup />
        </div>

        <div className="flex-1 h-full overflow-auto">
          <div className="p-4">
            Hello
            <p>Long content here to test scroll...</p>
            <p className="mt-10">More content...</p>
          </div>
        </div>

        <div
          className="w-80 h-full overflow-auto p-2"
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
            <BirthdayList />
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
            <RightMenu />
          </div>
        </div>
      </div>
    </main>
  );
}
