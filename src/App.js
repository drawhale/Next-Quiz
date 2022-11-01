import { QuizContextProvider } from "context/QuizContext";
import QuizMain from "pages/QuizMain";

function App() {
  return (
    <QuizContextProvider>
      <QuizMain />
    </QuizContextProvider>
  );
}

export default App;
