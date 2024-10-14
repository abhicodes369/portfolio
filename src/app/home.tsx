import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-screen  text-white p-8 px-40">
      <main className="mt-24">
        <h2 className="font-serif text-4xl text-cyan-400 mb-4 ">
          {" "}
          _ HELLO WORLD
        </h2>
        <h1 className="text-8xl  font-serif text-cyan-400 mb-4">
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
          className="text-4xl text-cyan-400 mb-8"
          repeat={Infinity}
        />

        <p className=" font-serif text-2xl text-cyan-400 mb-8">
          Contributor @ open source
        </p>
      </main>
    </div>
  );
};

export default Home;
