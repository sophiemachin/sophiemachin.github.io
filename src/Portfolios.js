import book_text from "./images/book_text.jpg";
import gateway from "./images/gateway.png"


const Portfolios = [{
  title: 'Language processing app',
  subheader: 'A small, single-page language processing app',
  img : book_text,
  imgAlt : "Text from a book",
  text : [
    'Front end: React and Material-UI',
    'Back end: Python and Natural Language Processing Toolkit',
  ],
  frontEndUrl: "https://sophiemachin.github.io/wordcounter_frontend/",
  githubUrl: "",
}, {
  title: 'Patient Gateway',
  subheader: 'A gateway for doctors to view patient data',
  img : gateway,
  text : [
    "A frontend-only app for displaying large amounts of data. Built using" +
    "React and Material-UI.",
  ],
  frontEndUrl: "https://sophiemachin.github.io/gateway/",
  githubUrl: "",
}
];

export default Portfolios