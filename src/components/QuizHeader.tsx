import styled from "styled-components";
import { ROUTE_PATH } from "pages/path";

import type { FC } from "react";
import ReviewNoteButton from "./ReviewNoteButton";

const QuizHeader: FC = () => {
  return (
    <Wrapper>
      <Logo href={ROUTE_PATH.QUIZ_MAIN}>Next Quiz__</Logo>
      <ReviewNoteButton />
    </Wrapper>
  );
};

export default QuizHeader;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  border: 0;
  outline: 0;
  text-decoration: none;
  font-size: 3.2rem;
  font-weight: bold;
  color: #222222;
`;
