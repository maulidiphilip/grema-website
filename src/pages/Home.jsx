import { Button } from "@/components/ui/button";
import icon01 from "../assets/achiement.jpg";
import faqImg from "../assets/contact.jpg";
import {
  BookOpen,
  Briefcase,
  Calendar,
  Globe,
  GraduationCap,
  Users,
} from "lucide-react";
import FaqList from "@/components/schoolView/FAQs/FaqList";

const Home = () => {
  return (
    <>
      {/*=============================== hero section ================*/}
      <section className="bg-blue-600 text-white py-16 mt-20">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Grema Secondary
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your path to a successful career starts here
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button
              variant="outline"
              className="flex items-center justify-center text-blue-600 border-white hover:bg-white hover:text-blue-700 px-4 py-2"
            >
              <GraduationCap className="mr-2" />
              Enrol
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center text-blue-600 border-white hover:bg-white hover:text-blue-700 px-4 py-2"
            >
              <Briefcase className="mr-2" />
              Vacancies
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center text-blue-600 border-white hover:bg-white hover:text-blue-700 px-4 py-2"
            >
              <Calendar className="mr-2" />
              Upcoming Events
            </Button>
          </div>
        </div>
      </section>
      {/*=============================== hero section end================*/}

      {/*=============================== feature section ================*/}
      <section className="bg-gray-100 py-16">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {" "}
            Why Choose Us{" "}
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              {" "}
              <BookOpen className="text-blue-600 w-12 h-12 mb-4" />{" "}
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>{" "}
              <p className="text-gray-600">
                {" "}
                We provide top-notch education with a focus on holistic
                development.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              {" "}
              <Users className="text-blue-600 w-12 h-12 mb-4" />{" "}
              <h3 className="text-xl font-semibold mb-2">
                Experienced Faculty
              </h3>{" "}
              <p className="text-gray-600">
                {" "}
                Our teachers are highly qualified and dedicated to student
                success.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              {" "}
              <Globe className="text-blue-600 w-12 h-12 mb-4" />{" "}
              <h3 className="text-xl font-semibold mb-2">Global Exposure</h3>{" "}
              <p className="text-gray-600">
                {" "}
                We offer international programs and exchange opportunities.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/*=============================== feature end section ================*/}
      {/*=============================== admission section ================*/}
      <section className="bg-white py-16">
        {" "}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {" "}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Admissions
            </h2>{" "}
            <p className="text-gray-600 mb-4">
              {" "}
              Register your interest for a place at Grema Secondary. Our
              admissions process is designed to be straightforward and
              transparent. Contact our admissions office today to learn more
              about how you can join our community.{" "}
            </p>{" "}
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2"
              onClick={() => (window.location.href = "/admissions")}
            >
              {" "}
              Enrol Today{" "}
            </Button>{" "}
          </div>{" "}
          <div className="md:w-1/2">
            {" "}
            <img src={icon01} alt="Admissions" className="w-full h-auto" />{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/**____________________FAQs Section end _____________ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image Section */}
            <div className="lg:w-1/2 hidden md:block">
              <img
                src={faqImg}
                alt="Frequently Asked Questions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Right FAQ Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about Grema Private Secondary School? We’re here
                to help! Browse our FAQs to learn more about our programs,
                location, and what makes us unique.
              </p>

              <div className="space-y-6">
                <FaqList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**____________________FAQs Section end _____________ */}
    </>
  );
};

export default Home;
