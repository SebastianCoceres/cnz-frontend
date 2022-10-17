import React from "react";
import Image from "next/image";

function FileImage({ file }) {
  return (
    <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 aspect-[4/3] mb-4 relative overflow-hidden">
      <div className="h-full border border-slate-100 relative">
        <Image
          className="w-full h-full object-cover"
          src={`${process.env.NEXT_PUBLIC_BASEURL}${file.url}`}
          alt={file.alternativeText}
          layout="fill"
        />
        {file.caption && (
          <p className="w-[98%] h-min hidden lg:flex p-4 font-bold text-gray-900 bg-white/50 backdrop-blur-sm break-words absolute -bottom-[100%] left-[50%] -translate-x-[50%] group-hover:bottom-1 transition-all duration-500  items-end justify-center rounded-t-lg">
            {file.caption}
          </p>
        )}
      </div>
    </div>
  );
}

export default FileImage;
