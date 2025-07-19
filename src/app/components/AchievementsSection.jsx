"use client";
import React from "react";

const internships = [
  {
    company: "NUEVERA INFOTECH PVT LTD",
    role: " Associate Artificial Intelligence Intern",
    duration: " July– September , 2024",
    description:
      "Developed responsive web pages using HTML, CSS, and JavaScript, focusing on clean and consistent layouts to enhance user experience.",
        },
  {
    company: " Infosys Springboard x CoLLearn",
    role: "Sports Analytics Intern(Data Analytics)",
    duration: "January– March , 2025",
    description:
      "Analyzed sports performance data using Excel and Tableau to identify key metrics and performance trends",
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
