"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 mt-4">
        {[
          { name: "Machine Learning", img: "/images/coding.png" },
          { name: "Data Analytics", img: "/images/analysis.png" },
          { name: "Python", img: "/images/python.png" },
          { name: "MySQL", img: "/images/Mysql-database.png" },
          { name: "R", img: "/images/r.png" },
          { name: "Tableau", img: "/images/Tableau.png" },
          { name: "HTML", img: "/images/html.png" },
          { name: "CSS", img: "/images/css-3.png" },
          ,
        ].map((skill) => (
          <div key={skill.name} className="flex flex-col items-center text-center">
            <Image src={skill.img} alt={skill.name} width={60} height={60} />
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SSLC - Shri Vinayaka High School (91%)</li>
        <li>PUC - Disha PU College of Science (94%)</li>
        <li>B.E. in AI & ML - DSCE (8.7 CGPA)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ServiceNow Certified System Administrator</li>
        <li>ServiceNow Certified Application Developer</li>
        <li>Google Cloud Career Launchpad Program</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About me image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Machine Learning and Data Analytics enthusiast with hands-on experience in Python, SQL, Tableau, and data visualization. Passionate about solving real-world problems using data-driven insights and constantly learning modern tools and technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
