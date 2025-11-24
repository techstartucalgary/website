type ApplySectionProps = {
  applicationLink: string;
  closedStatus: string;
  deadline: string;
  description: string;
  role: string;
  statusIsOpen: boolean;
};

const ApplySection = (props: ApplySectionProps) => (
  <div
    className="relative mb-[30%] rounded-[10px] bg-white p-8 text-center text-[clamp(16px,_calc(0.15vw+16px),_22px)] font-light leading-[30px] text-[rgb(20,20,20)] md:mb-[5%] md:w-[30%]"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <li>
      <h2 className="text-xl font-semibold">{props.role}</h2>
      <br />
      <p className="mb-[10%] max-w-full sm:mb-[20%] md:mb-0 lg:mb-[15%]">
        {props.description}
      </p>
    </li>
    {props.statusIsOpen ? (
      <a href={props.applicationLink} rel="noreferrer" target="_blank">
        <button className="absolute inset-x-0 bottom-0 mx-[18%] mb-[-12.5%] rounded-md border-2 border-transparent bg-[var(--primary-green)] px-4 py-2 font-bold uppercase text-white shadow-md transition-transform hover:scale-[1.03] hover:border-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-green)] focus:border-[var(--primary-green)] focus:bg-white focus:text-[var(--primary-green)]">
          Apply Now
        </button>
      </a>
    ) : (
      <h4 className="absolute inset-x-0 bottom-0 mx-[18%] mb-[-12.5%] rounded-md border-2 border-[var(--primary-green)] bg-white px-4 py-2 font-bold uppercase text-[var(--primary-green)] shadow-md">
        {props.closedStatus}
      </h4>
    )}

    <h5 className="text-shadow-[0.5px_0.5px_gray]">{props.deadline}</h5>
  </div>
);
export default ApplySection;
