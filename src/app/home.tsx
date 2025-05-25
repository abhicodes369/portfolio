import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center pt-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cyan-400 mb-4">
          _ HELLO WORLD
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-cyan-400 mb-4">
          Hey, I'm Abhiram
        </h1>

        <TypeAnimation
          sequence={[
            "I am a web-dev",
            1000,
            "I am a software developer",
            1000,
            "I am a data enthusiast",
            1000,
            "I am a programmer",
            1000,
            "I am a coder",
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 mb-8"
          repeat={Number.POSITIVE_INFINITY}
        />

        <p className="font-serif text-xl sm:text-2xl text-cyan-400 mb-8">
          Contributor @ open source
        </p>
      </main>
    </div>
  );
};

export default Home;
