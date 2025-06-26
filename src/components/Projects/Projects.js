
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import admin from "../../Assets/Projects/admin.png";
import watch from "../../Assets/Projects/watch.png";
import sharktank from "../../Assets/Projects/sharktank.png"
 import happenstance from "../../Assets/Projects/happenstance.png"
 import usa from "../../Assets/Projects/usa.png"
 import dollar from "../../Assets/Projects/dollar.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin panel"
              description="This is a responsive Admin Dashboard designed using pure HTML and CSS. It features a clean layout with sidebar navigation, analytics cards, and a traffic chart section. The interface displays key metrics like users, income, sessions, and conversion rates in a visually engaging way. It’s ideal for showcasing UI design and dashboard layout skills without relying on JavaScript frameworks.."
              ghLink="https://github.com/Dharti-patel4/adminpanel"
              demoLink="https://adminpanell-nine.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
               imgPath={happenstance}
              isBlog={false}
              title="Happenstance "
              description="This is a stylish eCommerce homepage inspired by the Happenstance brand, created using HTML and Bootstrap. It showcases a modern product banner, intuitive navigation, and a clean layout to highlight footwear products effectively. The project demonstrates responsive design and a professional front-end look suitable for fashion or retail websites."
              ghLink="https://github.com/Dharti-patel4/happenstance"
              demoLink="//happenstance12.netlify.app/
"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="i watch "
              description="This is a sleek eCommerce landing page for “I Watch,” built with HTML and Bootstrap. It leverages Bootstrap’s responsive grid, navbar, and carousel components to deliver a polished product showcase and smooth user navigation. The minimal design highlights key smartwatch features and calls-to-action, ensuring a professional, mobile-friendly shopping experience."
              ghLink="https://github.com/Dharti-patel4/i-watch"
              demoLink="//i-watch2-yygh.vercel.app/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dollar}
              isBlog={false}
              title="Dollar store "
              description="This is an interactive eCommerce homepage inspired by Dollar Tree, developed using HTML, CSS, and JavaScript. It features a product search bar, dynamic navigation, and category-based filtering for a smooth shopping experience. JavaScript is used to enhance interactivity, manage UI behaviors, and create a responsive, user-friendly design ideal for multi-category retail stores."
              ghLink="https://github.com/Dharti-patel4/dollarstore"
              demoLink="https://dollarstore-bgg3.vercel.app/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharktank}
              isBlog={false}
              title="Shark Tank"
              description="This is a Shark Tank-inspired web app built using HTML, CSS, and JavaScript, where users can add, view, search, and manage startup pitches. It implements full CRUD functionality — allowing users to Create, Read, Update, and Delete pitch entries dynamically. JavaScript is used to handle data manipulation, DOM rendering, and form validation without any backend. A great project to demonstrate real-world JS logic and interactivity."
              ghLink="https://github.com/Dharti-patel4/sharktankk"
              demoLink="https://sharktankpro.netlify.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usa}
              isBlog={false}
              title="USA Comman Beer"
              description="This project is an e-commerce website for “ USA Common Deer,” showcasing handcrafted American goods. Built using JavaScript, it features a dynamic user interface, category-based navigation, and interactive product listings. The site offers seamless user experience with login/logout, cart functionality, and item filtering using DOM manipulation and API calls.."
              ghLink="https://github.com/Dharti-patel4/USA-comman-beer"
              demoLink="https://usa-comman-beer.vercel.app/"
            />
          </Col>



          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
