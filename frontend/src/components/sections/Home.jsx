

const Home = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center relative">
        <div className="text-center x-10 pz-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Vishnu C P
            </h1>
            <p className="text-grey-400 text-lg mb-8 max-w-lg mx-auto">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta nam maiores vel ex voluptates rem cumque aut. Deserunt, dolorem maiores? Vero asperiores doloremque dolorem ab perferendis architecto! Quasi, deserunt! 
            </p>
            <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-500 !text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
          <a href="#contacts" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact Me</a>
        
            
            
            
            
            </div>


        </div>
    </section>
  )
}

export default Home