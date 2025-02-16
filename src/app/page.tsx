import Link from "next/link";
import { Button } from "@/components/ui/button";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import { AuroraText } from "@/components/ui/aurora-text";
import { CircleArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="hero bg-center bg-cover bg-no-repeat bg-hero-img bg-fixed flex flex-col items-center justify-center h-screen pb-12">
        <h1 className="font-bold text-3xl md:text-5xl my-12 text-white">Welcome to <AuroraText>Masterfed</AuroraText></h1>
        <p className="font-light text-lg mb-12 text-white text-center px-8">I am a Full Stack Web Developer with expertise in modern web technologies</p>
        <p className="font-light text-lg mb-12 text-white"></p>
        <Link href='#portfolio'>
            <Button className="bg-mpurple dark:bg-myellow text-white dark:text-black">See My Works</Button>
        </Link>
        <Link href='#about' className="pt-24">
            <CircleArrowDown color="#ffffff" size={40} />
        </Link>
      </section>
      <section className="about space-y-4">
        <About />
      </section>
      <section className="portfolio space-y-4" id="portfolio">
        <Portfolio />
      </section>
    </div>
  );
}
