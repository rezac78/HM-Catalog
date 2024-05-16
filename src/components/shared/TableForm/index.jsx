import React, { useState } from "react";

const TableComponent = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    ["بهزاد", "کاظمی", "متوسطه"],
    ["بهزاد", "کاظمی", "کارشناسی"],
    ["بهزاد", "کاظمی", "ناپیوسته"],
    ["علی", "محمدی", "دیپلم"],
    ["رضا", "احمدی", "کارشناسی ارشد"],
    ["سارا", "حسینی", "دکتری"],
  ];
  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const [query, setQuery] = useState("");

  const filteredData = data.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(query.toLowerCase()))
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
            <img
              src="/icon/search-normal.svg"
              alt="notFound"
              className="text-xl"
            />
          </button>
        </div>
        <button className="p-3 bg-[#F5F5F5]">
          <img src="/icon/iconDown.svg" alt="notFound" className="text-xl" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="border-b border-[#387AB4]">
              <th className="p-2">نام</th>
              <th className="p-2">نام‌خانوادگی</th>
              <th className="p-2">مقطع</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((row, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2 text-center">
                    {cell}
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
