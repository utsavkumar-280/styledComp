import "./styles.css";
import styled from "styled-components";
import Button from "../components/Button";

const Body = styled.section`
  background-color: pink;
  padding: 2rem;
`;

const Greet = styled.section`
  background-color: rebeccapurple;
  color: white;
  padding: 2rem;
  font-size: 2rem;
  font-family: sans-serif;
`;

function App() {
  return (
    <Body className="App">
      <Greet>
        <div>Hello CodeSandbox</div>
        <Button>My Button</Button>
      </Greet>
    </Body>
  );
}

export default App;
