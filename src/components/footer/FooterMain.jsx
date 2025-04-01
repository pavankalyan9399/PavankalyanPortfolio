import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Certifications", section: "certifications" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <footer className="px-4 bg-gray-900 text-lightGrey">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:flex-col sm:items-center">
        <p className="text-3xl text-lightGrey font-semibold">
          DURGA PAVAN KALYAN KODI
        </p>
        <ul className="flex gap-6 text-lightGrey text-lg mt-4 sm:mt-2">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center mt-4 mb-8 text-sm text-lightBrown">
        © 2025 Durga Pavan Kalyan Kodi | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
