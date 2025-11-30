export default async function SingleGroup({ params }) {
  // Based on the slug we will fetch data from server
  const { slug } = await params;

  return (
    <div className="h-[calc(100vh-200px)] flex justify-center items-center capitalize  gap-2">
      <span>You Are At</span> <strong> {slug} </strong> Page
    </div>
  );
}
