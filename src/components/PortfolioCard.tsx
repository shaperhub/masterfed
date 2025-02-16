import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PortfolioCardProps {
  imagesource: string,
  imagealt: string,
  website: string,
  websitelink: string,
  websitedescription: string,
  techstack: string[]
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({imagesource, imagealt, website, websitelink, websitedescription, techstack}) => {
  return (
    <Card className="flex flex-col mb-6 overflow-hidden border hover:border-black/20 dark:hover:border-white/20 shadow-md hover:shadow-lg transition-all duration-300 ease-out h-full dark:bg-mblack hover:bg-gray-100 dark:hover:bg-gray-800 cursor-default">
      <div className="">
        <Image className="h-full w-full overflow-hidden object-cover object-top" src={imagesource} width={500} height={300} alt={imagealt} />
      </div>
      <CardHeader>
        <CardTitle>{website}</CardTitle>
        <CardDescription>{websitedescription}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-wrap gap-1">
        {techstack.map((techstack) => (
          <Badge key={techstack} className="px-2 py-0 text-[12px]">{techstack}</Badge>
        ))}
      </CardContent>
      <CardFooter>
        <a href={websitelink} target="_blank" rel="noopener noreferrer"><Button className="bg-mpurple dark:bg-myellow text-white dark:text-black">Visit Link</Button></a>
      </CardFooter>
    </Card>

  )
}

export default PortfolioCard