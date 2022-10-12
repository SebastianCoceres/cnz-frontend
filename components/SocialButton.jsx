import React from "react";

function SocialButton({ title, children, link }) {
  return (
    <a
      target="_blank"
      rel="noopener nofollow noreferrer"
      href={link}
      className="group w-full text-gray-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none hover:text-white pl-8"
    >
      {children}
      <span className="ml-8 flex items-start flex-col leading-none">
        <span className="title-font font-medium">{title}</span>
      </span>
    </a>
  );
}

export default SocialButton;
