import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATH } from "pages/path";

import type { FC } from "react";

const QuizHeader: FC = () => {
  return (
    <Wrapper>
      <Logo href={ROUTE_PATH.QUIZ_MAIN}>Next Quiz__</Logo>
      <NoteButton to={ROUTE_PATH.REVIEW_NOTE}>오답노트</NoteButton>
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

const NoteButton = styled(Link)`
  border: 0;
  outline: 0;
  text-decoration: none;
  padding: 1rem 2rem;
  color: #555555;
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
  border-radius: 3rem;
  font-size: 1.6rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #eeeeee;
  }
`;
