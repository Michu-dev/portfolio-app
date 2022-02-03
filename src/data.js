import { faJava, faReact, faHtml5, faCss3, faCuttlefish, faPython, faRProject, faGit, faVaadin } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const projects = [
    {
      title: "Football Database",
      subtitle: "Spring Data JPA + Vaadin",
      description:
        "CRUD database app for all CRUD methods created by using JPA and frontend in Vaadin. Database was invented and built from scratch in PL/SQL using all essential steps in database modelling.",
      image: "./Database.gif",
      link: "https://github.com/filipciesielski7/Football-Database",
    },
    {
      title: "IRC Communicator",
      subtitle: "Client in Java (JavaFX) + server in C",
      description:
        "IRC-Communicator with TCP server in C and Java client through which the user can join the room, create a new room, send and receive messages in the room, leave the room or remove other users from the own room.",
      image: "./IRC.gif",
      link: "https://github.com/filipciesielski7/IRC-Communicator",
    },
    {
      title: "Poker Recognizer",
      subtitle: "React + Python (Flask)",
      description:
        "Card recognition algorithm used to find the best poker hand combination from the photos. Frontend was built in React while card recognition in Python using OpenCV library.",
      image: "./Poker.gif",
      link: "https://github.com/filipciesielski7/Poker-Recognizer",
    },
    {
      title: "Weather",
      subtitle: "React with Hooks",
      description:
        "My weather app, made using React. It enables to search for a city and returns 5-day weather. The responses are fetched from openweather API by typing name of a city.",
      image: "./Weather.gif",
      link: "https://github.com/Michu-dev/Weather",
    },
    {
      title: "Sorting Madness",
      subtitle: "Spring Boot",
      description:
        "The project for Software Engineering made using Strategy pattern. The application implements 6 various sorting algorithms which can be used to sort different data sets using REST API and compare their sort times.",
      image: "./Sorting.gif",
      link: "https://github.com/filipciesielski7/Sorting-Madness",
    },
    {
      title: "Checkers",
      subtitle: "JavaFX",
      description:
        "The first project implemented in Java using JavaFX technology. It is a 1v1 offline game with the possibility to add version of playing with Computer or 1v1 online with someone else.",
      image: "./Checkers.gif",
      link: "https://github.com/Michu-dev/Checkers",
    }
    // {
    //   title: "OpenGL project",
    //   subtitle: "C++",
    //   description:
    //     "The project was made using OpenGL and assimp library to import objects made in Blender. It is possible to open and close the glassed door of the clock and move camera around the object.",
    //   image: "./Clock1.gif",
    //   link: "https://github.com/Michu-dev/Mechanical-Clock",
    // },
  ];

export const skills = [
    {
      icon: faReact,
      text: "React with Redux",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faJava,
      text: "Java (including Spring, Spring Boot, Hibernate, JavaFX)",
      style: "text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faHtml5,
      text: "HTML",
      style: "text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faCss3,
      text: "CSS",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faCuttlefish,
      text: "C/C++",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faPython,
      text: "Python",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faRProject,
      text: "R",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faDatabase,
      text: "PL/SQL",
      style: "text-white-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faGit,
      text: "Git",
      style: "text-green-400 w-6 h-6 flex-shrink-0 mr-4"
    },
    {
      icon: faVaadin,
      text: "Vaadin",
      style: "text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
    }
];