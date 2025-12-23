import data from "../../data/dallas.json";

export const metadata = {
  title: "Indoor Playgrounds in Dallas (2026 Guide)",
  description:
    "Find the best indoor playgrounds in Dallas for toddlers and kids. See hours, pricing, age ranges, and parent tips.",
};

// Defensive slug function
function slugify(text: string) {
  if (!text || typeof text !== "string") return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function IndoorPlaygroundsPage() {
  // Filter out invalid rows
  const valid = data.filter((v: any) => v?.Name);

  const venues = valid.map((venue: any) => ({
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
