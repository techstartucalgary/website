import { ApplicationContent } from "./ApplySection.styles";

type ApplySectionProps = {
  role: string;
  description: string;
  statusIsOpen: boolean;
  applicationLink: string;
  closedStatus: string;
  deadline: string;
};

const ApplySection = (props: ApplySectionProps) => (
  <ApplicationContent data-aos="fade-down" data-aos-duration="1000">
    <li>
      <h2>{props.role}</h2> <br></br>
      <p>{props.description}</p>
    </li>
    {props.statusIsOpen ? (
      <a href={props.applicationLink} rel="noreferrer" target="_blank">
        <button className="absolute inset-x-0 bottom-0 mx-[18%] mb-[-12.5%] rounded-md border-2 border-transparent bg-[var(--primary-green)] px-4 py-2 font-bold uppercase text-white shadow-md hover:scale-[1.03] hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)] focus:border-[var(--primary-green)] focus:bg-white focus:text-[var(--primary-green)]">
          Apply Now
        </button>
      </a>
    ) : (
      <h4 className="absolute inset-x-0 bottom-0 mx-[18%] mb-[-12.5%] rounded-md border-2 border-[var(--primary-green)] bg-white px-4 py-2 font-bold uppercase text-[var(--primary-green)] shadow-md">
        {props.closedStatus}
      </h4>
    )}
    <h5>{props.deadline}</h5>
  </ApplicationContent>
);
export default ApplySection;
