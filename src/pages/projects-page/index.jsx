import { TypographyH3 } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "E-Commerce App",
    description:
      "Ecommerce app is developed using MERN stack. The app focuses on clothing retail and features distinct categories for men, women, and kids. Notably, it includes a persistent shoppingcart functionality, allowing users to retain their selected items even after logging out and returning to the platform.",
    source_link: "https://github.com/Saiteja-21/E-commerce",
    demo_link: "https://e-commerce-client-one-gamma.vercel.app/",
    image: "/ecommerce.svg",
  },
  {
    name: "Insurance Application",
    description:
      "Insurance app is a application where people can select a policy and use it when they are admitted in a hospital. And admin will either accept or reject the request.",
    source_link: "https://github.com/Saiteja-21/BYOA-Insurance_App",
    demo_link: "https://saiteja-21.github.io/BYOA-Insurance_App/",
    image: "/insurance.svg",
  },
  {
    name: "Todolist",
    description:
      "A full-stack web application that allows users to manage employees. Users can add, edit, and delete employees. The app also allows users to filter employees by name, email, and phone number.",
    source_link: "https://github.com/Saiteja-21/TodoList",
    demo_link: "https://saiteja-21.github.io/TodoList",
    image: "/todo.svg",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 box-border">
      <div className="mb-6">
        <TypographyH3>Projects</TypographyH3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6   border-border border-2 shadow-md transition-all duration-300 hover:border-foreground hover:shadow-lg hover:border-2 "
          >
            <div className="text-xl font-bold  mb-6">{project.name}</div>

            <img
              src={project.image}
              alt={project.name}
              className="h-40 w-full object-contain rounded-md mb-4"
            />
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="w-1/2 mr-2 p-2 cursor-pointer"
              >
                <Link to={project.source_link}>Source Code</Link>
              </Button>
              <Button className="w-1/2 ml-2 p-2 cursor-pointer">
                <Link to={project.demo_link}>Live Demo</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
