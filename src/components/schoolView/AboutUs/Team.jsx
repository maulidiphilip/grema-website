// import ErnestImage from "../../../assets/ernest.jpg"; // Add the actual path to Dr. Ernest's image.
import SarahImage from "../../../assets/img2.jpg";
import JohnImage from "../../../assets/img1.jpg";
import EmilyImage from "../../../assets/img2.jpg";

// Use a named export for teamMembers
export const teamMembers = [
  {
    name: "Philip Maulidi, PhD",
    position: "Director / Founder",
    email: "ekaonga@mahsa.mw",
    phone: "+265 991 521 003",
    image: EmilyImage,
  },
  {
    name: "Sarah Samanyika",
    position: "Head Teacher",
    email: "sarah@grema.mw",
    phone: "+265 991 234 567",
    image: SarahImage,
  },
  {
    name: "John Banda",
    position: "Deputy Head Teacher",
    email: "john@grema.mw",
    phone: "+265 991 987 654",
    image: JohnImage,
  },
  {
    name: "Emily Chirwa",
    position: "Head of Admissions",
    email: "emily@grema.mw",
    phone: "+265 992 876 543",
    image: EmilyImage,
  },
];

// Default export for Team component
const Team = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-headingColor mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our dedicated educators and staff are committed to providing
            personalized attention and support to every student. Together, we
            create an environment conducive to learning and growth.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <div className="sm:w-1/3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-l-lg sm:rounded-none"
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:w-2/3">
                <h3 className="text-2xl font-bold text-primaryColor mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="text-sm text-gray-500 space-y-2">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {member.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${member.phone}`}
                      className="text-blue-500 hover:underline"
                    >
                      {member.phone}
                    </a>
                  </p>
                </div>
                {/* Contact Button */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-primaryColor-hover transition-all">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
