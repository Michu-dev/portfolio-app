import { faJava, faReact, faHtml5, faCss3, faCuttlefish, faPython, faRProject, faGit, faVaadin } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const projects = [
    {
      title: "Java Window App",
      subtitle: "JavaFX",
      description:
        "The first project written in Java using JavaFX technology. It is a 1v1 offline game with the possibility to add version of playing with Computer or 1v1 online with someone else.",
      image: "./Checkers.gif",
      link: "https://github.com/Michu-dev/Checkers",
    },
    {
      title: "React with Hooks",
      subtitle: "React",
      description:
        "My weather app, made using React. It enables to search for a city and returns 5-day weather. The responses are fetched from openweather API by typing name of a city.",
      image: "./Weather.gif",
      link: "https://github.com/Michu-dev/Weather",
    },
    {
      title: "React with Redux",
      subtitle: "CRUD App",
      description:
        "CRUD streaming app made to practice all most important aspects of building front-end applications with React and Redux. The functionality of the app is similar to Twitch.",
      image: "./CRUD.gif",
      link: "https://github.com/Michu-dev/CRUD-streaming-app",
    },
    {
      title: "OpenGL project",
      subtitle: "C++",
      description:
        "The project was made using OpenGL and assimp library to import objects made in Blender. It is possible to open and close the glassed door of the clock and move camera around the object.",
      image: "./Clock1.gif",
      link: "https://github.com/Michu-dev/Mechanical-Clock",
    },
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