import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.honeycombtech.org" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Honeycomb</h3>
              <p>
              Honeycomb is a dynamic web application developed using the MEAN stack that serves as the official website for a company. The application offers various features including the ability for users to apply for internships and job positions directly through the platform, as well as the functionality to contact company officials for inquiries or support.              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>React</li>
              <li>Redux</li>
              <li>TypeScript </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.agastiayurveda.org" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Agasti Ayurveda</h3>
              <p>
              Agasti Ayurveda is a comprehensive web application developed for an Ayurvedic clinic and yoga center, offering a range of services including consultations, treatments, and yoga sessions conducted via Zoom calls. Leveraging the MEAN stack for its robust backend and frontend architecture, this application provides seamless functionality for managing appointments, processing payments through Razor payment gateway, and hosting virtual yoga sessions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Node.js</li>
                <li>Razor </li>
                <li>Zoom API</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://contact-manager-wheat.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>React-Redux-Contact-Manager</h3>
              <p>
              The React Redux Contact Manager is a web application designed to manage contacts efficiently. Leveraging the power of React.js for building dynamic user interfaces and Redux for managing the application state, this project provides a seamless experience for users to add, delete, and update contacts.              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>React js</li>
                <li>Redux</li>
                <li>TypeScript </li>
                <li>Bootstrap </li>
                <li>RESTful API </li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>PG DashBoard</h3>
              <p>
              PG Dashboard is a comprehensive web application built using React.js, designed specifically for managing postgraduate student attendance, backlogs, scholarships, and payments. Leveraging the power of React.js for the frontend, and integrating Razor payment for secure transactions and AWS for hosting, PG Dashboard provides an efficient solution for tracking and managing various aspects of postgraduate student records.              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>React js</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>AWS</li>   
                <li>Razor</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}