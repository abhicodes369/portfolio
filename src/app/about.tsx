const About = () => {
  return (
    <div className="min-h-screen  text-white flex flex-col">
      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-cyan-300">
              I'm a tech enthusiast, constantly shifting gears between diverse
              projects.
            </p>
            <p>
              One day I'm crafting elegant websites, the next I'm designing
              intuitive UI/UX. My quiver spans app development, AI agents, and
              LLMs.
            </p>
            <p>
              My insatiable curiosity drives me to explore every corner of the
              tech world. I thrive on variety and challenge, pouring my energy
              into building innovative, cutting-edge solutions that push
              boundaries and solve real problems.
            </p>
            <p className="text-cyan-300 font-semibold">
              For me, every line of code, every pixel, and every AI model is an
              opportunity to create something extraordinary.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Let's Collaborate!
              </h3>
              <p>
                I'm always looking to collaborate with talented designers and
                developers. If you're passionate about creating cool stuff and
                pushing the boundaries of technology, let's connect!
              </p>
            </div>
            {/* Additional content to ensure scrolling */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">My Approach</h3>
              <p>
                I believe in a holistic approach to technology. It's not just
                about writing code or designing interfaces; it's about creating
                experiences that resonate with users and solve real-world
                problems.
              </p>
              <p>
                Whether it's developing a sleek mobile app, training an AI
                model, or architecting a complex system, I bring the same level
                of passion and attention to detail to every project.
              </p>
              <p className="text-cyan-300">
                My goal is to push the boundaries of what's possible and to
                never stop learning in this ever-evolving field.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
