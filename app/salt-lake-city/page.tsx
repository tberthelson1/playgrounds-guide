import data from "../../data/saltlakecity.json";

export const metadata = {
  title: "Salt Lake City Kids Activities – Indoor Playgrounds, Splash Pads & More",
  description:
    "Discover the best indoor playgrounds, kids activities, and family-friendly places in Salt Lake City. Browse hours, pricing, locations, and everything parents need to know.",
};

export default function SaltLakeCityPage() {
  const venues = data;

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Salt Lake City – Kids Activities & Playgrounds</h1>

      <p>
        Your one-stop guide to all things kid-friendly in Salt Lake City. From
        indoor playgrounds to splash pads, adventure parks, trampoline centers,
        and toddler-friendly play spaces, this page will become the hub for
        every category of local play.
      </p>

      <h2>Indoor Playgrounds in Salt Lake City</h2>
      <p>
        Below is a preview of indoor playgrounds in the area. Click to see full
        details, pricing, age ranges, hours, and parent tips.
      </p>

      <ul>
        {venues.map((venue: any) => {
          const slug = venue.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <li key={slug}>
              <a href={`/salt-lake-city/indoor-playgrounds/${slug}`}>
                {venue.Name}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
