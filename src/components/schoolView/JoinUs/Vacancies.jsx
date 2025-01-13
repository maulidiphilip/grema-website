import vacancyImg from "../../../assets/vacancy.png"; // Replace with the actual image path

const VacancyPage = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-headingColor mb-4">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore exciting career opportunities and become a part of our
            dedicated team of educators and staff.
          </p>
        </div>

        {/* Vacancy Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={vacancyImg}
              alt="Join Our Team"
              className="rounded-lg shadow-xl w-full hover:scale-105 transform transition duration-300 ease-in-out"
            />
          </div>

          {/* Vacancy Info Section */}
          <div className="lg:w-1/2">
            {/* Teaching Staff */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-primaryColor mb-4">
                Teaching Staff Vacancies
              </h2>
              <button className="bg-primaryColor text-white px-6 py-3 rounded-md mb-4 shadow-md hover:bg-primaryColor-hover transition">
                Teaching Vacancy Currently Available
              </button>
              <p className="text-gray-700 leading-relaxed mb-4">
                Teaching vacancies are also advertised on the{" "}
                <a
                  href="#"
                  className="text-primaryColor underline hover:text-primaryColor-hover transition"
                >
                  TES
                </a>{" "}
                website. Submit an application form, a cover letter, and your CV
                to apply.
              </p>
              <button className="bg-primaryColor text-white px-6 py-3 rounded-md shadow-md hover:bg-primaryColor-hover transition">
                Download Teaching Application Form
              </button>
            </div>

            {/* Available Positions */}
            <h3 className="text-xl font-bold text-headingColor mt-8 mb-4">
              Available Teaching Positions:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Design Technology Teacher - Job description 2025/26</li>
              <li>Physical Education Teacher - Job description 2025/26</li>
              <li>Spanish & French Teacher - Job description 2025/26</li>
              <li>Head of Sixth Form - Job description 2025/26</li>
            </ul>

            {/* Non-Teaching Staff */}
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-primaryColor mb-4">
                Non-Teaching Staff Vacancies
              </h2>
              <button className="bg-gray-400 text-white px-6 py-3 rounded-md mb-4 shadow-md cursor-not-allowed">
                No Non-Teaching Vacancy Available
              </button>
              <p className="text-gray-700 leading-relaxed mb-4">
                Non-teaching roles include ground staff, ICT support, kitchen
                staff, and PE assistance. We ensure equal opportunities for all.
              </p>
              <button className="bg-primaryColor text-white px-6 py-3 rounded-md shadow-md hover:bg-primaryColor-hover transition">
                Download Non-Teaching Application Form
              </button>
            </div>
          </div>
        </div>

        {/* Deadline Section */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-red-600">
            Application Deadline: Friday, 10th January 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default VacancyPage;
