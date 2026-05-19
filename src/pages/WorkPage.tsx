import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getWorkGrid, type WorkItem } from "../lib/imageStore";

export default function WorkPage() {
  const [items, setItems] = useState<WorkItem[]>([]);

  useEffect(() => {
    setItems(getWorkGrid());
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Nav */}
      <nav className="h-20 flex items-center justify-between px-8 sm:px-12 border-b border-[#ebe9e4]">
        <Link
          to="/"
          className="font-['Libre_Baskerville:Italic',sans-serif] italic text-[#ff5900] text-2xl"
        >
          Shema Eric
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link
            to="/"
            className="text-[#5f6566] hover:text-[#2a3132] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="text-[#2a3132] font-medium border-b-2 border-[#ff5900] pb-0.5"
          >
            Work
          </Link>
        </div>
      </nav>

      {/* Hero text */}
      <div className="px-8 sm:px-12 pt-16 pb-10">
        <h1 className="text-5xl sm:text-6xl font-['DM_Sans:Medium',sans-serif] font-medium text-[#2a3132] tracking-tight leading-tight mb-3">
          Portfolio
        </h1>
        <p className="text-[#5f6566] text-lg max-w-xl">
          A collection of my work in photography and videography.
        </p>
      </div>

      {/* Grid */}
      <div className="px-8 sm:px-12 pb-24">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-full bg-[#ebe9e4] flex items-center justify-center mb-6 text-2xl">
              📷
            </div>
            <p className="text-[#2a3132] text-xl font-medium mb-2">
              No images yet
            </p>
            <p className="text-[#5f6566] text-sm mb-6">
              Add images from the admin panel.
            </p>
            <Link
              to="/edit"
              className="bg-[#ff5900] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#e04f00] transition-colors"
            >
              Open Image Manager
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const card = (
    <div className="group overflow-hidden rounded-2xl bg-[#ebe9e4] aspect-[4/3] relative cursor-pointer">
      <img
        src={item.url}
        alt={item.title || ""}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {item.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 pt-8 pb-4">
          <p className="text-white font-medium text-sm">{item.title}</p>
        </div>
      )}
    </div>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
