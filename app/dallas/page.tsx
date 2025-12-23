export const metadata = {
  title: "Dallas Kids Activities – Indoor Playgrounds & More",
  description:
    "Discover indoor playgrounds and family-friendly kids activities in Dallas, Texas.",
};

import data from "../data/dallas.json";

// Utility: safely generate slugs even if fields are messy
function safeSlug(text: string) {
  if (!text || typeof text !== "string") return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function DallasPage() {
  // Filter to real venues (skip bad rows)
  const valid = data.filter((v: any) => v?.Name);

  // TEMP: treat ALL rows as indoor playgrounds until categories are added
  const indoor = valid;

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dallas – Kids Activities & Playgrounds</h1>

      <p>
        Your guide to everything kid-friendly in Dallas. Indoor playgrounds,
        splash pads, adventure parks, trampoline centers, and more coming soon.
      </p>

      <h2>Indoor Playgrounds</h2>

      <ul>
        {indoor.map((venue: any, idx: number) => {
          const slug = safeSlug(venue.Name);
          return (
            <li key={idx}>
              <a href={`/dallas/indoor-playgrounds/${slug}`}>{venue.Name}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
