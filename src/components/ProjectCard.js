import { Col } from "react-bootstrap";
import { AiFillGithub } from 'react-icons/ai'

export const ProjectCard = ({ title, description, imgUrl, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div>
            <a className="links" href={github} target='_blank'><AiFillGithub/></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
