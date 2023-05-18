import React from "react";

function SoundSection() {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="intro-section wrapper">
      <div className="body">
        <div className="intro-section-content content">
          <h2 className="title">New Era </h2>
          <p className="text"> Bigger And Better</p>
          <span className="description">
            Introducing the Tachikoma, the cutting-edge walker robot that
            combines advanced artificial intelligence with powerful, agile
            mobility. Designed by the world-renowned scientists of Section 9,
            the Tachikoma is the ultimate machine for a wide range of tasks,
            from reconnaissance to combat. With its advanced AI system, the
            Tachikoma can think and learn on its own, adapting to any situation
            and making split-second decisions.
          </span>
          <ul className="links">
            <li>
              <button className="button">Inquire</button>
            </li>
            <li>
              <button className="link" onClick={handleLearnMore}>
                Learn More
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
