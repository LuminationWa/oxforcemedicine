'use client';
import Script from "next/script";
import React, { useState, useEffect } from "react";

const Board = () => {

  const text = "hello";
  return (
    <div className="flex w-[100%] max-w-[1368px] flex-col lg:px-8">
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" />
      <div className="flex w-[100%] max-w-[1368px] border border-pink-500 h-[500px]">
        {text}
      </div>
      <div className="lg:flex gap-3 p-3">
        <button
          class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={() => {
            getServerSideProps()
          }}
        >
          Kinda afk for the dayyyyyy
        </button>
        <button
          class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Things a bit hard rn
        </button>
        <button
          class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-stone-100 to-stone-50 border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Board;
