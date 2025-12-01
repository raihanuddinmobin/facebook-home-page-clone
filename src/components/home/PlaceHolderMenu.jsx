export default function PlaceholderMenu({ activeMenu }) {
  return (
    <div className="w-78 sm:w-100 md:w-150 p-3 ">
      <h3 className="text-xl font-semibold capitalize  tracking-wide">
        {activeMenu.replace("/", "")}
      </h3>

      <div className="py-2  gap-2 flex-col md:flex-row h-48 flex justify-center items-center">
        {activeMenu}
      </div>
    </div>
  );
}
