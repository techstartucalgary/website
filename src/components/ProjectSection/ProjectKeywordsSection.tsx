import { NewlineText } from "../../utility/Helpers";
import {
  businessStrategyLottieOptions,
  designLottieOptions,
  handshakeLottieOptions,
  programmingLottieOptions,
  projectManagementLottieOptions,
  webDevelopmentLottieOptions,
} from "../../utility/LottieOptions";
import useViewport from "../UseViewport";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ProjectKeywordsSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieDiv = (options: any) => (
    <div
      className="max-width-thousand:h-[30vw] max-width-thousand:w-[30vw] h-[15vw] w-[15vw]"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <Lottie {...options} />
    </div>
  );

  const projectKeyword = (keyword: JSX.Element[]) => (
    <h3
      className="babyHeading babyHeading--white max-xs:text-base mr-[10%] [&>p]:m-0"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {keyword}
    </h3>
  );

  const GridItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="ml-auto flex items-center justify-center">{children}</div>
  );
  const { width } = useViewport(); // get screen width

  return (
    <div className="max-width-thousand:grid-cols-2 max-width-thousand:pr-0 max-xs:pl-[10vw] px-[3vw] py-[7vw] [&>div]:grid [&>div]:grid-cols-2 [&>div]:pr-[12vw] [&>div]:text-right [&>h3]:self-center">
      {width && width > 1000 ? (
        <div>
          <GridItem>
            {projectKeyword(NewlineText("Business\nStrategy"))}
            {lottieDiv(businessStrategyLottieOptions)}
          </GridItem>

          <GridItem>
            {projectKeyword(NewlineText("Design"))}
            {lottieDiv(designLottieOptions)}
          </GridItem>

          <GridItem>
            {projectKeyword(NewlineText("Requirements\nEngineering"))}
            {lottieDiv(handshakeLottieOptions)}
          </GridItem>

          <GridItem>
            {projectKeyword(NewlineText("Project\nManagement"))}
            {lottieDiv(projectManagementLottieOptions)}
          </GridItem>

          <GridItem>
            {projectKeyword(NewlineText("Programming"))}
            {lottieDiv(programmingLottieOptions)}
          </GridItem>

          <GridItem>
            {projectKeyword(NewlineText("Web/Mobile\nDevelopment"))}
            {lottieDiv(webDevelopmentLottieOptions)}
          </GridItem>
        </div>
      ) : (
        <div>
          {projectKeyword(NewlineText("Business\nStrategy"))}
          {lottieDiv(businessStrategyLottieOptions)}

          {projectKeyword(NewlineText("Design"))}
          {lottieDiv(designLottieOptions)}

          {projectKeyword(NewlineText("Requirements\nEngineering"))}
          {lottieDiv(handshakeLottieOptions)}

          {projectKeyword(NewlineText("Project\nManagement"))}
          {lottieDiv(projectManagementLottieOptions)}

          {projectKeyword(NewlineText("Programming"))}
          {lottieDiv(programmingLottieOptions)}

          {projectKeyword(NewlineText("Web/Mobile\nDevelopment"))}
          {lottieDiv(webDevelopmentLottieOptions)}
        </div>
      )}
    </div>
  );
};

export default ProjectKeywordsSection;
