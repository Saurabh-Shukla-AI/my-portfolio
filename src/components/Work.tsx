import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");

      if (!boxes.length || !container) {
        return false;
      }

      const firstBox = boxes[0] as HTMLElement;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = firstBox.getBoundingClientRect();
      const parentWidth = firstBox.parentElement?.getBoundingClientRect().width ?? 0;
      const padding = parseInt(window.getComputedStyle(firstBox).padding, 10) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
      return true;
    }

    if (!setTranslateX()) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {portfolioData.projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.stack}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} link={portfolioData.github} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
