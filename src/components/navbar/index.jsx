import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import { TypographyH4 } from "../ui/typography";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex pt-10 px-0 container">
        <div className="inline-flex items-center flex-grow">
          <NavLink
            exact
            to="/"
            className="flex justify-center items-center"
            activeClassName="active-link"
          >
            <RxPerson className="text-4xl text-foreground mr-2" />
            <TypographyH4>Saiteja</TypographyH4>
          </NavLink>
        </div>
        <div className=" flex justify-center items-center mr-4">
          <ModeToggle />
        </div>

        <div className="flex justify-evenly items-center gap-6">
          <div className="block md:hidden items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMobileMenuToggle}
                >
                  <HiMenuAlt3 className="text-4xl text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
               
                <DropdownMenuItem>
                  <NavLink
                    to="/skills"
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    Skills
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink
                    to="/projects"
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    Projects
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    Contact
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex justify-evenly items-center gap-4">
            <div>
              <TypographyH4>
                <NavLink
                  to="/skills"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Skills
                </NavLink>
              </TypographyH4>
            </div>
            <div>
              <TypographyH4>
                <NavLink
                  to="/projects"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Projects
                </NavLink>
              </TypographyH4>
            </div>
            <div>
              <TypographyH4>
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Contact
                </NavLink>
              </TypographyH4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
