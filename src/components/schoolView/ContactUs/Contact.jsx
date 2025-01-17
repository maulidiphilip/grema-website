// src/components/ContactUs.jsx

import React from "react";
import contactImg from "../../../assets/contact.PNG";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-headingColor mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get in touch with Grema Private School for any inquiries or admissions.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={contactImg}
              alt="Grema Private School"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Our Address
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Grema Private School <br />
              P/Bag 211 <br />
              Liwonde <br />
              <strong>Liwonde</strong>, Malawi
            </p>

            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Email (Enquiries):</strong>{" "}
                <a href="mailto:info@grema.mw" className="text-blue-600 hover:underline">
                  info@grema.mw
                </a>{" "}
                |{" "}
                <a href="mailto:office@grema.mw" className="text-blue-600 hover:underline">
                  office@grema.mw
                </a>
              </li>
              <li>
                <strong>Email (Admissions):</strong>{" "}
                <a href="mailto:admissions@grema.mw" className="text-blue-600 hover:underline">
                  admissions@grema.mw
                </a>
              </li>
              <li>
                <strong>Reception:</strong>{" "}
                <a href="tel:+265891000437" className="text-blue-600 hover:underline">
                  +265 891 000 437
                </a>
              </li>
              <li>
                <strong>Admissions:</strong>{" "}
                <a href="tel:+265891000547" className="text-blue-600 hover:underline">
                  +265 891 000 547
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <iframe
            title="Grema Secondary School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.002872985355!2d35.2056397!3d-15.0507185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d8d74640d0cb6d%3A0x7a28ca85133741ad!2sGrema%20Pvt%20Secondary%20School!5e0!3m2!1sen!2smw!4v1705501234567"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
