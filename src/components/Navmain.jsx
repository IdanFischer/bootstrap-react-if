import Nav from "react-bootstrap/Nav"
import './navmain.css'

export default function Navmain() {
  return (
    <Nav className="justify-content-center flex-row">
      <Nav.Item>
        <Nav.Link href="/home">
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/portfolio">
          Portfolio
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/about">
          About
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="contact">
          Contact
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}