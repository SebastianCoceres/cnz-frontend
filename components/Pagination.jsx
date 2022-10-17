import React from "react";

function Pagination({ pages }) {
  let pagination = [];
  for (let i = 0; i < pages; i++) {
    pagination.push(i);
  }

  return (
    <nav className="mx-auto">
      {pagination.length > 1 && (
        <ul className="flex justify-center">
          <li>
            <a
              href="#"
              className="inline-block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pagination.map((page) => {
            return (
              <li key={page}>
                <a
                  href="#"
                  className="inline-block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {page + 1}
                </a>
              </li>
            );
          })}

          <li>
            <a
              href="#"
              className="inline-block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Pagination;
