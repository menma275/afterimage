import ShowTrends from "@/components/ShowTrends";
import ShowSearchResult from "@/components/ShowSearchResult";
import Wrapper from "@/components/Wrapper";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full px-3 max-w-4xl mx-auto my-12 text-white">
      <Wrapper title="Search">
        <ShowSearchResult />
      </Wrapper>
      <Wrapper title="Trends">
      <ShowTrends />
      </Wrapper>
    </main>
  );
}
