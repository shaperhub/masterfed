import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { FaLinkedin } from "react-icons/fa6";

export async function LinkedinFooter() {
  return (
    <div className="z-10 flex items-center justify-center">
      <a href="https://linkedin.com/in/leonwoke" target="_blank">
        <AnimatedGradientText>
            <FaLinkedin /> <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
            className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
            >
              LinkedIn
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </a>
    </div>
  );
}
