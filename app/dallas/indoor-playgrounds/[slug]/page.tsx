"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import data from "../../../data/dallas.json";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function VenuePage() {
  const params = useParams();
  const slug = params.slug as string;

  const venues = data.map((venue: any) => ({
    ...venue,
    slug: slugify(venue.Name),
  }));

  const venue = venues.find((v: any) => v.slug === slug);

  useEffect(() => {
    if (!venue) return;

    document.title = `${venue.Name} – Indoor Playground in Dallas`;

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      `${venue.Name} is an indoor playground in the Dallas area. See hours, pricing, age range, and what parents should know before visiting.`
    );
  }, [venue]);

  if (!venue) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Venue not found</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>{venue.Name}</h1>

      <p>{venue.Description}</p>

      <h3>Location</h3>
      <p>
        {venue.Address}
        <br />
        {venue.City}, {venue.State} {venue["Zip Code"]}
      </p>

      <h3>Phone</h3>
      <p>{venue["Phone Number"]}</p>

      <h3>Hours of Operation</h3>
      <ul>
        <li>{venue["Sunday Hours"]}</li>
        <li>{venue["Monday Hours"]}</li>
        <li>{venue["Tuesday Hours"]}</li>
        <li>{venue["Wednesday Hours"]}</li>
        <li>{venue["Thursday Hours"]}</li>
        <li>{venue["Friday Hours"]}</li>
        <li>{venue["Saturday Hours"]}</li>
      </ul>

      <h3>Pricing</h3>
      <p>{venue.Pricing}</p>

      <h3>Age Range</h3>
      <p>{venue["Age Range Suitability"]}</p>

      <h3>What Parents Should Know</h3>
      <p>{venue["What Parents Should Know"]}</p>

      <hr />

      <p>
        <a href="/dallas/indoor-playgrounds">
          ← Back to all indoor playgrounds in Dallas
        </a>
      </p>
    </main>
  );
}
