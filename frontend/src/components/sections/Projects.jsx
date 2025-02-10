import RevealOnScroll from "../RevealOnScroll"

const Projects = () => {
  return (
   <section id="projects" className="min-h-screen flex items-center justify-center py-20">
<RevealOnScroll>


    <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
               Featured Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">Scope India Educational Website </h3>
    <p className="text-gray-400 mb-4">

    The website is designed for easy navigation and built with HTML, CSS, JavaScript, Bootstrap, React.js, Express.js, and MongoDB. It includes secure authentication using cookies, sessions, and JWT, with features like session storage and a &rdquo;Remember Me &rdquo; option for convenience.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "Express js", "MongoDB","BootStrap"].map((tech, key) => (
        <span 
          key={key} 
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all inline-block mr-2 mt-2"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a href="https://scope-project-frontend.onrender.com" target="_blank" className="text-blue-400 hover:!text-white transition-colors my-4 mx-2">View Project &rarr; 

      </a>

      <a href="https://github.com/vishnu-13-97/Scope-Project" target="_blank" className=" flex text-blue-400 hover:!text-white transition-colors my-4 mx-18">     <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="mx-2 rounded-full" alt="GitHub Logo" width="19"/> Github &rarr; 

</a>



      
    </div>

    
  </div>

{/* Second Project */}

<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">Scope India Educational Website </h3>
    <p className="text-gray-400 mb-4">

    The website is designed for easy navigation and built with HTML, CSS, JavaScript, Bootstrap, React.js, Express.js, and MongoDB. It includes secure authentication using cookies, sessions, and JWT, with features like session storage and a &rdquo;Remember Me&#34; option for convenience.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "Express js", "MongoDB","BootStrap"].map((tech, key) => (
        <span 
          key={key} 
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all inline-block mr-2 mt-2"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a href="https://scope-project-frontend.onrender.com" target="_blank" className="text-blue-400 hover:!text-white transition-colors my-4 mx-2">View Project &rarr; 

      </a>

      <a href="https://github.com/vishnu-13-97/Scope-Project" target="_blank" className=" flex text-blue-400 hover:!text-white transition-colors my-4 mx-18">     <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="mx-2 rounded-full" alt="GitHub Logo" width="19"/> Github &rarr; 

</a>



      
    </div>

    
  </div>
{/* Second project end */}

</div>


    </div>

    </RevealOnScroll>

   </section>
  )
}

export default Projects