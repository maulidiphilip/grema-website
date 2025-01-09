import CountUp from "react-countup";
import aboutImg from "../../../assets/contact.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-headingColor mb-4">
            About Grema Private Secondary School
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Situated in the heart of Liwonde, we are dedicated to empowering
            students through quality education and holistic development.
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={aboutImg}
              alt="Grema Private Secondary School"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Grema Private Secondary School, we aim to provide a nurturing
              environment that fosters academic excellence, moral integrity, and
              leadership. Our focus is on equipping students with the knowledge
              and skills needed to excel in their future endeavors.
            </p>

            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Why Choose Grema?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                A serene and well-equipped campus located in Liwonde, fostering
                a conducive learning environment.
              </li>
              <li>
                A dedicated team of educators committed to academic and personal
                growth.
              </li>
              <li>
                Modern facilities, including science labs, libraries, and ICT
                centers.
              </li>
              <li>
                Emphasis on extracurricular activities such as sports, arts, and
                technology.
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105">
            <h3 className="text-5xl font-extrabold text-primaryColor mb-2">
              <CountUp end={10} duration={2} />+
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Years of Academic Excellence
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105">
            <h3 className="text-5xl font-extrabold text-primaryColor mb-2">
              <CountUp end={500} duration={2.5} />+
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Successful Alumni
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105">
            <h3 className="text-5xl font-extrabold text-primaryColor mb-2">
              <CountUp end={15} duration={1.5} />+
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Dedicated Educators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
