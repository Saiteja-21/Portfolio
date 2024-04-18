/* eslint-disable no-unused-vars */
import { Input } from "../../components/ui/input";
import { TypographyH2, TypographyP } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="container mt-20 box-border py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-10">
          <img src={"/contact-us-primary.svg"} alt="" />
        </div>
        <div>
          <div className="flex justify-center mb-10">
            <TypographyH2>Get in touch</TypographyH2>
          </div>
          <form className="flex container flex-col gap-4 justify-center caret-primary">
            <div>
              <Input type="text" placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Textarea placeholder="Message" />
            </div>
            <div>
              <div className="flex justify-start">
                <Button type="submit" className=" disabled:cursor-not-allowed">
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex justify-center my-8">
        <TypographyP>Contact</TypographyP>
      </div>
      <div className="flex justify-center space-x-4 flex-wrap mt-8">
        <div>
          <Link to={"https://www.facebook.com/profile.php?id=100078867720555"}>
            <FaFacebookSquare className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </div>

        <div>
          <Link to={"https://www.linkedin.com/in/katkam-saiteja-b50579233/"}>
            <AiFillLinkedin className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </div>

        <div>
          <Link to={"https://github.com/Saiteja-21"}>
            <BsGithub className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
