import axios from "axios";

export async function getData() {
  const albumUrl = process.env.GOOGLE_PHOTOS_URL; // Use environment variable
  const response = await axios.get(albumUrl, { responseType: "text" });
  const photoLinks = extractPhotos(response.data);
  return photoLinks;
}

function extractPhotos(content) {
  const regex = /(https:\/\/lh3\.googleusercontent\.com\/pw\/[^"']+)["']/g;
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    if (!match[1].includes("=w") && !match[1].includes("=s")) {
      links.add(match[1]);
    }
  }
  return Array.from(links);
}
