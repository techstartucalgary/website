import Link from "next/link";

type SponsorLogoProps = {
  sponsorLink: string;
  sponsorImage: string;
};

const SponsorLogo = (props: SponsorLogoProps) => {
  return (
    <Link
      className="relative m-5 block opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"
      data-aos="zoom-in-up"
      href={props.sponsorLink}
      target="blank"
    >
      <img
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        src={props.sponsorImage}
      />
    </Link>
  );
};

export default SponsorLogo;
