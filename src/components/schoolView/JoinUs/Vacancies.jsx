import React from 'react';
import vacancyImg from '../../../assets/vacancy.png'; // Replace with actual image path

const VacancyPage = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-headingColor mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore exciting career opportunities and become a part of our dedicated team.
          </p>
        </div>

        {/* Vacancy Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={vacancyImg}
              alt="Join Our Team"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Vacancy Info Section */}
          <div className="lg:w-1/2">
            {/* Teaching Staff */}
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Teaching Staff Vacancies
            </h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
              Teaching Vacancy Currently Available
            </button>
            <p className="text-gray-700 leading-relaxed mb-4">
              Teaching Vacancies are also advertised on the{' '}
              <a href="#" className="text-blue-500 underline">TES</a> website. Submit an application form, letter, and CV.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
              Download Teaching Application Form
            </button>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">
              Available Teaching Positions:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>DT Teacher - Job description 2025/26</li>
              <li>PE Teacher - Job description 2025/26</li>
              <li>Spanish French - Job description 2025/26</li>
              <li>Head of Sixth Form - Job description 2025/26</li>
            </ul>

            {/* Non-Teaching Staff */}
            <h2 className="text-3xl font-semibold text-blue-500 mt-8 mb-4">
              Non-Teaching Staff Vacancies
            </h2>
            <button className="bg-blue-400 text-white px-4 py-2 rounded mb-4">
              No Non-Teaching Vacancy Available
            </button>
            <p className="text-gray-700 leading-relaxed">
              Non-teaching roles include ground staff, ICT, kitchen staff, and PE support.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Download Non-Teaching Application Form
            </button>
          </div>
        </div>

        {/* Deadline Section */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-red-600">
            Application Deadline: Friday 10th January 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default VacancyPage;
