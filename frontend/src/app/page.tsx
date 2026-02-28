import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLaravel,
  faWordpress,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import CircleDownIcon from "@/components/icons/CircleDownIcon";
import SchoolIcon from "@/components/icons/SchoolIcon";
import RobotIcon from "@/components/icons/RobotIcon";
import DumbbellIcon from "@/components/icons/DumbbellIcon";
import SkillsSlider from "@/components/sliders/SkillsSlider";
import SkillInfo from "@/components/common/SkillInfo";
import NextjsIcon from "@/components/icons/NextjsIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import SwiftIcon from "@/components/icons/SwiftIcon";
import FlutterIcon from "@/components/icons/FlutterIcon";
import MauiIcon from "@/components/icons/MauiIcon";
import AspNetIcon from "@/components/icons/AspNetIcon";
import WorkSlider from "@/components/sliders/WorkSlider";
import WorkInfo from "@/components/common/WorkInfo";

export default function HomePage() {
  const skillsInfo = {
    Laravel: (
      <FontAwesomeIcon icon={faLaravel} size="xl" className="text-red-400" />
    ),
    "ASP.NET Core": <AspNetIcon className="size-[24px]" />,
    Wordpress: (
      <FontAwesomeIcon icon={faWordpress} size="xl" className="text-grey-900" />
    ),
    React: (
      <FontAwesomeIcon icon={faReact} size="xl" className="text-blue-500" />
    ),
    Nextjs: <NextjsIcon className="size-[24px] text-grey-900" />,
    TailwindCSS: <TailwindIcon className="size-[24px] text-blue-400" />,
    Bootstrap: (
      <FontAwesomeIcon
        icon={faBootstrap}
        size="xl"
        className="text-purple-700"
      />
    ),
    SwiftUI: <SwiftIcon className="size-[24px] text-grey-900" />,
    Flutter: <FlutterIcon className="size-[24px]" />,
    ".NET Maui": <MauiIcon className="size-[24px]" />,
  };

  return (
    <main>
      <section id="call-to-action" className="container-small">
        <div className="h-dynamic-hero flex items-center justify-center">
          <div className="-mt-4 flex flex-col gap-5 md:-mt-8 md:flex-1 md:flex-row md:items-center md:justify-between">
            <div className="mx-auto md:order-2 md:mx-0">
              <div className="relative size-full h-[40vmin] max-h-[22.2rem] min-h-[15rem] w-[40vmin] min-w-[15rem] max-w-[22.2rem] md:h-[310px] md:w-[310px] lg:h-[40vmin] lg:w-[40vmin]">
                <Image
                  src="/img/profile-picture.jpg"
                  fill
                  alt="Image of me"
                  className="block rounded-[3px] object-cover object-top"
                />
              </div>
            </div>
            <div className="text-center md:order-1 md:text-left">
              <h1 className="leading-none">Pascal de Haan</h1>
              <p className="text-2xl font-semibold md:mt-1 md:text-3xl lg:text-[2.1rem]">
                Full stack developer
              </p>
              <div className="mt-4 flex flex-col items-center gap-4 md:mt-7 md:items-start xl:flex-row xl:items-center xl:justify-between">
                <div className="flex gap-4">
                  <Link href="#work" className="btn btn-primary">
                    View work
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pascal-de-haan/"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    Resume
                  </Link>
                </div>
                <div className="flex gap-4 text-blue-900">
                  <Link
                    href="https://github.com/Pascaldhh/"
                    target="_blank"
                    className="transition-colors hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/pascal-de-haan/"
                    target="_blank"
                    className="transition-colors hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                  <Link
                    href="mailto:me@devpascal.nl"
                    className="transition-colors hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-dynamic-bottom flex items-center justify-center">
          <Link href="#about">
            <CircleDownIcon className="size-[32px] animate-bounce" />
          </Link>
        </div>
      </section>
      <section id="about" className="pt-6 text-center">
        <h2 className="container">About me</h2>
        <div className="mt-8 flex flex-col gap-y-8 text-base font-medium md:mt-12 md:gap-y-24">
          <div className="container-small-left flex flex-col items-center gap-x-6 gap-y-2 md:flex-row md:gap-x-10 md:text-right">
            <SchoolIcon className="size-24 md:shrink-0" />
            <div className="hidden w-[70%] justify-center md:flex lg:w-full">
              <hr className="w-full border-b-0 border-l-0 border-r-0 border-t-[3.5px] border-dashed border-blue-800 lg:w-[60%]" />
            </div>
            <p>
              I&apos;m a passionate full-stack developer and current HBO-ICT
              student at Windesheim in the Netherlands.
            </p>
          </div>
          <div className="container-small-right flex flex-col items-center gap-y-2 md:flex-row md:gap-x-10 md:text-left lg:gap-x-6">
            <RobotIcon className="size-24 md:order-3 md:shrink-0" />
            <div className="hidden w-[70%] justify-center md:order-2 md:flex lg:w-full">
              <hr className="w-full border-b-0 border-l-0 border-r-0 border-t-[3.5px] border-dashed border-blue-800 lg:w-[60%]" />
            </div>
            <p className="md:order-1">
              Programming is more than just a career for me; it&apos;s a hobby
              that I love exploring at work, school, and in my free time.
            </p>
          </div>
          <div className="container-small-left flex flex-col items-center gap-x-6 gap-y-2 md:flex-row md:gap-x-10 md:text-right">
            <DumbbellIcon className="size-24 md:shrink-0" />
            <div className="hidden w-[70%] justify-center md:flex lg:w-full">
              <hr className="w-full border-b-0 border-l-0 border-r-0 border-t-[3.5px] border-dashed border-blue-800 lg:w-[60%]" />
            </div>
            <p>
              I hit the gym four times a week. Outside the tech world, I enjoy
              the challenge of solving Rubik&apos;s cubes.
            </p>
          </div>
        </div>
        {/* <Link
          href="/about"
          className="btn btn-primary mt-10 inline-block md:mt-20"
        >
          Find out more
        </Link> */}
      </section>
      <section id="skills" className="pt-[5.8rem]">
        <div className="relative bg-gradient-to-b from-red-primary-400 to-red-primary-500 py-8">
          <div className="md:container-small md:flex md:items-center md:gap-6">
            <h2 className="heading-white text-center md:order-2">Skills</h2>
            <SkillsSlider className="[mask-image:_linear-gradient(to_right,_rgba(0,0,0,0),_15%,_rgba(0,0,0,1),_50%,_rgb(0,0,0,1),_85%,_rgb(0,0,0,0))] md:order-1">
              {Object.entries(skillsInfo).map(([skill, icon], n) => (
                <SkillInfo key={n} icon={icon} text={skill} />
              ))}
            </SkillsSlider>
          </div>
        </div>
      </section>
      <section id="work" className="pt-[5.8rem]">
        <div className="text-center lg:text-left">
          <div className="container-small lg:flex lg:items-center lg:justify-between">
            <h2>Checkout my work</h2>
            {/* <Link
              href="/work"
              className="btn btn-primary hidden lg:inline-block"
            >
              See all work
            </Link> */}
          </div>
          <WorkSlider className="mb-10 mt-8 md:mb-14 md:mt-12">
            <WorkInfo
              title="Portfolio"
              image="/img/project/portfolio.png"
              alt="Portfolio website screenshot"
              bgColor="text-red-primary-600"
              githubUrl="https://github.com/Pascaldhh/DevPascal"
              liveUrl="https://devpascal.nl/"
            />
            <WorkInfo
              title="Enveus"
              image="/img/project/enveus.png"
              alt="Enveus website screenshot"
              bgColor="text-grey-700"
              githubUrl="https://github.com/Pascaldhh/Nextjs-multipage-with-scrollanimations"
              liveUrl="http://demo.devpascal.nl/"
            />
            <WorkInfo
              title="Sudoku"
              image="/img/project/sudoku.jpeg"
              bgColor="text-orange-700"
              alt="Sudoku java app screenshot"
              githubUrl="https://github.com/Pascaldhh/Sudoku"
            />
            <WorkInfo
              title="Enveus of creation"
              image="/img/project/enveus-of-creation.png"
              bgColor="text-blue-700"
              alt="Enveus of creation website screenshot"
              githubUrl="https://github.com/Pascaldhh/Nextjs-onepage"
              liveUrl="http://demo2.devpascal.nl/"
            />
          </WorkSlider>
          {/* <Link href="/work" className="btn btn-primary lg:hidden">
            See all work
          </Link> */}
        </div>
      </section>
      <section id="contact" className="pt-[5.8rem]">
        <div className="relative bg-gradient-to-b from-red-primary-400 to-red-primary-500 py-12 md:py-16 xl:py-20">
          <div className="container text-center">
            <h2 className="heading-white mb-8 xl:mb-12">Like what you see?</h2>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
