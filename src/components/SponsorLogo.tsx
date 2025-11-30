import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type SponsorLogoProps = {
  sponsorLink: string;
  sponsorImage: StaticImageData | string;
  alt: string;
};

const SponsorLogo = ({ alt, sponsorImage, sponsorLink }: SponsorLogoProps) => {
  const resolvedSrc =
    typeof sponsorImage === "string" ? sponsorImage : sponsorImage.src;
  const isSvg = resolvedSrc?.toLowerCase().endsWith(".svg");

  const sharedProps = {
    alt,
    className: "mx-auto h-auto w-full max-w-[260px]",
    loading: "lazy" as const,
  };

  return (
    <Link
      aria-label={`Visit ${alt}`}
      className="relative m-5 block opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"
      href={sponsorLink}
      rel="noreferrer"
      target="_blank"
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ amount: 0.2, once: false }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
      >
        {isSvg ? (
          <img {...sharedProps} src={resolvedSrc} />
        ) : typeof sponsorImage === "string" ? (
          <img {...sharedProps} src={sponsorImage} />
        ) : (
          <Image {...sharedProps} sizes="260px" src={sponsorImage} />
        )}
      </motion.div>
    </Link>
  );
};

export default SponsorLogo;
