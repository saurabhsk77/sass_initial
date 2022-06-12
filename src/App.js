import "./scss/App.scss";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 2px;
  background: yellow;
`;
function App() {
  return (
    <div className="container">
      <Wrapper>
        <Title>Hello everyone</Title>
        <p>hey</p>
      </Wrapper>
    </div>
  );
}

export default App;
