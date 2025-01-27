interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = ({ affiliation, name }: ProfileDescriptionProps) => {
  return (
    <div className="font-inter -mt-20 w-full text-center">
      <h3 className="m-0 text-2xl font-extrabold text-white sm:text-xl md:text-lg">
        {name}
      </h3>
      <h4 className="m-0 text-lg font-light text-white sm:text-sm md:text-base">
        {affiliation}
      </h4>
    </div>
  );
};

export default ProfileDescription;
