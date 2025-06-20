// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12 flex">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-3 sm:mb-0">
          &copy; {new Date().getFullYear()} Sewa Alert. All rights reserved.
        </p>
      </div>
      <div className="underline hover:text-blue-500 text-gray-500 text-sm mb-3 sm:mb-0">
        <ul className="flex flex-row justify-around">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-black hover:text-blue-700"
            >
              Governmental Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-black hover:text-blue-700"
            >
              Complain
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-black hover:text-blue-700"
            >
              Health Services
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
