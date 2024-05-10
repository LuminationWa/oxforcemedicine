import Script from "next/script";

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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`http://localhost:3000/api/status/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newTitle, newDescription }),
    });

    if (!res.ok) {
      throw new Error("Failed to update status");
    }

    router.refresh();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

const Board = () => {
  const topics = getTopics();
  const text = "hello";
  return (
    <div className="flex w-[100%] max-w-[1368px] flex-col lg:px-8">
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" />
      <div className="flex w-[100%] max-w-[1368px] border border-pink-500 h-[500px]">
        <h1>Status</h1>
        <h2>Description</h2>
        <h3>Date</h3>
      </div>
      <div className="lg:flex gap-3 p-3">
        <button
          className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Kinda afk for the dayyyyyy
        </button>
        <button
          className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Things a bit hard rn
        </button>
        <button
          className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-stone-100 to-stone-50 border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Board;
