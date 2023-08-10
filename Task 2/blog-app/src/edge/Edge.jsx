import "./edge.css";

export default function Edge() {
  return (
    <>
      <div className="edge">
        <div className="edgebox">
          <span className="edgetitle">ABOUT ME</span>
          <div className="img"></div>
          <p className="para">
            Hello! Myself Palak Gupta a B.Tech Computer Science Engineering
            Student. I am Front-end Developer with Expertise in creating and
            designing web projects. Highly Experienced in developing innovative
            designs and software. I am a sports person. I was Kho-Kho captain
            and incharge of my college and school. I am also a good vocalist. My
            short term goal is to be placed in good company and long time goal
            is to serve nation.
          </p>
        </div>
        <div className="edgebox">
          <span className="edgetitle">My Skills</span>
          <div className="edgeskill">
            <li className="edgeli">C/C++</li>
            <li className="edgeli">Front End</li>
            <li className="edgeli">React Js</li>
            <li className="edgeli">Python</li>
            <li className="edgeli">Node JS</li>
            <li className="edgeli">Web Designing</li>
          </div>
        </div>
        <div className="edgebox">
          <span className="edgetitle">FOLLOW</span>
          <div className="edgesm">
            <a
              href="https://www.linkedin.com/in/palak-gupta-90674b238"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="edgeicon fa-brands fa-linkedin"></i>
            </a>
            <i className="edgeicon fa-brands fa-instagram"></i>
            <i className="edgeicon fa-solid fa-envelope"></i>
            <a
              href="https://github.com/plkgupta"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="edgeicon fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
