import * as S from "./SponsorLogo.styles";

type SponsorLogoProps = {
  sponsorLink: string;
  sponsorImage: string;
};

const SponsorLogo = (props: SponsorLogoProps) => {
  return (
    <S.SponsorLogo
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
    </S.SponsorLogo>
  );
};

export default SponsorLogo;
