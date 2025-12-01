import { Cake } from "lucide-react";

export default function UsersBirthday() {
  return (
    <div className="py-1">
      <h3 className="text-md pb-2 font-medium">Birthdays</h3>
      <button className="flex items-center gap-4 p-1 px-2 rounded-md hover:bg-light-gray w-full cursor-pointer">
        <div className="bg-light-gray-50 p-2 rounded-full">
          <Cake className="text-primary" />{" "}
        </div>
        <span className="font-medium text-left">
          <strong>Tanvir Hasan Zisan</strong> and <strong>4 Others</strong> have
          birthdays today.
        </span>
      </button>
    </div>
  );
}
