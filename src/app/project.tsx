import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "../components/ui/threecard";

const Project = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8  text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <ProjectCard
            title="Weather based Music recommender"
            technologies="Javascript, FastApi, Tailwind, React"
            imageSrc="/assets/music-site.jpg"
            liveLink="https://weather-music.onrender.com/"
            githubLink="https://github.com/abhicodes369/weather_music"
          />
          {/* You can uncomment and adjust the second ProjectCard when ready */}
          {/* 
          <ProjectCard 
            title="Stress Testing Tool"
            technologies="ReactJs, Tailwind, Python"
            imageSrc="/assests/cah.png"
            liveLink="https://cah-mocha.vercel.app/"
            githubLink="https://github.com/kairveeehh/CAH/"
          />
          */}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  technologies,
  imageSrc,
  liveLink,
  githubLink,
}: {
  title: string;
  technologies: string;
  imageSrc: string;
  liveLink: string;
  githubLink: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-cyan-300 text-sm mt-2">
          {technologies}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={-3}
          className="w-full mt-4"
        >
          <img
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="a"
            href={liveLink}
            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-cyan-400"
          >
            Live Link →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={githubLink}
            className="flex items-center px-4 py-2 text-white text-xl font-bold hover:text-cyan-400"
          >
            <GitHubLogoIcon className="w-8 h-8" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Project;
