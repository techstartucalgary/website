import React, { useState, useCallback } from "react";
import { prevExecTeamList, PrevExecTeam } from "./PreviousExecTeamsInfo";
import Divider from "../Divider";
import ChevronButton from "../ChevronButton";
import Image from "next/image";

const PreviousExecTeam = () => {
  const [selectedYear, setSelectedYear] = useState(
    prevExecTeamList[prevExecTeamList.length - 1].year,
  );

  const getSelectedYearIndex = useCallback((): number => {
    return prevExecTeamList.findIndex((data) => data.year === selectedYear);
  }, [selectedYear]);

  const handleLeftArrow = useCallback(() => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex > 0) {
      setSelectedYear(prevExecTeamList[selectedYearIndex - 1].year);
    }
  }, [getSelectedYearIndex]);
  const handleRightArrow = useCallback(() => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex < prevExecTeamList.length - 1) {
      setSelectedYear(prevExecTeamList[selectedYearIndex + 1].year);
    }
  }, [getSelectedYearIndex]);

  return (
    <div className="mr-auto bg-white pb-8 text-center [&>]:text-black">
      <Divider />
      <div className="py-8 text-center font-sans text-[2.5rem] font-extrabold">
        Previous Executives
      </div>
      <div className="mx-auto flex justify-center">
        <ChevronButton
          direction="left"
          handleClick={handleLeftArrow}
          isDisabled={getSelectedYearIndex() === 0}
        />
        <div className="mx-1 rounded-lg border border-gray-300 bg-transparent px-8 py-2 text-lg text-gray-800 transition-colors duration-300">
          <div>{selectedYear}</div>
        </div>
        <ChevronButton
          direction="right"
          handleClick={handleRightArrow}
          isDisabled={
            getSelectedYearIndex() === prevExecTeamList.length - 1
              ? true
              : false
          }
        />
      </div>

      {prevExecTeamList
        .filter((team) => team.year === selectedYear)
        .map((team: PrevExecTeam) => {
          return (
            <>
              <div className="mx-auto my-12 w-2/5 md-max:w-4/5">
                {team.picture ? (
                  <Image
                    alt={" "}
                    sizes="100vw"
                    src={team.picture}
                    style={{
                      borderRadius: "0.75rem",
                      boxShadow: "0rem 1.5rem 2rem -1.5rem rgba(0, 0, 0, 0.7)",
                      height: "auto",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                ) : (
                  <p>No picture available</p>
                )}
              </div>
              {/* </S.Carousel> */}
              <div className="mx-auto grid max-w-[85%] grid-cols-3 gap-8 md-max:grid-cols-2">
                {team.members.length > 0 && (
                  <>
                    {team.members.map((member, index) => (
                      <div className="rounded-lg bg-gray-100 py-4" key={index}>
                        <div style={{ justifyContent: "center" }}>
                          <a
                            className="mb-2 text-xl font-bold text-black transition-colors duration-200 hover:text-[#4dd6a8] hover:underline"
                            href={member.linkedin_url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {member.name}
                          </a>
                          <p className="mb-[0.3rem] text-base">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default React.memo(PreviousExecTeam);
