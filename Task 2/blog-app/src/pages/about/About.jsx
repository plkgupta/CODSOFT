import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./about.css";
const PDF_FILE_URL = 'http://localhost:3000/resume.pdf'

export default function About() {
  const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
        <div className="about">
            <div className="aboutme">About Me</div>
            <img src="" alt="" />
            <div className="aboutimg"></div>
            <p className="aboutdesc">Hello! Myself Palak Gupta a B.Tech Computer Science Engineering Student. I am Front-end Developer with Expertise in creating and designing web projects. Highly Experienced in developing innovative designs and software. I am a sports person. I was Kho-Kho captain and incharge of my college and school. I am also a good vocalist. My short term goal is to be placed in good company and long time goal is to serve nation.</p>
            <div className="box">
            <div className="resume"><Link to="/resume" style=
          {{textDecoration:"none",color:"inherit"}}>Resume</Link></div>
            <div className="dnresume" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download Resume</div>
            </div> 
           
        </div>
    </>
  )
}