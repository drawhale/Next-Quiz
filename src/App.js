import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QuizContextProvider } from "context/QuizContext";
import QuizMain from "pages/QuizMain";
import ReviewNote from "pages/ReviewNote";
import { ROUTE_PATH } from "pages/path";

function App() {
  return (
    <BrowserRouter>
      <QuizContextProvider>
        <Routes>
          <Route path={ROUTE_PATH.QUIZ_MAIN} element={<QuizMain />} />
          <Route path={ROUTE_PATH.REVIEW_NOTE} element={<ReviewNote />} />
          <Route path="*" element={<Navigate to={ROUTE_PATH.QUIZ_MAIN} />} />
        </Routes>
      </QuizContextProvider>
    </BrowserRouter>
  );
}

export default App;
