import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <div className="section-container">HomePage</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .section-container {
    width: 90vw;
  }
`;

export default HomePage;
