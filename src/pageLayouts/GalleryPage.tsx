import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import { motion } from "framer-motion";
import * as S from "./GalleryPage.styles";
import dynamic from "next/dynamic";

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const GalleryPage = () => {
  return (
    <S.GalleryPage id="galleryPageTop">
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
      <S.GalleryPageHeader>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>
      </S.GalleryPageHeader>

      <PhotoGallery />
    </S.GalleryPage>
  );
};

export default GalleryPage;
