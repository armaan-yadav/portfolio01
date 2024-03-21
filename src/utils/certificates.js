import codsoft from "../images/certificates/codsoft.png";
import infosys from "../images/certificates/infosys.png";
import namasteReact from "../images/certificates/nam.png";

function certificateObj(id, title, url, description, image) {
  return {
    id,
    title,
    url,
    description,
    image,
  };
}

const CERTIFICATES = [
  certificateObj(
    3,
    "NAMASTE REACT",
    "https://drive.google.com/file/d/1d3v-UuH7hSszudURJGKKOyGyYdqVA16I/view?usp=drive_link",
    "Namaste Dev is an online platform to learn FrontEnd Development related course. I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course  authorized by AkshaySaini(founder of Namaste Dev).",
    namasteReact
  ),
  certificateObj(
    1,
    "Codsoft FrontEnd Internship",
    "https://drive.google.com/file/d/1wcnBpBx1PIh3NolqyIg-l2kSRz1vScJC/view?usp=drive_link",
    "Was given a chance to prove my skills where I developed several websites like landing page for an audio brand, portfolio website etc and completed several tasks given by the team. ",
    codsoft
  ),
  certificateObj(
    2,
    "Programming Using C++ by Infosys SpringBoard",
    "https://drive.google.com/file/d/1lqBhUp8PXWxpvRPhH7Ri4FBm-SPq1VsH/view?usp=drive_link",
    "",
    infosys
  ),
];
export default CERTIFICATES;
