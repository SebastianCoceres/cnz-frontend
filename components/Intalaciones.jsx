import React from "react";
import ImgGallery from "./ImgGallery";

function Intalaciones({ data }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
      className="section-container text-gray-600 px-5  lg:container mx-auto"
    >
      <div className="w-full mx-auto">
        <h3 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900 mt-8">
          Nuestras instalaciones
        </h3>
        <div className="flex flex-col w-full mb-20 mt-4">
          <div>
            <p className="leading-relaxed text-base">
              Una <strong>sala de entrenamientos funcionales</strong> de más de
              200m2 donde practicar CrossTraining, Funcional Training, Core y
              Movilidad.
            </p>
            <p className="leading-relaxed text-base">
              La <strong>Sala Ebro</strong>, con vista panorámica del río Ebro y
              el Puente de Piedra, donde puedes cuidarte entrenando Pilates y
              Espalda Sana.
            </p>
            <p className="leading-relaxed text-base">
              También puedes iniciarte en los Deportes Náuticos remo,
              piragüismo, Paddle Surf asistiendo a nuestros{" "}
              <strong>cursos y entrenamientos.</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((img, i) => (
            <ImgGallery
              key={`img-${i}`}
              src={`${process.env.NEXT_PUBLIC_BASEURL}${img.attributes.image.data.attributes.url}`}
              title={img.attributes.Title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intalaciones;
