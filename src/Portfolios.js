import book_text from "./images/book_text.jpg";
import gateway from "./images/gateway.png"
import fitbit from "./images/fitbit.png"


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
  title: 'Patient gateway app',
  subheader: 'A gateway for doctors to view patient data',
  img : gateway,
  text : [
    "A frontend-only app for displaying large amounts of data. Built using" +
    "React and Material-UI.",
  ],
  frontEndUrl: "https://sophiemachin.github.io/gateway/",
  githubUrl: "",
}, {
  title: 'Data visualisation app',
  subheader: 'A tool for improved Fitbit data visualisation',
  img : fitbit,
  text : [
    "A data visualisation tool for tracking data generated using Fitbit and the Aria2 scales.",
    "Front end: React",
    "Data processing: Python",
    "Data visualisation: Plotly",
    "Database: SQLite",
],
  frontEndUrl: "https://guarded-tor-60924.herokuapp.com/",
  githubUrl: "https://github.com/sophiemachin/fitbitdata",
}
];

export default Portfolios