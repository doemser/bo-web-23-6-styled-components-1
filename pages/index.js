import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Styled Components 1!</h1>
      <Brokkoli />
      <ExtraBrokkoli />
      <div />
      <article>
        <h2>Article Überschrift</h2>
        <StyledLink href="/">next.js Link</StyledLink>
        <br />
        <StyledButton>click mich</StyledButton>
      </article>
    </>
  );
}

const Brokkoli = styled.div`
  background: var(--primary-color);
  width: 100px;
  height: 100px;

  &:hover {
    background: var(--secondary-color);
  }
`;

const ExtraBrokkoli = styled(Brokkoli)`
  border: 5px solid blue;
`;

const StyledButton = styled.button`
  background: lightblue;
  border: 2px solid lightcoral;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
