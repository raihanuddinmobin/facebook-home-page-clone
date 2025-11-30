import Header from "@/components/Header";
import LeftGroup from "@/components/home/LeftGroup";
import LeftMenu from "@/components/home/LeftMenu";
import RightMenu from "@/components/home/RightMenu";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-[300px_1fr_350px] px-4 py-2 gap-4">
        <div className="h-screen overflow-auto">
          <LeftMenu />
          <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-light-gray" />
          <LeftGroup />
        </div>
        <div>Hello</div>
        <RightMenu />
      </div>
    </main>
  );
}
