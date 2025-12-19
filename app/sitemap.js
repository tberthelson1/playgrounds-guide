import data from "./data/saltlakecity.json";

export default function sitemap() {
  const baseUrl = "https://playgroundsguide.com";

  // Create slugs for each venue (same slugify logic used in your pages)
  const venueUrls = data.map((venue) => {
    const slug = venue.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return {
      url: `${baseUrl}/salt-lake-city/indoor-playgrounds/${slug}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [
    // Homepage
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },

    // City hub
    {
      url: `${baseUrl}/salt-lake-city`,
      lastModified: new Date().toISOString(),
    },

    // Indoor playground category page
    {
      url: `${baseUrl}/salt-lake-city/indoor-playgrounds`,
      lastModified: new Date().toISOString(),
    },

    // All venue detail pages
    ...venueUrls,
  ];
}
