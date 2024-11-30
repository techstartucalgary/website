import GalleryPage from "@/pageLayouts/GalleryPage";
import { getData } from "../api/gallery";

export async function getServerSideProps({ req, res}) {
  try {
    const data = await getData();
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=20, stale-while-revalidate=120",
    );
    return { props: { picUrls: data || [] } };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return { props: { picUrls: [] } }; // Provide an empty array as fallback
  }
}
interface PhotoProps {
  picUrls: string[];
}
export default function Gallery({ picUrls }: PhotoProps) {
  return <GalleryPage picUrls={picUrls} />;
}
