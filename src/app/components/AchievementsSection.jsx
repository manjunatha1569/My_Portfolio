"use client";
import React from "react";

const internships = [
  {
    company: "Thundertribes pvt ltd",
    role: "Software developmet Intern",
    duration: "March 2025 – Present",
    description:
      "Working on building responsive UI components with React and Tailwind CSS.",
  },
  {
    company: "Octanect pvt ltd",
    role: "Web development Intern",
    duration: "sept 2024 – Nov 2024",
    description:
      "Developed Frontend website using basic HTML, CSS and JavaScript. Collaborated with designers to implement UI/UX improvements.",
  },
 
];

const ExperienceSection = () => {
  return (
    <div className="py-8 px-4 xl:px-16 sm:py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Internship Experience
      </h2>
      <div className="space-y-8">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-[#18191E] border border-[#33353F] p-6 rounded-lg shadow-lg hover:shadow-primary-500/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white">
              {intern.role} <span className="text-primary-500">@ {intern.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">{intern.duration}</p>
            <p className="text-[#ADB7BE] text-base">{intern.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
