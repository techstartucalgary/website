import teamData from "./teamMembers.json";

// dynamically import image based on the imageName parameter
//const importImage = (imageName: string) => `../../images/team/${imageName}`;

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
};

type FounderDescription = {
  description: string;
};

export type FounderInfo = TeamMember & FounderDescription;

export const founder: FounderInfo = {
  ...teamData.founder,
  image: teamData.founder.imagePath,
};

export const executiveTeam: TeamMember[] = teamData.executiveTeam.map(
  (exec, index) => ({
    id: index,
    ...exec,
    image: exec.imagePath,
  }),
);

export const projectManagers: TeamMember[] = teamData.projectManagers?.length
  ? teamData.projectManagers.map((pm, index) => ({
      id: index,
      ...pm,
      image: pm.imagePath,
    }))
  : [
      {
        affiliation: "",
        id: 0,
        image: "",
        linkedin: "",
        name: "Coming Soon",
      },
    ];

export const alumniTeam: TeamMember[] = teamData.alumniTeam.map(
  (alum, index) => ({
    id: index,
    ...alum,
    image: alum.imagePath,
  }),
);

export const boardMembers: TeamMember[] = teamData.boardMembers.map(
  (bm, index) => ({
    id: index,
    ...bm,
    image: bm.imagePath,
  }),
);
