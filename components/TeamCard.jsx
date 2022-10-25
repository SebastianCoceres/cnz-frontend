import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function TeamCard({ person, job, social }) {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-start border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{person}</h2>
          <p className="text-gray-500">{job}</p>
          {social.length > 0 && (
            <div className="flex justify-end text-2xl">
              {social.map((sm) => {
                return (
                  <a
                    title={sm.user}
                    href={sm.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {sm.icon == "FaInstagram" && <FaInstagram />}
                    {sm.icon == "FaFacebookSquare" && <FaFacebookSquare />}
                    {sm.icon == "FaTwitter" && <FaTwitter />}
                    {sm.icon == "FaLinkedinIn" && <FaLinkedinIn />}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
