"use client"

import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Badge } from "./ui/badge"
import { techskills } from "@/data/skills"
import { BorderBeam } from "./ui/border-beam"
import Services from "./Services"

const chartData = [
  { browser: "react", frequency: 275, fill: "var(--color-react)" },
  { browser: "nextjs", frequency: 200, fill: "var(--color-nextjs)" },
  { browser: "angular", frequency: 187, fill: "var(--color-angular)" },
  { browser: "nodejs", frequency: 173, fill: "var(--color-nodejs)" },
  { browser: "wordpress", frequency: 90, fill: "var(--color-wordpress)" },
]

const chartConfig = {
  frequency: {
    label: "Frequency",
  },
  react: {
    label: "React",
    color: "hsl(var(--chart-1))",
  },
  nextjs: {
    label: "Next.js",
    color: "hsl(var(--chart-2))",
  },
  angular: {
    label: "Angular",
    color: "hsl(var(--chart-3))",
  },
  nodejs: {
    label: "Node.js",
    color: "hsl(var(--chart-4))",
  },
  wordpress: {
    label: "WordPress",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const About = () => {
  return (
    <div className="pt-16 pb-8 px-8 md:px-16 max-w-[850px] mx-auto text-center" id="about">
      <h1 className="font-bold text-2xl md:text-4xl pb-2">About Me</h1>
      <p className="text-base md:text-lg mt-2 pb-4 text-justify">
        My journey into design and development began in childhood, when I first discovered the joy of creating visuals using WordArt in Microsoft Word. 
        That early fascination with digital design grew as I explored tools like Adobe Illustrator and Photoshop, spending hours experimenting and learning on my own. 
        In college, I found the perfect bridge between creativity and logic in web development. It allowed me to bring my designs to life through code. 
        Since then, I&apos;ve been passionate about building thoughtful, visually engaging websites and tackling projects that challenge me to grow. 
        I love collaborating with others to transform their ideas into digital realities.
      </p>
      <Services />
      <p className="text-lg md:text-2xl font-bold py-4">These are some of my areas of expertise:</p>
      <div className="flex flex-wrap gap-1 pb-4">
        {techskills.map((skills: string) => (
          <Badge key={skills} className="px-2 py-0 text-[12px]">{skills}</Badge>
        ))}
      </div>
      <div className="pt-4">
        <Card className="flex flex-col relative">
          <CardHeader className="items-center pb-0">
            <CardTitle>Most Used Frameworks</CardTitle>
            <CardDescription>These are some of my most frequently used frameworks for building projects</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[300px]"
            >
              <PieChart>
                <Pie data={chartData} dataKey="frequency" />
                <ChartLegend
                  content={<ChartLegendContent nameKey="browser" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <BorderBeam duration={9} size={400} />
        </Card>
      </div>
    </div>
  )
}

export default About
