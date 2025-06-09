import HeroSection from '@/components/HeroSection'
const Section = ({ 
  id, 

  children 
}: { 
  id: string, 
 
  children: React.ReactNode 
}) => (
  <section id={id} className="min-h-screen p-8 scroll-mt-20"> 

    <div className="text-gray-300 text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <div>
      <Section id="home" >
        
        <HeroSection />
      </Section>

      <Section id="about" >
        <p>
          Here you can write a more detailed description about yourself. Talk about your journey into web development, your interests, your skills, and what you're passionate about.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Skills</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Next.js</span>
                <span className="text-yellow-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Experience</h3>
            <p className="text-gray-300">
              Over [X] years of experience in web development, specializing in modern JavaScript frameworks and responsive design.
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects" >
        <p className="mb-8">
          Here are some of my recent projects that showcase my skills and creativity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Project {project}</h3>
                <p className="text-gray-400 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <div className="flex space-x-4">
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Live Demo
                  </button>
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" >
        <p className="mb-8">
          I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">@</span>
                </div>
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">in</span>
                </div>
                <span>LinkedIn Profile</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};