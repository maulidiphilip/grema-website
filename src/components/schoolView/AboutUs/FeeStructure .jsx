const FeeStructure = () => {
  const feeData = [
    {
      level: "Pre-Primary",
      term1: "K50,000",
      term2: "K50,000",
      term3: "K50,000",
      annual: "K150,000",
    },
    {
      level: "Primary (Grades 1-7)",
      term1: "K75,000",
      term2: "K75,000",
      term3: "K75,000",
      annual: "K225,000",
    },
    {
      level: "Secondary (Forms 1-4)",
      term1: "K100,000",
      term2: "K100,000",
      term3: "K100,000",
      annual: "K300,000",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Fee Structure
      </h2>

      <p className="text-gray-700 mb-8 text-center md:text-left">
        Our fee structure is designed to be transparent and accessible. The fees
        cover tuition, learning materials, and access to school facilities.
        Please note that these fees are subject to change. Contact the school
        administration for the most up-to-date information.
      </p>

      <div className="overflow-x-auto">
        {" "}
        {/* Added for horizontal scrolling on smaller screens */}
        <table className="min-w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Level
              </th>
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Term 1
              </th>
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Term 2
              </th>
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Term 3
              </th>
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Annual
              </th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-2 px-4 border border-gray-300">
                  {item.level}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {item.term1}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {item.term2}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {item.term3}
                </td>
                <td className="py-2 px-4 border border-gray-300 font-bold">
                  {item.annual}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-md shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Important Notes:
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Fees are payable at the beginning of each term.</li>
          <li>
            Sibling discounts may be available. Please inquire with the school
            office.
          </li>
          <li>
            Additional costs may apply for optional activities, uniforms, and
            school trips.
          </li>
          <li>All fees are in Malawian Kwacha (K).</li>
        </ul>
      </div>
    </div>
  );
};

export default FeeStructure;
