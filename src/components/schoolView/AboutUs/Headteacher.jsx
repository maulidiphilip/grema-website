import headteacherImage from "../../../assets/img1.jpg";

const Headteacher = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center min-h-screen bg-gray-50 p-6 md:p-16">
      {/* Image Section */}
      <div className="w-full md:w-1/2 md:pl-8 flex justify-center">
        <img
          src={headteacherImage}
          alt="Headteacher"
          className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Message from the Headteacher
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
          Bishop Mbewe, Head Teacher
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to Grema Private Secondary School, a beacon of excellence in
          the Malawian education system. We are proud to prepare students for
          the challenges of tomorrow while instilling values that reflect our
          rich culture and traditions.
        </p>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our curriculum adheres to the{" "}
            <span className="text-xl font-semibold text-blue-500">
              Malawi National Education Standards
            </span>
            , focusing on key subjects such as Mathematics, Science, English,
            Chichewa, and Social Studies. Students are also encouraged to
            participate in creative arts and sports, ensuring holistic
            development.
          </p>
          <p>
            At Grema, we prepare students for both Malawi School Certificate of
            Education (MSCE) examinations and the Junior Certificate of
            Education (JCE), providing a solid foundation for further studies
            and career opportunities.
          </p>
          <p>
            Beyond academics, we take pride in our extracurricular activities,
            including debates, cultural events, and sports tournaments. These
            activities help our students build confidence, teamwork, and
            leadership skills.
          </p>
          <p>
            Our highly qualified teaching staff comprises both local and
            experienced educators who are passionate about nurturing students.
            With state-of-the-art facilities, including science labs, a library,
            and sports grounds, we ensure a conducive learning environment for
            all.
          </p>
          <p>
            Grema Private Secondary School stands as a cornerstone of education
            in Liwonde, Malawi, empowering students to achieve their dreams
            while staying rooted in their communities.
          </p>
        </div>
        {/* <div className="mt-8">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Headteacher;
