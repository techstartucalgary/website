import GalleryPage from "@/pageLayouts/GalleryPage";
import { getData } from "../api/gallery";
import { GetServerSideProps } from "next";

interface PhotoProps {
  picUrls: string[];
}

export const getServerSideProps: GetServerSideProps<PhotoProps> = async ({
  req: _req,
  res,
}) => {
  try {
    const data = await getData();
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=20, stale-while-revalidate=120",
    );
    return { props: { picUrls: data ?? [] } };
  } catch (error) {
    console.error("Error fetching photos urls:", error);
    return { props: { picUrls: [] } };
  }
};

export default function Gallery({ picUrls }: PhotoProps) {
  return <GalleryPage picUrls={picUrls} />;
}
