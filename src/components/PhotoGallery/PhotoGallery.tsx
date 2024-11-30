import { PicturesContainer, PicturesHeader } from "./PhotoGallery.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import Loading from "../Loading";
import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import * as S from "../../pageLayouts/GalleryPage.styles";

interface PhotoProps {
  picUrls: string[];
}
const PhotoGallery = ({ picUrls }: PhotoProps) => {
  return (
    <>
      <PicturesHeader
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <S.GalleryPageHeader>
          <p>
            Capturing the Memories: A Look Inside Tech Start! <br /> Interested
            in joining us?
          </p>
          <div>
            <HoverButton
              glowOnHover={true}
              link="/apply"
              linkIsInternal={true}
              mode={ButtonMode.GRADIENT}
              text={"Apply Now"}
            />
          </div>
        </S.GalleryPageHeader>
        {picUrls.length > 0 && (
          <PicturesContainer>
            {picUrls.map((photo: string, index: number) => (
              <LazyLoadImage
                height="auto"
                key={index}
                src={photo}
                width="100%"
              />
            ))}
          </PicturesContainer>
        )}
      </PicturesHeader>
    </>
  );
};

export default PhotoGallery;
