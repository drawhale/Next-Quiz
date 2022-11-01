import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  headerComponent: ReactNode;
  contentComponent: ReactNode;
};

const QuizTemplate: FC<Props> = ({ headerComponent, contentComponent }) => {
  return (
    <Wrapper>
      <Header>{headerComponent}</Header>
      <Content>{contentComponent}</Content>
    </Wrapper>
  );
};

export default QuizTemplate;

const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 640px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 0 20px;
  height: 80px;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  margin-bottom: 20px;
`;
