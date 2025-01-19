import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });
interface PhotoProps {
  picUrls: string[];
  className?: string;
}

const GalleryPage = ({ picUrls }: PhotoProps) => {
  return (
    <div
      className="relative box-border min-h-screen overflow-hidden scroll-smooth whitespace-normal bg-gradient-to-b from-dark-background to-dark-background-end p-0 font-sans"
      id="galleryPageTop"
    >
      <Blobbie
        edge={true}
        id={2}
        transform="translate(80vw, 0vw)"
        width={300}
      />
      <Blobbie
        edge={false}
        id={8}
        transform="translate(-10vw, 10vw)"
        width={250}
      />
      <div className="text-center text-title-size text-white">
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>
      </div>
      <PhotoGallery picUrls={picUrls} />
    </div>
  );
};

export default GalleryPage;
