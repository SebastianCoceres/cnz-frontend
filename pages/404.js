import kettle from "../public/kettle_404.png";
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center">
      <Image src={kettle}></Image>
      <h2 className="text-bold lg:font-bold">Página no encontrada</h2>
    </section>
  );
}
  