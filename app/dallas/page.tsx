import data from "../data/dallas.json";

export const metadata = {
  title: "Dallas Kids Activities – Indoor Playgrounds & More",
  description:
    "Discover indoor playgrounds and family-friendly activities in Dallas, Texas.",
};

export default function DallasPage() {
  // Filter to ONLY indoor playgrounds
  const indoor = data.filter((v: any) => v?.Category === "Indoor Playground");

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dallas – Kids Activities & Playgrounds</h1>

      <p>
        Your guide to everything kid-friendly in Dallas. Indoor playgrounds,
        splash pads, adventure parks, and more.
      </p>

      <h2>Indoor Playgrounds</h2>

      <ul>
        {indoor.map((venue: any, idx: number) => {
          const slug = venue.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <li key={idx}>
              <a href={`/dallas/indoor-playgrounds/${slug}`}>
                {venue.Name}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
