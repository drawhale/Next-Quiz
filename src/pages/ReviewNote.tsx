import styled from "styled-components";
import QuizTemplate from "components/QuizTemplate";
import ReviewHeader from "components/ReviewHeader";
import ReviewList from "components/ReviewList";

import type { FC } from "react";

const ReviewNote: FC = () => {
  return (
    <QuizTemplate
      headerComponent={<ReviewHeader />}
      contentComponent={<ReviewList />}
    />
  );
};

export default ReviewNote;
