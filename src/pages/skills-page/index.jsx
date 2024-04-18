import React from "react";
import { TypographyH3 } from "../../components/ui/typography";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";


const skillsData = [
  { name: "HTML5", icon: AiFillHtml5 },
  { name: "CSS3", icon: DiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: BiLogoMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Git", icon: BiLogoGit },
  { name: "React Router", icon: SiReactrouter },
];

const SkillsPage = () => {

  return (
    <div
      className="container mx-auto px-4 py-8 box-border"
      
    >
      <div className="mb-10">
        <TypographyH3>Skills & Technologies</TypographyH3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-4 border-border border-2 shadow-md transition-all duration-300 hover:border-foreground hover:shadow-lg hover:border-2  "
           
          >
          
            <div className="flex items-center mb-2">
               {React.createElement(skill.icon, {
                className: "text-4xl text-inherit mr-2",
              })} 
            
              <TypographyH3>{skill.name}</TypographyH3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
