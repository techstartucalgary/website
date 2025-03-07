import SponsorLogo from "../SponsorLogo";
import HoverButton from "../HoverButton/HoverButton";
import { Organization, SponsorList } from "./SponsorsInfo";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import Divider from "../Divider";

const SponsorSection = () => {
  return (
    <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
      <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
        Our Sponsors
      </h2>
      <Divider />
      <div className="mb-[7%] flex flex-wrap items-center justify-center gap-[1.5em]">
        {SponsorList.map((sponsor: Organization) => {
          return (
            <div
              className="min-w-[10em] basis-[30%] transition-all duration-200 ease-in-out hover:translate-y-[-0.25em]"
              key={sponsor.sponsorLink}
            >
              <SponsorLogo
                sponsorImage={sponsor.sponsorImage}
                sponsorLink={sponsor.sponsorLink}
              />
            </div>
          );
        })}
      </div>
      <div className="mb-[5%]">
        <p className="justify-center text-center text-[1.2rem] text-[var(--secondary-grey)]">
          Special thank you to our industry sponsors, collaboration partners,
          and featured guests. <br />
          Interested? Reach out at&nbsp;
          <b>
            <a href="mailto:external@techstartucalgary.com">
              external@techstartucalgary.com
            </a>
          </b>
          !
        </p>
      </div>
      <div>
        <div className="mb-[1%] flex justify-center">
          <HoverButton
            link="https://drive.google.com/file/d/1yy5uBqSD0DrG2PsMuXg0en8dV3r-wULJ/view"
            linkIsInternal={false}
            mode={ButtonMode.DARK}
            text="Check out our sponsorship package!"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
