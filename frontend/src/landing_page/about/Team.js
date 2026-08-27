import React from "react";
import TeamCard from "./TeamCard";
import teamMembers from "./teamData.js";

function Team() {
  return (
    <section className="container py-5">

      <div className="row g-5">

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[0].image}
            name={teamMembers[0].name}
            designation={teamMembers[0].designation}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[1].image}
            name={teamMembers[1].name}
            designation={teamMembers[1].designation}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[2].image}
            name={teamMembers[2].name}
            designation={teamMembers[2].designation}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[3].image}
            name={teamMembers[3].name}
            designation={teamMembers[3].designation}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[4].image}
            name={teamMembers[4].name}
            designation={teamMembers[4].designation}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <TeamCard
            image={teamMembers[5].image}
            name={teamMembers[5].name}
            designation={teamMembers[5].designation}
          />
        </div>

      </div>

    </section>
  );
}

export default Team;