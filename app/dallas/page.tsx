export const metadata = {
  title: "Dallas Kids Activities – Indoor Playgrounds & More",
  description:
    "Discover the best indoor playgrounds and kids activities in Dallas, Texas.",
};

import data from "../data/dallas.json";

export default function DallasPage() {
  const venues = data || [];

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dallas – Kids Activities & Playgrounds</h1>
          <p>
        Your one-stop guide to all things kid-friendly in Dallas. From
        indoor playgrounds to splash pads, adventure parks, trampoline centers,
        and toddler-friendly play spaces, this page will become the hub for
        every category of local play.
      </p>
      <h2>Indoor Playgrounds</h2>
             <p>
        Below is a preview of indoor playgrounds in the area. Click to see full
        details, pricing, age ranges, hours, and parent tips.
            </p>
      <ul>
        {venues.map((venue: any) => {
          const slug = venue.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <li key={slug}>
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
