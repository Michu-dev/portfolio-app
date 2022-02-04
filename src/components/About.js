import React from 'react';
import Typical from 'react-typical';

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, My name is Michal 
                        <br className="hidden lg:inline-block" /> And I'm a&nbsp;
                        <Typical
                            loop={Infinity}
                            className="text-gray-500"
                            wrapper="b"
                            steps={[
                                'student',
                                1000,
                                'programmer',
                                1000,
                                'tutor',
                                1000
                            ]}
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a student of Computer Science at Poznan University of Technology. I like to learn modern technology using in web/software development.
                        I want to land my first job in web/software development or data science. Actually I'm improving my skills in Spring to develop more complex backend
                        apps in Java. I've been learning React and Redux too in which I put a couple of apps including this one. 
                        Also, I've achieved some certfications and made some different evolving projects. Some of them are listed here.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/Resume.pdf"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" download>
                            Download CV
                        </a>
                        <a 
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="Front.jpg"
                    />
                </div> 
            </div>
        </section>
    );
};

export default About;