import React from "react";
import ImgGallery from "./ImgGallery";
import instalacion1 from "../public/assets/sala-ebro.JPG";
import instalacion2 from "../public/assets/instalaciones-1.jpg";
import instalacion3 from "../public/assets/instalaciones-2.jpg";
import instalacion4 from "../public/assets/almacen.JPG";

let photos = [
  { url: instalacion1.src, title: "Sala Ebro" },
  { url: instalacion2.src, title: "Gimnasio" },
  { url: instalacion3.src, title: "Gimnasio" },
  { url: instalacion4.src, title: "Almacén" },
];

function Intalaciones() {
  return (
    <section className="text-gray-600 px-4 py-24 flex items-center container mx-auto">
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h3 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
            Nuestras instalaciones
          </h3>
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
          {photos.map((img, i) => (
            <ImgGallery key={`img-${i}`} src={img.url} title={img.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intalaciones;
