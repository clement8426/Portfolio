"use client";

import { useEffect } from "react";

interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

interface ProjectFilterProps {
  setFiltered: React.Dispatch<React.SetStateAction<Project[]>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  const categories = [
    { key: "all", label: "All" },
    { key: "next", label: "Next.js" },
    { key: "react", label: "React" },
    { key: "rails", label: "Rails" },
    { key: "tailwind", label: "Tailwind" },
    { key: "bootstrap", label: "Bootstrap" },
  ];
  return (
    <div className="flex gap-8 my-10 items-center flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category.key}
          className={`text-gray-500
        ${activeCategory === category.key ? "border-[#de3136] border-b-2" : ""}
        `}
          onClick={() => setActiveCategory(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
