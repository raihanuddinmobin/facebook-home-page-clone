export async function generateMetadata({ params }) {
  // read route params
  const { slug } = await params;

  // we can handle by not found page here too by fetching data from the server
  // notFound() function
  // if (NO_DATA_FOUND) {
  //   notFound();
  // }

  return {
    title: `Groups | ${slug?.[0].toUpperCase()}`,
  };
}

export default async function SingleGroup({ params }) {
  // Based on the slug we will fetch data from server
  const { slug } = await params;

  // we can handle by not found page here  by fetching data from the server
  // if (NO_DATA_FOUND) {
  //   notFound();
  // }

  return (
    <div className="h-[calc(100vh-200px)] flex justify-center items-center capitalize  gap-2">
      <span>You Are At</span> <strong> {slug} </strong> Page
    </div>
  );
}
