const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
      <div className={`fixed top-0 left-0 w-full bg-black/80 z-40 flex flex-col items-center justify-center 
      transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto !text-white" : "h-0 opacity-0 pointer-events-none"}
      `}>
  
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
      


              <a href="#home" className={`text-2xl font-semibold !text-white my-4 transform-transition duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 transition-y-5"}`}            onClick={()=>{setMenuOpen(false)}}>Home</a>
              <a href="#about" className={`text-2xl font-semibold !text-white my-4 transform-transition duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 transition-y-5"}`} onClick={()=>{setMenuOpen(false)}}>About</a>
              <a href="#projects" className={`text-2xl font-semibold !text-white my-4 transform-transition duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 transition-y-5"}`} onClick={()=>{setMenuOpen(false)}}>Projects</a>
              <a href="#contacts"className={`text-2xl font-semibold !text-white my-4 transform-transition duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 transition-y-5"}`} onClick={()=>{setMenuOpen(false)}}>Contacts</a>
     
  
      </div>
    );
  };
  
  export default MobileMenu;
  