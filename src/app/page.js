import Board from "../components/Board";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/status", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Home() {
  const topics = await getTopics();
  console.log("aaaa", topics)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Board />
    </main>
  );
}