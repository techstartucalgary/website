interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = ({ affiliation, name }: ProfileDescriptionProps) => {
  return (
    <div className="mt-[10%] text-center">
      <h3 className="max-[950px]:min-[650px]:text-[1.1rem] max-[350px]:text-[1.2rem] m-0 mx-auto max-w-[350px] text-[1.5rem] font-black text-white md:max-w-full">
        {name}
      </h3>
      <h4 className="max-[950px]:min-[650px]:text-[0.95rem] max-[350px]:text-[1rem] m-0 text-[1.1rem] font-light text-white">
        {affiliation}
      </h4>
    </div>
  );
};

export default ProfileDescription;
