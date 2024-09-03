import BlurFade from "@/components/magicui/BlurFade";
import Particles from "@/components/magicui/Particals";
import AnimatedShinyText from "@/components/magicui/ShinyText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

const DELAY = 0.15;

export const Home = () => {
  return (
    <section className="sm:py-20 py-[60px] max-h-screen relative">
      <Particles
        className="absolute inset-0 h-full sm:h-[80vh]"
        ease={100}
        quantity={150}
      />
      <div className="container relative mx-auto">
        <div className="flex items-center flex-col justify-center">
          <BlurFade delay={DELAY} inView>
            <div className="flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/30 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>🎉 Introducing Formly</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </BlurFade>
          <div>
            <BlurFade delay={DELAY * 2} inView>
              <div className="flex mt-4 mx-auto text-center justify-center">
                <div className="inline-flex relative">
                  <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text py-6 leading-none text-transparent dark:from-white dark:to-black">
                    Create Forms Effortlessly <br /> Get Analytics
                  </h1>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={DELAY * 3} inView>
              <div className="flex justify-center">
                <p className="text-center text-md mt-2 font-semibold text-neutral-300/80 max-w-xs px-7 sm:px-0 sm:max-w-sm">
                  Create forms with drag and drop builder, share them with
                  friends, get feedback and analytics.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={DELAY * 4} inView>
              <div className="flex items-center justify-center">
                <Button
                  className="mt-8 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring ring-offset-inherit hover:ring-white hover:ring-2 hover:ring-offset-current
                "
                  asChild
                >
                  <Link
                    href="/auth/login"
                    className="flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 whitespace-pre md:flex group relative gap-2 rounded-full font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
                  >
                    <span>Get Started</span>
                    <ArrowRightIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center gap-3">
                <BlurFade delay={0.15 * 5} inView>
                  <SiTypescript size={30} />
                </BlurFade>
                <BlurFade delay={0.15 * 6} inView>
                  <SiNextdotjs size={30} />
                </BlurFade>
                <BlurFade delay={0.15 * 7} inView>
                  <SiShadcnui size={30} />
                </BlurFade>
                <BlurFade delay={0.15 * 8} inView>
                  <BiLogoPostgresql size={45} />
                </BlurFade>
                <BlurFade delay={0.15 * 9} inView>
                  <SiPrisma size={30} />
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
