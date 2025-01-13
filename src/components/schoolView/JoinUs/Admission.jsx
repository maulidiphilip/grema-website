import { useState } from "react";

const Admission = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primaryColor text-white py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Join Grema Pvt Secondary School
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Shape your future with quality education in a nurturing environment.
            Enroll today and unlock your potential.
          </p>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-headingColor mb-6">
          Admission Requirements
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-textColor space-y-3">
          <li>Completed admission application form.</li>
          <li>Copies of the previous school’s report cards or transcripts.</li>
          <li>A copy of the students birth certificate.</li>
          <li>Two passport-sized photographs.</li>
          <li>Payment of admission fees (non-refundable).</li>
        </ul>
      </div>

      {/* Admission Form */}
      <div className="bg-white shadow-md rounded-lg py-8 px-4 sm:px-6 md:px-12 mx-4 sm:mx-auto max-w-lg sm:max-w-xl md:max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-headingColor mb-6 text-center">
          Apply for Admission
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-textColor font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-textColor font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-textColor font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-textColor font-medium mb-1"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              rows="4"
              placeholder="Provide any additional information or inquiries"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="bg-primaryColor text-white py-3 px-6 rounded-md font-semibold w-full hover:bg-primaryColor-hover transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* Call to Action */}
      <div className="bg-irisBlueColor text-white py-8 sm:py-12 mt-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Contact our admissions office for more details about enrollment.
          </p>
          <button className="bg-white text-primaryColor py-3 px-6 rounded-md font-semibold hover:bg-gray-100 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admission;
