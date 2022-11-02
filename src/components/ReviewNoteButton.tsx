import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATH } from "pages/path";

import type { FC } from "react";

const ReviewNoteButton: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleChangeReviewCount = (e: any) => {
      setCount(e.detail?.reviewCount || 0);
    };

    document.addEventListener("change_review_count", handleChangeReviewCount);

    return () => {
      document.removeEventListener(
        "change_review_count",
        handleChangeReviewCount
      );
    };
  }, []);

  return (
    <Wrapper>
      <NoteButton to={ROUTE_PATH.REVIEW_NOTE}>오답노트</NoteButton>
      {count > 0 && <Badge>{count}</Badge>}
    </Wrapper>
  );
};

export default ReviewNoteButton;

const Wrapper = styled.div`
  position: relative;
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

const Badge = styled.div`
  position: absolute;
  top: -15px;
  right: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #ffffff;
  background-color: #ff1717;
  border-radius: 10px;
`;
