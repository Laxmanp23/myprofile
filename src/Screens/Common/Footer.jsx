import React from "react";
import physics from "../../Assets/physics.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Column: Image and Text */}
        <div className="flex flex-col items-center">
          <img src={physics} alt="Logo" className="w-24 h-24 mb-4" />
          <p className="text-center">
            This is a brief description or tagline about the company or website.
          </p>
        </div>

        {/* Second Column: Menu 1 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Info</h3>
          <div className="border-t border-gray-600 " />
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Call
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mail
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Location
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Menu 2 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <div className="border-t border-gray-600 " />

          <ul>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Seo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Technology
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Menu 3 */}
        <div>
          <h3 className=" text-lg font-bold mb-2">Options</h3>
          <div className="border-t border-gray-600" />

          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10"></div>
      <div className="flex justify-between py-2 w-full px-4">
        <p>&copy; 2024 Application💻🖥</p>
        <p>🌐Cloud Hosting📡</p>
      </div>
    </footer>
  );
};

export default Footer;
