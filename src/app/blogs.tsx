import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "../components/ui/threecard";

const Blogs = () => {
  return (
    <section className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 text-center">
          Blogs & Articles
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          <BlogCard
            title="Kadane Algorithm"
            description="My understanding about Kadane Algorithm"
            readTime="6 min read"
            date="Febuary 2025"
            tags={["Computer Science", "Algorithm"]}
            blogLink="https://www.notion.so/Kadanes-algorithm-1fc247b31f6b802c9590f6e125512281?showMoveTo=true"
          />
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({
  title,
  description,
  readTime,
  date,
  tags,
  blogLink,
}: {
  title: string;
  description: string;
  readTime: string;
  date: string;
  tags: string[];
  blogLink: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white mb-2">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-300 text-sm mb-4 leading-relaxed"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="40"
          className="flex justify-between items-center mb-4"
        >
          <span className="text-cyan-300 text-xs">{date}</span>
          <span className="text-gray-400 text-xs">{readTime}</span>
        </CardItem>
        <CardItem translateZ="30" className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-700/50"
            >
              {tag}
            </span>
          ))}
        </CardItem>
        <div className="flex justify-end">
          <CardItem
            translateZ={20}
            as="a"
            href={blogLink}
            className="flex items-center px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            Read More <ExternalLinkIcon className="w-4 h-4 ml-2" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Blogs;
