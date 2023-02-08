import Button from "react-bootstrap/Button"

/*
primary: blue
secondary: grey
success: green
warning: yellow
danger: red
light: white
info: teal
dark: black
*****************
sm md lg xl xxl
*/

export default function Content() {
  return (
    <>
      <h2>Content</h2>
      <Button variant="outline-info" size="lg" active>Login</Button>
      <Button variant="outline-warning" size="lg" disabled>Recovery Password</Button>
    </>
  )
}