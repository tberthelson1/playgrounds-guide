import data from "./data/saltlakecity.json";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Indoor Playgrounds – Salt Lake City</h1>
      <p>Total venues: {data.length}</p>

      <ul>
        {data.map((venue: any, idx: number) => (
        <li key={`${venue.Name}-${idx}`}>{venue.Name}</li>
        ))}
      </ul>
    </main>
  );
}
