import React from "react";
import TeamCard from "../components/TeamCard";

const Team = [
  { name: "José Manuel Larroy Calvo", job: "Presidente" },
  { name: "Juan Quílez Montañés", job: "Vicepresidente" },
  { name: "Ángel Ordovás Soriano", job: "Secretario" },
  { name: "Pedro Oliván Ferrando", job: "Tesorero" },
  { name: "Carlos Ezquerro Ibarra", job: "Piragüismo" },
  { name: "Carlos Belled Lacasa", job: "Remo" },
  { name: "Ignacio Martínez Bermejo", job: "Salvamento Y Socorrismo" },
];

function OutTeam() {
  return (
    <section className="text-gray-600 px-4 container mx-auto py-24 flex items-center">
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Nuestro equipo
          </h3>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Este Club Deportivo está dirigido por una Junta Directiva elegida
            entre sus socios y abonados, más de 300 actualmente, y que está
            compuesta por las siguientes personas:
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {Team.map((person, i) => {
            return (
              <TeamCard
                key={`person-${i}`}
                person={person.name}
                job={person.job}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OutTeam;
