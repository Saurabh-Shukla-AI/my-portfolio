import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import { portfolioData } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

type SmootherApi = {
  paused: (_value: boolean) => void;
  scrollTop: (value: number) => void;
  scrollTo: (target: string | null, _smooth?: boolean, _position?: string) => void;
};

export let smoother: SmootherApi = {
  paused: () => {},
  scrollTop: (value) => window.scrollTo({ top: value }),
  scrollTo: (target) => {
    if (!target) {
      return;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother = {
      paused: () => {},
      scrollTop: (value) => window.scrollTo({ top: value }),
      scrollTo: (target) => {
        if (!target) {
          return;
        }

        document.querySelector(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      },
    };
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;

      if (window.innerWidth > 1024) {
        e.preventDefault();
        smoother.scrollTo(target.getAttribute("data-href"), true, "top top");
      }
    };

    links.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {portfolioData.name.full}
        </a>
        <a
          href={`mailto:${portfolioData.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {portfolioData.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
