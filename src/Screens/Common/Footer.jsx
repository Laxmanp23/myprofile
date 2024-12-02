import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Column: Image and Text */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="w-24 h-24 mb-4"
          />
          <p className="text-center">
            This is a brief description or tagline about the company or website.
          </p>
        </div>

        {/* Second Column: Menu 1 */}
        <div>
          <h3 className="font-bold mb-2">Menu 1</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 3
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Menu 2 */}
        <div>
          <h3 className="font-bold mb-2">Menu 2</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 3
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Menu 3 */}
        <div>
          <h3 className="font-bold mb-2">Menu 3</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Option 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10"></div>
      <div className="py-2">
        <p>&copy; 2024 Application</p>
      </div>
    </footer>
  );
};

export default Footer;
