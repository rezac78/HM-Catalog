import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TableComponent = ({ data }) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const [query, setQuery] = useState("");
  
  const keys = data.length > 0 ? Object.keys(data[0]) : [];
  const excludedKeys = ["id", "کد ملی"];
  const filteredKeys = keys.filter(key => !excludedKeys.includes(key));

  const filteredData = data.filter((row) =>
    filteredKeys.some((key) => {
      const value = row[key];
      return (
        typeof value === "string" &&
        value.toLowerCase().includes(query.toLowerCase())
      );
    })
  );
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-4 max-w-md md:max-w-full mx-auto bg-white shadow-lg rounded-lg">
    <div className="flex justify-between items-center p-2 bg-[#387AB4] rounded-t-lg text-white">
      <div className="flex items-center border border-[#F5F5F5] rounded-l-lg">
        <input
          type="text"
          className="p-2 text-white bg-[#387AB4] "
          placeholder="جستجو..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-[#F5F5F5] p-2 rounded-l-lg">
          <LazyLoadImage
            effect="blur"
            src="/icon/search-normal.svg"
            alt="notFound"
            className="text-xl"
          />
        </button>
      </div>
      <button className="p-3 bg-[#F5F5F5] hidden sm:flex ">
        <LazyLoadImage
          effect="blur"
          src="/icon/iconDown.svg"
          alt="notFound"
          className="text-xl"
        />
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="border-b border-[#387AB4]">
            {filteredKeys.map((key) => (
              <th key={key} className="p-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100">
              {filteredKeys.map((key) => (
                <td key={key} className="p-2 text-center">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-center mt-4">
      <button
        className={`p-2 border border-gray-300 ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {`<`}
      </button>
      <div className="flex">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`p-2 border border-gray-300 ${
              page === currentPage ? "bg-gray-200" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className={`p-2 border border-gray-300 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {`>`}
      </button>
    </div>
  </div>
  );
};

export default TableComponent;
