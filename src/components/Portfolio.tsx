import { projects } from "@/data/portfolio"
import PortfolioCard from "@/components/PortfolioCard"

const Portfolio = () => {
  return (
    <div className="pt-16 pb-16 px-8 md:px-16 max-w-[850px] mx-auto">
      <h1 className="font-bold text-2xl md:text-4xl text-center pb-4">My Portfolio</h1>
      <p className="text-center text-lg pb-4">These are some of my projects:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        {projects.map((project) => (
          <div key={project.title}>
            <PortfolioCard imagesource={project.image} imagealt={project.imagealt} website={project.title} websitelink={project.link} websitedescription={project.description} techstack={project.techstack} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio