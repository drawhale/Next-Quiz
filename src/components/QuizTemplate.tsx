import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  headerComponent: ReactNode;
  bodyComponent: ReactNode;
  footerComopnent: ReactNode;
};

const Layout: FC<Props> = ({
  headerComponent,
  bodyComponent,
  footerComopnent,
}) => {
  return (
    <Wrapper>
      <Header>{headerComponent}</Header>
      <Body>{bodyComponent}</Body>
      <Footer>{footerComopnent}</Footer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 960px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 0 20px;
  height: 80px;
`;

const Body = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
