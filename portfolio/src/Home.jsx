import React from "react";
import { Link } from 'react-router-dom';
import "./css/home.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Home = () => {
    return (
        <>
            {/* Intro */}
            <div className="header">
                <div className="header-content">
                    <h1>Hi, I'm Devanshu Augusty</h1>
                    <p>I am a Web developer, learning and growing everyday</p>
                    <div className="social-icons">
                        <div className="social">
                            <Link to="https://www.linkedin.com/in/devanshu-augusty-25204a1b8/" target="_blank" className="social-link"><BsLinkedin /></Link>
                        </div>
                        <div className="social">
                            <Link to="https://github.com/Devanshu-Augusty/" target="_blank" className="social-link"><BsGithub /></Link>
                        </div>
                        <div className="social">
                            <Link to="https://twitter.com/DAugus7" target="_blank" className="social-link"><BsTwitter /></Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Skills */}
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills-content">
                    <div className="tech-skills">
                        <h2>Languages</h2>
                        <div className="skill-box">
                            <ul>
                                <li>C++</li>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScipt</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tech-skills">
                        <h2>Framework</h2>
                        <div className="skill-box">
                            <ul>
                                <li>Django</li>
                                <li>Django Rest Framework</li>
                                <li>Bootstrap</li>
                                <li>Reactjs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tech-skills">
                        <h2>Dev Tools</h2>
                        <div className="skill-box">
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;