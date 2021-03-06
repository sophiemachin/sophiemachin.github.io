import book_text from "./images/book_text.jpg";
import gateway from "./images/gateway.png"
import fitbit from "./images/fitbit.png"


const Portfolios = [{
  title: 'Language processing app',
  subheader: 'A single-page language processing app',
  img : book_text,
  imgAlt : "Text from a book",
  text : [
    'Text is entered using a single-page app, which is uploaded to a ' +
    'server. The server analyses the text and returns the results.',
    `Front end: React`,
    'Back end: Python and Natural Language Processing Toolkit',
  ],
  frontEndUrl: "https://sophiemachin.github.io/wordcounter_frontend/",
  githubUrl: "https://github.com/sophiemachin/flaskapp",
}, {
  title: 'Patient gateway app',
  subheader: 'A gateway for doctors to view patient data',
  img : gateway,
  text : [
    "A frontend-only app for displaying large amounts of data.",
    "Front end: React",
  ],
  frontEndUrl: "https://sophiemachin.github.io/gateway/",
  githubUrl: "https://github.com/sophiemachin/gateway",
}, {
  title: 'Data visualisation app',
  subheader: 'A tool for improved Fitbit data visualisation',
  img : fitbit,
  text : [
    "A visualisation tool for tracking data generated using Fitbit and the Aria2 scales.",
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