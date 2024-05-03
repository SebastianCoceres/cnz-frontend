import useFormateTime from "../hooks/useFormateTime";
import Link from "next/link";

function SportCalendar({ calendar, panelWidth }) {
  return (
    <div key={`calendar-${calendar.id}`} className={`w-full  mb-8 px-4 ${panelWidth}`}>
      <div className="border rounded-lg overflow-hidden h-full">
        <p className="text-xl font-bold mb-4 bg-gray-900 p-4 text-white">
          <Link
            legacyBehavior
            href={`/secciones/${calendar.attributes.sports_group.data.attributes.slug}/${calendar.attributes.slug}`}
          >
            <a>{calendar.attributes.title}</a>
          </Link>
        </p>
        <div className="px-4">
          {calendar.attributes.calendario.map((d) => {
            return (
              <div
                key={`dia-${d.id}`}
                className="flex flex-col lg:flex-row mb-4 lg:items-center"
              >
                <span className="font-bold w-full lg:w-[5em] block mr-4 mb-2 lg:mb-0 text-xl ">
                  {d.dias.data[0].attributes.dias}:
                </span>
                <ul className="flex flex-wrap items-center">
                  {d.horarios.data.sort((a, b) => parseInt(a.attributes.Hora) - parseInt(b.attributes.Hora)).map((h) => {
                    return (
                      <li
                        className="inline-block lg:m-0 px-4 py-2  rounded-md"
                        key={`horario-${h.id}`}
                      >
                        <span className="text-md">
                          {useFormateTime(h.attributes.Hora)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SportCalendar;
