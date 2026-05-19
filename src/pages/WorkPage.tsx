import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getWorkGrid, type WorkItem } from "../lib/imageStore";

export default function WorkPage() {
  const [items, setItems] = useState<WorkItem[]>([]);

  useEffect(() => {
    setItems(getWorkGrid());
  }, []);

  return (
    <div className="bg-[#f8f6f3] relative w-full min-h-screen overflow-x-hidden">
      {/* Nav */}
      <div className="h-[80px] flex items-center justify-center w-full relative">
        <div className="flex items-center gap-2">
          <NavLink to="/" label="Home" />
          <div className="h-[80px] flex items-center justify-center px-6">
            <span className="font-['Libre_Baskerville:Regular',sans-serif] text-[#ff5900] text-[24px]">
              {"Shema "}
              <span className="font-['Libre_Baskerville:Italic',sans-serif] italic">Eric</span>
            </span>
          </div>
          <NavLink to="/work" label="Work" active />
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center text-center px-6 pt-16 pb-12">
        <div className="font-['Libre_Baskerville:Italic',sans-serif] italic text-[#001666] text-[64px] leading-[76.8px] tracking-[-2px]">
          The Work
        </div>
        <p
          className="font-['DM_Sans:Regular',sans-serif] text-[#5f6566] text-[20px] leading-[26px] tracking-[-0.2px] mt-4 max-w-[520px]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          A collection of frames, films, and stories — captured across events, portraits, and real moments.
        </p>
      </div>

      {/* Grid */}
      <div className="px-8 sm:px-16 pb-24 max-w-[1440px] mx-auto">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-full bg-[#ebe9e4] flex items-center justify-center mb-6 text-2xl">
              📷
            </div>
            <p
              className="font-['Libre_Baskerville:Italic',sans-serif] italic text-[#001666] text-[28px] leading-[36px] mb-3"
            >
              Nothing here yet
            </p>
            <p
              className="font-['DM_Sans:Regular',sans-serif] text-[#5f6566] text-[16px] mb-8"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Add images from the admin panel.
            </p>
            <Link
              to="/edit"
              className="bg-[#ff5900] text-white rounded-full px-6 py-3 font-['DM_Sans:Medium',sans-serif] text-[16px] hover:bg-[#e04f00] transition-colors"
            >
              Open Image Manager
            </Link>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {items.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center py-8 border-t border-[#ebe9e4]">
        <span
          className="font-['DM_Sans:Regular',sans-serif] text-[#5f6566] text-[14px]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          © {new Date().getFullYear()} Shema Eric. All rights reserved.
        </span>
      </div>
    </div>
  );
}

function NavLink({ to, label, active }: { to: string; label: string; active?: boolean }) {
  return (
    <Link
      to={to}
      className="h-[80px] flex items-center justify-center px-10"
    >
      <span
        className="font-['DM_Sans:Regular',sans-serif] text-[16px] tracking-[-0.1px] leading-[20.8px]"
        style={{
          color: active ? "#2a3132" : "#5f6566",
          fontVariationSettings: "'opsz' 14",
        }}
      >
        {label}
      </span>
    </Link>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const card = (
    <div className="break-inside-avoid group overflow-hidden rounded-[16px] bg-[#ebe9e4] relative cursor-pointer mb-5">
      <img
        src={item.url}
        alt={item.title || ""}
        className="w-full h-auto object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      {item.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 pt-8 pb-4">
          <p
            className="font-['DM_Sans:Medium',sans-serif] text-white text-[15px] leading-[20px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {item.title}
          </p>
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
