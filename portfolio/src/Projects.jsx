import './css/projects.css';
import { Link } from 'react-router-dom';
import image from './images/skills_bg.jpeg';
import social_media from './images/Social Media Website.png';
import portfolio from './images/Portfolio.png';
import todo from './images/Todo List.png';
import anime from './images/Anime Main Character.png';
import calculator from './images/React Calculator.png';
import authentication from './images/User Authetication.png';

const Projects = () => {
    return (
        <div className="projects"><h1>Projects</h1>
            <div className="grid">
                <Link className="grid-cell" to="https://github.com/Devanshu-Augusty/Social-Media-Website" target='_blank'>
                    <div className="project">
                    <img src={social_media} alt="project 1" />
                    <h4>Social Media Website</h4>
                    </div>
                </Link>
                <Link className="grid-cell" to="/">
                    <div className="project">
                    <img src={portfolio} alt="project 2" />
                    <h4>Portfolio</h4>
                    </div>
                </Link>
                <Link className="grid-cell" to="https://github.com/Devanshu-Augusty/TODO-list" target='_blank'>
                    <div className="project">
                    <img src={todo} alt="project 3" />
                    <h4>Todo List</h4>
                    </div>
                </Link>
                <Link className="grid-cell" to="https://devanshu-augusty.github.io/Anime-Main-Characters/index.html" target='_blank'>
                    <div className="project">
                    <img src={anime} alt="project 4" />
                    <h4>Anime Main characters</h4>
                    </div>
                </Link>
                <Link className="grid-cell" to="https://react-calculator-devanshu-augusty.netlify.app/" target='_blank'>
                    <div className="project">
                    <img src={calculator} alt="project 5" />
                    <h4>React-Calculator</h4>
                    </div>
                </Link>
                <Link className="grid-cell" to="https://github.com/Devanshu-Augusty/User-authentication" target='_blank'>
                    <div className="project">
                    <img src={authentication} alt="project 6" />
                    <h4>User Authentication</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;