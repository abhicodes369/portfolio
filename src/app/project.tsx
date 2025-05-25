import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "../components/ui/threecard";

const Project = () => {
  return (
    <section className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          <ProjectCard
            title="API Stress Testing Software"
            technologies="Go, React, Tailwind CSS, WebSockets, Recharts"
            description="A responsive web application for testing API performance under heavy load conditions with real-time visualizations and live updates."
            imageSrc="/assets/stress-testing.jpg"
            liveLink="#" // Add your live link here
            githubLink="https://github.com/abhicodes369/stress-test"
            features={[
              "Real-time performance monitoring",
              "WebSocket live updates",
              "Dynamic charts and graphs",
            ]}
          />

          <ProjectCard
            title="Nutri-Analysis"
            technologies="Python, LangChain, Streamlit, Ollama"
            description="AI-powered nutrition analysis app providing detailed nutritional information through conversational AI with USDA FoodData integration."
            imageSrc="/assets/nutri-analysis.jpg"
            liveLink="#" // Add your live link here
            githubLink="https://github.com/abhicodes369/local-rag"
            features={[
              "AI-powered conversations",
              "USDA FoodData API integration",
              "Efficient LLM processing",
            ]}
          />

          <ProjectCard
            title="Weather-based Music Recommender"
            technologies="React.js, FastAPI, OpenWeather API"
            description="Web application delivering personalized music recommendations based on real-time weather conditions with secure API management."
            imageSrc="/assets/music-site.jpg"
            liveLink="https://weather-music.onrender.com/"
            githubLink="https://github.com/abhicodes369/weather_music"
            features={[
              "Real-time weather integration",
              "Personalized recommendations",
              "Secure API key handling",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  technologies,
  description,
  imageSrc,
  liveLink,
  githubLink,
  features,
}: {
  title: string;
  technologies: string;
  description: string;
  imageSrc: string;
  liveLink: string;
  githubLink: string;
  features: string[];
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white mb-3">
          {title}
        </CardItem>

        <CardItem as="p" translateZ="60" className="text-cyan-300 text-sm mb-3">
          {technologies}
        </CardItem>

        <CardItem
          as="p"
          translateZ="40"
          className="text-gray-300 text-sm mb-4 leading-relaxed"
        >
          {description}
        </CardItem>

        <CardItem translateZ="30" className="mb-4">
          <h4 className="text-cyan-400 text-sm font-semibold mb-2">
            Key Features:
          </h4>
          <ul className="text-gray-300 text-xs space-y-1">
            {features.map((feature, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardItem>

        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={-3}
          className="w-full mb-4"
        >
          <div className="h-48 w-full bg-gray-700 rounded-xl group-hover/card:shadow-xl flex items-center justify-center">
            {imageSrc !== "/assets/stress-testing.jpg" &&
            imageSrc !== "/assets/nutri-analysis.jpg" ? (
              <img
                src={imageSrc}
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl"
                alt={`${title} thumbnail`}
              />
            ) : (
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">
                  {title.includes("Stress") ? "⚡" : "🥗"}
                </div>
                <p className="text-sm">Project Screenshot</p>
              </div>
            )}
          </div>
        </CardItem>

        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="a"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-xl text-xs font-normal transition-colors duration-200 ${
              liveLink === "#"
                ? "text-gray-500 cursor-not-allowed"
                : "text-white hover:text-cyan-400"
            }`}
          >
            {liveLink === "#" ? "Coming Soon" : "Live Link →"}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-white text-xl font-bold hover:text-cyan-400 transition-colors duration-200"
          >
            <GitHubLogoIcon className="w-8 h-8" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Project;
