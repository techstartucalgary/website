interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = ({ affiliation, name }: ProfileDescriptionProps) => {
  return (
    <div className="mt-[10%] text-center">
      <h3
        className="m-0 mx-2 text-[2.0rem] font-black tracking-wide text-white"
        style={{
          fontFamily: "Inter, Tahoma, sans-serif",
          lineHeight: "1.4",
          wordBreak: "break-word",
        }}
      >
        {name}
      </h3>
      <h4
        className="m-0 mx-2 mt-4 text-[1.5rem] text-white"
        style={{ fontFamily: "Inter, Tahoma, sans-serif" }}
      >
        {affiliation}
      </h4>
    </div>
  );
};

export default ProfileDescription;
