import React from "react";

function ImgGallery({
  src = "https://dummyimage.com/600x360",
  size = "lg:w-1/3 sm:w-1/2 w-full p-4 h-64",
  title,
}) {
  return (
    <div className={size}>
      <div className="flex relative h-full">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={src}
        />
        <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white/75 backdrop:blur opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end">
          <h2 className="tracking-widest text-lg title-font font-bold text-indigo-500 mb-1">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ImgGallery;