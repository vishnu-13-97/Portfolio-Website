
import { FaEnvelope,FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../../index.css"; // Ensure the correct path to your main CSS file

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
        <div className="flex space-x-4">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebook />
          </a> */}
          <a href="https://x.com/CPNEYYATTINKARA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:!text-white text-2xl">
            <FaTwitter />
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a> */}
          <a href="https://www.linkedin.com/in/vishnu-c-21104b348/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:!text-white text-2xl">
            <FaLinkedin />
          </a>

          {/* <a href="mailto:www.vishnu.cp.13@gmail.com" className="text-gray-400 hover:!text-white text-2xl">
            <FaEnvelope />
          </a> */}
          <a href="https://github.com/vishnu-13-97" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:!text-white text-2xl">
            <FaGithub />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500 hover:!text-white animate-blink">&copy; {new Date().getFullYear()} Vishnu C P. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
