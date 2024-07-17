import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Row className="w-100 mt-5 d-flex justify-content-center align-items-center ps-4">
        <Col md={1}></Col>
        <Col md={5} className="p-3">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur
            id placeat aperiam dolore? Quam temporibus autem animi earum, sequi
            magni architecto possimus sunt officia fuga, sint eligendi
            voluptates atque! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dicta, et quia explicabo officiis maxime cumque
            hic quaerat, voluptates nihil eveniet, rem voluptate natus
            repellendus sed odio nam totam suscipit? Laborum!
          </p>
          <button className="btn btn-warning mt-5"><Link to={'/home'} style={{color:"white", textDecoration:"none"}}>Get Started</Link></button>
        </Col>
        <Col md={1}></Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center P-5"
        >
          <img
            src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif"
            alt=""
            className="w-75"
          />
        </Col>
      </Row>
      <div className="container">
        <h3 className="text-center my-5">Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img
                variant="top"
                src="https://i.makeagif.com/media/6-22-2017/FPvzmi.gif"
                height={"300px"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="px-md-5">
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif"
                height={"300px"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img
                variant="top"
                src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1025.gif"
                height={"300px"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className="text-warning">Simple fast and Powerful</h3>
                <p className="mt-5 pe-4" style={{textAlign:"justify"}}>
                  <span className="fs-5">Play Everything</span>: Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Omnis, nostrum!
                  Magnam quia, soluta ex, eum quam reiciendis sequi voluptatem
                  temporibus explicabo corporis.
                </p>
                <p className="mt-4 pe-4" style={{textAlign:"justify"}}>
                  <span className="fs-5">Play Everything</span>: Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Omnis, nostrum!
                  Magnam quia, soluta ex, eum quam reiciendis sequi voluptatem
                  temporibus explicabo corporis.
                </p>
                <p className="mt-4 pe-4" style={{textAlign:"justify"}}>
                  <span className="fs-5">Play Everything</span>: Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Omnis, nostrum!
                  Magnam quia, soluta ex, eum quam reiciendis sequi voluptatem
                  temporibus explicabo corporis.
                </p>
              </div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/yH7eDWTH5iM"
                  title="Illuminati (Music Video) | Sushin Shyam | Dabzee | Vinayak Sasikumar | Think Originals"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
