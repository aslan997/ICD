import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Braeadcrumb = ({ pageNames, pageUrls }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <nav className="text-gray-500" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {pageNames?.map((name, index) => (
            <li key={index} className="flex items-center">
              {index < pageNames?.length - 1 ? (
                <>
                  <a href={pageUrls[index]} className="text-black">
                    {name}
                  </a>
                  <Icon icon="tabler:slash" />
                  {/* <svg
                    className="w-4 h-4 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg> */}
                </>
              ) : (
                <span className="text-gray-500">{name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Braeadcrumb;
