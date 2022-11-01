import QuizTemplate from "components/QuizTemplate";
import QuizHeader from "components/QuizHeader";
import QuizMain from "components/QuizMain";
import QuizList from "components/QuizList";

function App() {
  return (
    <QuizTemplate
      headerComponent={<QuizHeader />}
      contentComponent={<QuizMain />}
    />
  );
}

export default App;
