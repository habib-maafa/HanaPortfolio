export default function ExperienceDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <h1 className="text-3xl font-bold">Experience {params.id}</h1>
    </div>
  );
}
