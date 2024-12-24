import { LazyLoadImage } from "react-lazy-load-image-component";
import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import { motion } from "framer-motion";

interface PhotoProps {
  picUrls: string[];
  className?: string;
}
const PhotoGallery = ({ picUrls }: PhotoProps) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        className="min-h-screen"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <p className="sm-max:text-regular-font text-babyHeading-size text-white">
            Capturing the Memories: A Look Inside Tech Start! <br /> Interested
            in joining us?
          </p>
          <div className="mt-[3vw] flex justify-center">
            <HoverButton
              glowOnHover={true}
              link="/apply"
              linkIsInternal={true}
              mode={ButtonMode.GRADIENT}
              text={"Apply Now"}
            />
          </div>
        </div>
        {picUrls.length > 0 && (
          <div className="mx-auto my-8 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
            {picUrls.map((photo: string, index: number) => (
              <LazyLoadImage
                height="auto"
                key={index}
                src={photo}
                width="100%"
              />
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default PhotoGallery;
