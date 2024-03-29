import React from "react";
import TeamCard from "./molecules/TeamCard";

function OutTeam({ team }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
      className="section-container text-gray-600 px-5 lg:container mx-auto py-24 flex items-center"
    >
      <div className="full-width mx-auto">
        <h3 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900 mt-8">
          Nuestro equipo
        </h3>
        <div className="flex flex-col w-full mb-8">
          <p className="mt-4 mx-auto leading-relaxed text-base">
            Este Club Deportivo está dirigido por una Junta Directiva elegida
            entre sus socios y abonados, más de 300 actualmente, y que está
            compuesta por las siguientes personas:
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {team
            .sort((a, b) => a.attributes.orden - b.attributes.orden)
            .map((person, i) => {
              return (
                <TeamCard
                  key={`person-${person.id}`}
                  person={person.attributes.Nombre}
                  job={person.attributes.Puesto}
                  social={person.attributes.socialmedia}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default OutTeam;
