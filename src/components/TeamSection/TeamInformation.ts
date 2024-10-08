import teamData from "./teamMembers.json";

// dynamically import image based on the imageName parameter
const importImage = (imageName: string) => {
  return require(`../../images/team/${imageName}`);
};

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  imagePath: string;
  linkedin: string;
};

type FounderDescription = {
  description: string;
};

export type FounderInfo = TeamMember & FounderDescription;

export const founder: FounderInfo = {
  ...teamData.founder,
  imagePath: importImage(teamData.founder.imagePath),
};

export const executiveTeam: TeamMember[] = teamData.executiveTeam.map(
  (exec, index) => ({
    id: index,
    ...exec,
    image: importImage(exec.imagePath),
  }),
);

export const projectManagers: TeamMember[] = teamData.projectManagers?.length
  ? teamData.projectManagers.map((pm: TeamMember, index: number) => ({
      affiliation: pm.affiliation,
      id: index,
      imagePath: importImage(pm.imagePath),
      linkedin: pm.linkedin,
      name: pm.name,
    }))
  : [
      {
        affiliation: "",
        id: 0,
        imagePath: "",
        linkedin: "",
        name: "Coming Soon",
      },
    ];

export const alumniTeam: TeamMember[] = teamData.alumniTeam.map(
  (alum, index) => ({
    id: index,
    ...alum,
    image: importImage(alum.imagePath),
  }),
);

export const boardMembers: TeamMember[] = teamData.boardMembers.map(
  (bm, index) => ({
    id: index,
    ...bm,
    image: importImage(bm.imagePath),
  }),
);
