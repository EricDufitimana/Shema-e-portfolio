const STORAGE_KEY = "shema_image_store";

export interface WorkItem {
  id: string;
  url: string;
  title: string;
  link?: string;
}

export interface ImageStore {
  // Hero section (4 floating photos)
  hero1: string;
  hero2: string;
  hero3: string;
  hero4: string;
  // Gallery thumbnails (video covers)
  video1: string;
  video2: string;
  // Sneak-peek gallery images
  gallery1: string;
  gallery1Link: string;
  gallery2: string;
  gallery2Link: string;
  gallery3: string;
  gallery3Link: string;
  gallery4: string;
  gallery4Link: string;
  gallery5: string;
  gallery5Link: string;
  // Design-in-Action project covers
  project1: string;
  project1Link: string;
  project2: string;
  project2Link: string;
  project3: string;
  project3Link: string;
  project4: string;
  project4Link: string;
  // Behind-the-Canvas portraits
  portrait1: string;
  portrait2: string;
  portrait3: string;
  // Testimonial avatars
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
  // Sidebar template preview
  template: string;
  templateLink: string;
  // /work page grid
  workGrid: WorkItem[];
}

function readStore(): Partial<ImageStore> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<ImageStore>) : {};
  } catch {
    return {};
  }
}

export function saveStore(data: Partial<ImageStore>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/** Returns the custom URL for a key, or null if not set. */
export function getImg(key: keyof Omit<ImageStore, "workGrid">): string | null {
  const store = readStore();
  const val = store[key];
  return typeof val === "string" && val.trim() ? val.trim() : null;
}

export function getWorkGrid(): WorkItem[] {
  const store = readStore();
  return Array.isArray(store.workGrid) ? store.workGrid : [];
}

export function getAllStore(): Partial<ImageStore> {
  return readStore();
}
