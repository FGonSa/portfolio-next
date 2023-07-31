import { GetStaticProps } from "next";

import { Experience, PageInfo, Project, Skill, Social } from "../typings";

import Link from "next/link";
import Header from "./components/Header";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Header socials={socials} />

  
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
