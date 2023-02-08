import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import "./layout.css"
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
import Button from "react-bootstrap/Button"

export default function Layout() {
  const [show, setShow] = useState(false)
  const [fullscreen, setFullscreen] = useState(true)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (


    <Container fluid>
      <Row>
        <Col><h1>Hello My Name Is... What? </h1></Col>
      </Row>
      <Row>
        <Col xs={12} sm={7}>Col 1</Col>
        <Col xs={12} sm={5}>Col 2</Col>
        <Col>Col 3</Col>
      </Row>

      <Row>
        <Col>
          <Button 
          onClick={handleShow}>Launch Modal</Button>
        </Col>
      </Row>

      <Row>
        <Col>
        <img src="https://w0.peakpx.com/wallpaper/625/717/HD-wallpaper-gogeta-blue-dragon-ball.jpg"
        width= "100%"
        onClick={handleShow} />
        </Col>
      </Row>
      
      <Row>
        <Col>

          <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Sad Vegeta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WWElYF6tyY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" 
              onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  )
}