import ShowTrends from "@/components/ShowTrends";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full px-3 max-w-6xl mx-auto my-12">
      <h1 className="text-xl">afterImage</h1>
      <ShowTrends />
    </main>
  );
}
