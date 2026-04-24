import { useState } from "react";

const Bonus = ({ offer }) => {
  const itemsPerPage = 3;
  const [currPage, setCurrPage] = useState(1);
  let results = [];

  const startIndex = (currPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let initialCapital = offer.loanAmount;
  for (let i = 0; i < offer.details.duration; i++) {
    let intrest = initialCapital * offer.interestRate;
    initialCapital += intrest;
    let result = {
      year: i + 1,
      intrest: Number(intrest).toFixed(2),
      total: Number(initialCapital).toFixed(2),
    };

    results.push(result);
  }

  const data = results.slice(startIndex, endIndex);
  console.log(currPage);

  const totalPages = Math.ceil(results.length / itemsPerPage);

  const handleNext = () => {
    if (currPage < totalPages) return setCurrPage((p) => p + 1);
  };
  const handlePrevious = () => {
    if (currPage > 1) return setCurrPage((p) => p - 1);
  };

  return (
    <div>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Year
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Interest
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Total
            </th>
          </tr>
          {data.map((res, i) => (
            <tr
              className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none"
              key={i}
            >
              <td
                data-th="Year"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {res.year}
              </td>
              <td
                data-th="Interset"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {res.intrest}
              </td>
              <td
                data-th="Total"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {res.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between py-3">
        <button
          className="border-none bg-blue-500 rounded-lg py-1 px-2.5 text-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currPage == 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <p className="text-slate-600 text-2xl font-bold"> {currPage} </p>
        <button
          className="border-none bg-blue-500 rounded-lg py-1 px-2.5 text-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={endIndex >= results.length}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Bonus;
