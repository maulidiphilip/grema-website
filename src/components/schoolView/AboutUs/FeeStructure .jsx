const FeeStructure = () => {
  const feePerTerm = "K120,000"; // Set the common fee per term
  const annualFee = "K360,000"; // Calculate the annual fee

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Fee Structure
      </h2>

      <p className="text-gray-700 mb-8 text-center md:text-left">
        Our fee structure is designed to be transparent and accessible. All
        forms pay the same amount per term. The fees cover tuition, learning
        materials, and access to school facilities. These fees are subject to
        change. For the most up-to-date information, please contact the school
        administration.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border border-gray-300 font-medium text-left">
                Form
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
            {/* Map over the forms, but display the same fees */}
            {["Form 1", "Form 2", "Form 3", "Form 4"].map((form, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-2 px-4 border border-gray-300">{form}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {feePerTerm}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {feePerTerm}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {feePerTerm}
                </td>
                <td className="py-2 px-4 border border-gray-300 font-bold">
                  {annualFee}
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
