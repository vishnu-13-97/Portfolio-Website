import { useEffect } from "react";

const Navbar = ({menuOpen ,setMenuOpen}) => {

 useEffect(()=>{
    document.body.style.overflow=menuOpen?"hidden":"";
 },[menuOpen]) 

    return (
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="font-mono text-xl font-bold text-white !text-white">
              Vishnu<span className="text-blue-500">.tech</span>
            </a>
  
            {/* Mobile Menu Icon */}
            <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>{
                setMenuOpen((prev)=>!prev)
            }}>
              &#9776; {/* ☰ Hamburger Icon */}
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:!text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:!text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:!text-white transition-colors">Projects</a>
              <a href="#contacts" className="text-gray-300 hover:!text-white transition-colors">Contacts</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  