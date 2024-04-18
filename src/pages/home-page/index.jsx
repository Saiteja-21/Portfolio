/* eslint-disable react/no-unescaped-entities */
import { Button } from "../../components/ui/button";
import { TypographyH1, TypographyLarge } from "../../components/ui/typography";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-20 py-20 box-border">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y12 gap-x-6">
        <div className="md:order-2">
          <img src={"/version-control-primary.svg"} alt="programmer" />
        </div>
        <div className="md:order-1 flex flex-col justify-evenly gap-6 mb-10">
          <TypographyH1>
            Welcome! I'm{" "}
            <span
              className="
            bg-clip-text text-transparent bg-gradient-to-tl from-primary  to-secondary"
            >
              Saiteja
            </span>
            ,
          </TypographyH1>
          <TypographyLarge>
            As a full-stack developer, I am consistently learning new web
            technologies. I'm passionate about my work, therefore, I constantly
            strive to learn new skills and advance my frontend and backend
            skills. My objective is to develop effective and innovative web
            applications that continue to challenge the boundaries of what is
            possible in the digital world.
          </TypographyLarge>

          <div className="flex justify-start">
            <div>
              <Button onClick={() => navigate("/contact")}>
                Get in touch
                <BsArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
