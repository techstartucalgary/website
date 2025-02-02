import { ApplicationContent } from "./ApplySection.styles";
import styles from "./ApplySection.module.css";

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
        <button className={styles.applyPage__btn}>Apply Now</button>
      </a>
    ) : (
      <h4 className={styles.applyPage__closed}>{props.closedStatus}</h4>
    )}
    <h5>{props.deadline}</h5>
  </ApplicationContent>
);
export default ApplySection;
