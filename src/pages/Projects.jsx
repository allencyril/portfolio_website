import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import blog from "../assets/projects/blogwebsite.jpeg";
import ems from "../assets/projects/ems.jpeg"
import commerce from "../assets/projects/e-com.jpg"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Ontario DriveTest Blog Website"
              description="Hey there! 🚗 Curious about the latest Ontario Drivetest updates? Our website has you covered! Built using MongoDB, Express, and Node.js, we're your go-to source for all things driving-related in Ontario. From tips to changes in the process, stay informed with ease. Hop on and navigate through the world of Ontario driving updates"
              ghLink="https://github.com/allencyril/Ontario-DriveTest-Blog-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="WordPress Website"
              description="OpticRealm is your ultimate destination for premium cameras and accessories. Our WordPress site, meticulously crafted for SEO, ensures maximum visibility. With a focus on technical excellence, we provide seamless browsing experiences, verified on Google Search Console, and optimized for mobile-first indexing. Join us and redefine visual storytelling!"
              ghLink="https://opticrealm.altervista.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="Medical Waste Classification using Deep Learning"
              description="Implemented deep learning techniques for medical waste classification, leveraging TensorFlow and PyTorch. Aiming to revolutionize waste management through automated sorting and improved disposal strategies"
              ghLink="https://github.com/allencyril/Medical-Waste-Classification-using-Deep-Learning/tree/main"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects