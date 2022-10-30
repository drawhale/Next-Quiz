import styled from "styled-components";

import type { FC } from "react";

const QuizList: FC = () => {
  return (
    <ListWrapper>
      <ListItem />
    </ListWrapper>
  );
};

export default QuizList;

const ListWrapper = styled.section`
  width: 100%;
  height: 300px;
`;

const ListItem = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
`;
