export const metadata = {
  title: "PlaygroundsGuide – Indoor Playgrounds, Splash Pads & Kids Activities",
  description:
    "Discover the best indoor playgrounds, splash pads, and kid-friendly activities by city. Browse curated local guides for families looking for fun.",
};

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>PlaygroundsGuide</h1>

      <p>
        Welcome to your centralized guide for kid-friendly activities across the
        country. We collect and organize indoor playgrounds, splash pads, family
        attractions, and toddler-friendly locations — all in one place.
      </p>

      <h2>Browse Cities</h2>
      <p>The list will grow as more cities are added. Starting with:</p>

      <ul>
        <li>
          <a href="/salt-lake-city">Salt Lake City, Utah</a>
          <a href="/dallas">Dallas, Texas</a>
        </li>
      </ul>

      <p style={{ marginTop: "2rem", opacity: 0.7 }}>
        More cities coming soon: Dallas, Phoenix, Seattle, Tampa, Minneapolis,
        Miami, and more.
      </p>
    </main>
  );
}
