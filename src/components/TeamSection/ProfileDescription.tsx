interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = ({ affiliation, name }: ProfileDescriptionProps) => {
  return (
    <div className="mt-[20%] text-center font-[Inter]">
      <h3 className="m-0 text-[1.1rem] font-black text-white">{name}</h3>
      <h4 className="m-0 text-[0.95rem] text-white">{affiliation}</h4>
    </div>
  );
};

export default ProfileDescription;
