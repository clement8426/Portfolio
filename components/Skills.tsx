import ProgressBar from "./ProgressBar";

const skills = [
  { iconPath: "/html5.png", title: "HTML", percentage: 90 },
  { iconPath: "/css.png", title: "CSS", percentage: 80 },
  {
    iconPath: "/js.png",
    title: "JavaScript",
    percentage: 80,
  },
  {
    iconPath: "/rails.png",
    title: "Rails",
    percentage: 90,
  },
  {
    iconPath: "/react.png",
    title: "React",
    percentage: 50,
  },
  { iconPath: "/next.png", title: "NextJs", percentage: 40 },
  { iconPath: "/bootstrap.png", title: "Bootstrap", percentage: 85 },
  { iconPath: "/tailwind.png", title: "Tailwind", percentage: 50 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full h-fit py-20 relative bg-gray-100">
      <div className="flex justify-center">
        <span className="bg-yellow-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5">
          Skills
        </span>
      </div>
      <div className="max-w-[1400px] w-[91%] mx-auto grid md:grid-cols-2 md:gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <ProgressBar {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
