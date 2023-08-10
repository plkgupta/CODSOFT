import "./home.css";
import Projects from "../../projects/Projects";
import Head from "../../top/Top";
import Edge from "../../edge/Edge";
import Footer from "../../footer/Footer";

export default function Home() {
  return (
    <>
      <Head />
      <div className="homepage">
        <Projects/>
        <Edge/>

      </div>
      <Footer/>
    </>
  );
}
