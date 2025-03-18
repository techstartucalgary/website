interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = ({ affiliation, name }: ProfileDescriptionProps) => {
  return (
    <div className="mt-[10%] text-center">
      <h3
        className="m-0 mx-2 text-[1.4rem] font-black tracking-wide text-white sm:text-[2.0rem]"
        style={{
          fontFamily: "Inter, Tahoma, sans-serif",
          lineHeight: "1.4",
        }}
      >
        {name}
      </h3>
      <h4
        className="m-0 mx-2 mt-2 max-w-[90%] whitespace-normal break-words text-[1rem] text-white sm:max-w-full sm:text-[1.5rem]"
        style={{ fontFamily: "Inter, Tahoma, sans-serif" }}
      >
        {affiliation}
      </h4>
    </div>
  );
};

export default ProfileDescription;
