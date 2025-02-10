
const About = () => {

  const frontendSkills = ["Html","Css","Javascript","React","TailwindCSS","Bootstrap CSS","Material Ui"];
  const backendSkills = ["Node Js","Express Js","MongoDB","Docker","Aws"];
  return (
    <section id='about' className="min-h-screen flex items-center justify-center py-20">
<div className="max-w-3xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
               About Me
  </h2>

  <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
    <p className="text-gray-300 mb-6">Passionate developer with expertise in building scalable web applications and creating innovative solutions.</p>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Frontend</h3>

        <div className="flex flex-wrap gap-2">
        {frontendSkills.map((tech, key) => (
  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
    {tech}
  </span>
))}

        </div>

      </div>



      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Backend</h3>

        <div className="flex flex-wrap gap-2">
        {backendSkills.map((tech, key) => (
  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
    {tech}
  </span>
))}

        </div>

      </div>
    </div>
  </div>


<div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>
<div className="space-y-4 text-grey-300">
  <div>
    <h4 className="font-semibold">Intern at Suffix e solutions(2024)</h4>
    <p className="w-full-block mb-6">Developed and maintained web applications</p>

    <ul className="text-gray-300 list-disc pl-5 space-y-2">
      <li>💻 Built dynamic, user-friendly web applications using React,JavaScript, HTML, and CSS.</li>
      <li>🚀 Designed responsive and modern UI components with the help of Bootstrap for enhanced user experience.</li>
      <li>📌 Managed and maintained databases with MongoDB, ensuring high availability and efficient data handling.</li>
      <li>🔐 Ensured smooth integration of third-party APIs into web applications, enhancing functionality and user experience.</li>
      <li>🌱  Utilized Git for version control, enabling effective collaboration and project tracking.</li>
    </ul>
  </div>

</div>
  </div>

</div>

</div>

    </section>
  )
}

export default About