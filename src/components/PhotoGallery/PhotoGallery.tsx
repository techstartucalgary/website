import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
          <p className="text-babyHeading-size text-white sm-max:text-regular-font">
            Capturing the Memories: A Look Inside Tech Start! <br /> Interested
            in joining us?
          </p>
          <div className="my-[3vw] flex justify-center">
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
          <div className="mx-auto mb-6 max-w-5xl columns-1 gap-4 sm:columns-2 lg:columns-3">
            {picUrls.map((photo_url: string, index: number) => (
              // <Image
              //   alt={`gallery picture ${index}`}
              //   className="my-3"
              //   height={0}
              //   key={index}
              //   layout="intrinsic"
              //   sizes="100vw"
              //   src={photo_url}
              //   style={{ height: "auto", width: "100%" }}
              //   width={0}
              // />
              <LazyLoadImage
                height="auto"
                key={index}
                src={photo_url}
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
