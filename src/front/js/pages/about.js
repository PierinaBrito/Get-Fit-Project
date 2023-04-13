import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles//component/about.css";

import juan from "../../img/home/juan.jpg";
import pierina from "../../img/home/pierina.png";

import About_us from "../component/about_us.js";

//import fit_00 from "../../img/home/AdobeStock4.jpeg";
// import fit_01 from "../../img/home/AdobeStock2.jpeg";
// import fit_02 from "../../img/home/AdobeStock3.jpeg";
// import fit_03 from "../../img/home/AdobeStock1.jpeg";
// import fit_05 from "../../img/home/AdobeStock5.jpeg";

// import Hero from "../component/hero.js";
// import { Footer } from "../component/footer.js";
// import Navbar from "../component/navbar.js";

export const About = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="App">
      <About_us
        imageSrc={juan}
        title={"Juan Parra"}
        subtitle={
          "Soy de Caracas, tengo 18 años, estudio ingeniería de sistemas en la universidad metropolitana. Me gusta el futbol y todo lo que tiene que ver con números y lógica.!"
        }
      />
      <About_us
        imageSrc={pierina}
        title={"Pierina Brito"}
        subtitle={
          "Soy de Cumaná, tengo 33 años. Estudio un Bachelor in Computer Science en National Louis University. En mi tiempo libre me gusta ejercitarme, conocer lugares nuevos y aprender nuevas tecnologias."
        }
        flipped={true}
      />
    </div>
  );
};
