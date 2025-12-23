import type { Metadata } from "next";
import data from "../../../data/dallas.json";

export const metadata = {
  title: "Indoor Playgrounds in Dallas (2026 Guide)",
  description:
    "Find the best indoor playgrounds in Dallas for toddlers and kids. See hours, pricing tips, age ranges, and what parents should know before visiting.",
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function IndoorPlaygroundsPage() {
  const venues = data.map((venue: any) => ({
    ...venue,
    slug: slugify(venue.Name),
  }));

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Indoor Playgrounds in Dallas</h1>

      <ul>
        {venues.map((venue: any, idx: number) => (
          <li key={`${venue.slug}-${idx}`}>
            <a href={`/dallas/indoor-playgrounds/${venue.slug}`}>
              {venue.Name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
