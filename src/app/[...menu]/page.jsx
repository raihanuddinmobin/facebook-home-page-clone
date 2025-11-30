export default async function Menu({ params }) {
  // Based on the slug we will fetch data from server
  const { menu } = await params;

  // we can handle by not found page here  by fetching data from the server
  // if (NO_DATA_FOUND) {
  //   notFound();
  // }

  return (
    <div className="h-[calc(100vh-200px)] flex justify-center items-center capitalize  gap-2">
      <span>You Are At</span> <strong> {menu} </strong> Page
    </div>
  );
}
