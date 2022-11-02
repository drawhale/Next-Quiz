import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "components/common/LeftArrowIcon";

import type { FC } from "react";

const ReviewHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <IconButton onClick={() => navigate(-1)}>
        <LeftArrowIcon />
      </IconButton>
    </Wrapper>
  );
};

export default ReviewHeader;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconButton = styled.div`
  cursor: pointer;
`;
