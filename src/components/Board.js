"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

const Board = () => {
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/status", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch status");
      }
      const data = await res.json();
      setStatus(data.statuses[0]);
    } catch (err) {
      console.log("Error loading status: ", error);
    }
  };

  const editStatus = async (e, newTitle, newDescription, id) => {
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
        throw new Error("Failed to update topic");
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-[100%] max-w-[1368px] flex-col lg:px-8">
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" />
      {status && (
        <>
          <div className="flex w-[100%] max-w-[1368px] border border-pink-500 h-[500px]">
            <h1>{status.title}</h1>
            <h2>{status.description}</h2>
            <h3>{status.updatedAt}</h3>
          </div>
          <div className="lg:flex gap-3 p-3">
            <button
              className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              onClick={(e) => {
                editStatus(e, "kinda afk", "hullo", status._id);
              }}
            >
              Kinda afk for the dayyyyyy
            </button>
            <button
              className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              onClick={(e) => {
                editStatus(e, "things a bit hard rn", "hullo", status._id);
              }}
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
        </>
      )}
    </div>
  );
};

export default Board;
