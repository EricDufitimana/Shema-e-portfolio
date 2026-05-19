import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { getAllStore, saveStore, type ImageStore, type WorkItem } from "../lib/imageStore";

// ──────────────────────────────────────────────────────────────────────────────
// NOTE: This password is client-side only — anyone who can view source can read
// it. It is a deterrent, not a cryptographic secret.
// ──────────────────────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = "Sh3ma@Admin2026!";
const AUTH_KEY = "shema_admin_authed";

export default function EditPage() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === "1"
  );
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState("");
  const [store, setStore] = useState<Partial<ImageStore>>({});
  const [workGrid, setWorkGrid] = useState<WorkItem[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (authed) {
      const s = getAllStore();
      setStore(s);
      setWorkGrid(s.workGrid ?? []);
    }
  }, [authed]);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      setPwError("");
    } else {
      setPwError("Incorrect password. Try again.");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPw("");
  }

  function set(key: keyof Omit<ImageStore, "workGrid">, value: string) {
    setStore((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    saveStore({ ...store, workGrid });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function addWorkItem() {
    setWorkGrid((prev) => [
      ...prev,
      { id: `${Date.now()}`, url: "", title: "", link: "" },
    ]);
  }

  function updateWorkItem(id: string, key: keyof WorkItem, val: string) {
    setWorkGrid((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: val } : item))
    );
  }

  function removeWorkItem(id: string) {
    setWorkGrid((prev) => prev.filter((item) => item.id !== id));
  }

  // ── Password gate ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#f8f6f3] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-sm">
          <p className="font-['Libre_Baskerville:Italic',sans-serif] italic text-[#ff5900] text-2xl mb-1">
            Shema Eric
          </p>
          <h1 className="text-xl font-semibold text-[#2a3132] mb-6">
            Image Manager — Admin
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Enter admin password"
              className="border border-gray-200 rounded-xl px-4 py-3 text-[#2a3132] text-sm outline-none focus:border-[#ff5900] transition-colors"
              autoFocus
            />
            {pwError && (
              <p className="text-red-500 text-sm -mt-1">{pwError}</p>
            )}
            <button
              type="submit"
              className="bg-[#ff5900] text-white rounded-xl py-3 text-sm font-medium hover:bg-[#e04f00] transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Helper to render a URL input row ──────────────────────────────────────
  function row(
    label: string,
    key: keyof Omit<ImageStore, "workGrid">,
    placeholder = "https://..."
  ) {
    return (
      <div className="flex flex-col gap-1" key={key}>
        <label className="text-xs font-medium text-[#5f6566] uppercase tracking-wide">
          {label}
        </label>
        <input
          type="url"
          value={(store[key] as string) ?? ""}
          onChange={(e) => set(key, e.target.value)}
          placeholder={placeholder}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2a3132] outline-none focus:border-[#ff5900] transition-colors bg-gray-50"
        />
      </div>
    );
  }

  // ── Edit form ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8f6f3] py-10 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-[#2a3132]">
              Image Manager
            </h1>
            <p className="text-[#5f6566] text-sm mt-1">
              All image URLs are saved to your browser's local storage.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm text-[#5f6566] hover:text-[#2a3132] transition-colors"
            >
              ← Home
            </Link>
            <Link
              to="/work"
              className="text-sm text-[#5f6566] hover:text-[#2a3132] transition-colors"
            >
              /work
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-[#5f6566] hover:text-red-500 transition-colors"
            >
              Log out
            </button>
            <button
              onClick={handleSave}
              className="bg-[#ff5900] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[#e04f00] transition-colors"
            >
              {saved ? "✓ Saved!" : "Save Changes"}
            </button>
          </div>
        </div>

        {/* Hero */}
        <Section
          title="Hero Images"
          desc="The 4 floating photos around the main title"
        >
          {row("Hero photo 1 (large, bottom-left)", "hero1")}
          {row("Hero photo 2", "hero2")}
          {row("Hero photo 3", "hero3")}
          {row("Hero photo 4", "hero4")}
        </Section>

        {/* Gallery */}
        <Section
          title="Gallery / Sneak Peek"
          desc="Horizontally-scrolling gallery row"
        >
          {row("Video thumbnail 1", "video1")}
          {row("Video thumbnail 2", "video2")}
          {row("Gallery image 1 — source URL", "gallery1")}
          {row("Gallery image 1 — click link (optional)", "gallery1Link")}
          {row("Gallery image 2 — source URL", "gallery2")}
          {row("Gallery image 2 — click link (optional)", "gallery2Link")}
          {row("Gallery image 3 — source URL", "gallery3")}
          {row("Gallery image 3 — click link (optional)", "gallery3Link")}
          {row("Gallery image 4 (Portfolio) — source URL", "gallery4")}
          {row("Gallery image 4 — click link (optional)", "gallery4Link")}
          {row("Gallery image 5 — source URL", "gallery5")}
          {row("Gallery image 5 — click link (optional)", "gallery5Link")}
        </Section>

        {/* Projects */}
        <Section
          title="Design in Action — Projects"
          desc="Cover images for the four project cards"
        >
          {row("Project 1 (ASYV Stories) — cover image", "project1")}
          {row("Project 1 — click link (optional)", "project1Link")}
          {row("Project 2 (Campus Events) — cover image", "project2")}
          {row("Project 2 — click link (optional)", "project2Link")}
          {row("Project 3 (Portrait Sessions) — cover image", "project3")}
          {row("Project 3 — click link (optional)", "project3Link")}
          {row("Project 4 — cover image", "project4")}
          {row("Project 4 — click link (optional)", "project4Link")}
        </Section>

        {/* Behind the Canvas portraits */}
        <Section
          title="Behind the Canvas — Portraits"
          desc="Three tilted photos in the 'about' section"
        >
          {row("Portrait 1 (Student filmmaker)", "portrait1")}
          {row("Portrait 2 (That's me 📷)", "portrait2")}
          {row("Portrait 3", "portrait3")}
        </Section>

        {/* Testimonials */}
        <Section
          title="Testimonial Avatars"
          desc="Profile photos on the three testimonial cards"
        >
          {row("Testimonial 1 avatar (Teacher / Staff)", "testimonial1")}
          {row("Testimonial 2 avatar (Fellow Student)", "testimonial2")}
          {row("Testimonial 3 avatar (Peer / Collaborator)", "testimonial3")}
        </Section>

        {/* Sidebar template */}
        <Section
          title="Sidebar Preview Card"
          desc="Floating preview card in the bottom-right corner"
        >
          {row("Preview image URL", "template")}
          {row("Click link (optional)", "templateLink")}
        </Section>

        {/* Work grid */}
        <Section
          title="/work Page Grid"
          desc="Images shown in the portfolio grid on /work"
        >
          <div className="flex flex-col gap-3">
            {workGrid.map((item, i) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2.5 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2a3132] uppercase tracking-wide">
                    Item {i + 1}
                  </span>
                  <button
                    onClick={() => removeWorkItem(item.id)}
                    className="text-xs text-red-400 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => updateWorkItem(item.id, "url", e.target.value)}
                  placeholder="Image URL (https://...)"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#ff5900] transition-colors"
                />
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    updateWorkItem(item.id, "title", e.target.value)
                  }
                  placeholder="Title (optional)"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#ff5900] transition-colors"
                />
                <input
                  type="url"
                  value={item.link ?? ""}
                  onChange={(e) =>
                    updateWorkItem(item.id, "link", e.target.value)
                  }
                  placeholder="Click link (optional, https://...)"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#ff5900] transition-colors"
                />
              </div>
            ))}
            <button
              onClick={addWorkItem}
              className="border-2 border-dashed border-gray-300 rounded-xl py-4 text-sm text-[#5f6566] hover:border-[#ff5900] hover:text-[#ff5900] transition-colors"
            >
              + Add image
            </button>
          </div>
        </Section>

        {/* Bottom save */}
        <div className="flex justify-end mt-4 mb-12">
          <button
            onClick={handleSave}
            className="bg-[#ff5900] text-white rounded-xl px-8 py-3 font-medium hover:bg-[#e04f00] transition-colors"
          >
            {saved ? "✓ Saved!" : "Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
      <h2 className="text-base font-semibold text-[#2a3132] mb-0.5">{title}</h2>
      <p className="text-xs text-[#5f6566] mb-4">{desc}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
