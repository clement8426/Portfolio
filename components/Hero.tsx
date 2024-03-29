import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <header id="home" className="relative h-fit py-10">
      <ParticlesBackground />
      <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
        <div className="flex flex-col justify-center text-white flex-1 max-md:order-2 max-md:text-center">
          <h2 className="font-bold md:text-4xl text-3xl mb-2">
            Hello I'm Clement BASTIEN a Full-Stack
          </h2>
          <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl text-[#de3136] font-bold mb-5">
            Developer
          </h1>
          <span className="md:w-3/4 mb-5">
            Full-Stack Developer proficient in Ruby on Rails and JavaScript, a
            graduate of the LE Wagon bootcamp, currently learning React and
            Next.js, offering adaptability, perseverance, and a strong
            motivation to contribute to innovative web development projects.{" "}
            <Link href={"#contact"}>
              <span className="text-[#de3136] underline text-sm">
                Contact Me &#8594;
              </span>
            </Link>
          </span>

          <div className="flex gap-5 text-[#de3136] text-2xl max-md:justify-center">
            <Link href="https://www.linkedin.com/in/clement-bastien/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/clement8426">
              <FaGithub />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 justify-end max-md:order-1 max-md:mb-3">
          <Image
            src={"/header.png"}
            width={350}
            height={350}
            role="img"
            aria-label="clement bastien Image"
            alt="clement bastien Image"
            className="md:justify-self-end max-md:w-96"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
