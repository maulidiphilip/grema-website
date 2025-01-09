import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Logo Section */}
          <div className="lg:w-1/4">
            <Link to="/">
              <img
                src="/path-to-logo/logo.png"
                alt="Grema Pvt Secondary School Logo"
                className="w-32 mb-4"
              />
            </Link>
            <p className="text-sm">
              Empowering Minds, Shaping Futures. Committed to providing holistic
              education for a brighter tomorrow.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-blue-400 transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/academic-programs"
                  className="hover:text-blue-400 transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Address:</span> Liwonde, Malawi
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+265991103578" className="hover:text-blue-400">
                  +265 991 103 578
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@grema.mw" className="hover:text-blue-400">
                  info@grema.mw
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Grema Private Secondary School.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
