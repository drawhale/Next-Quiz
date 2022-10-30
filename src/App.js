import QuizTemplate from "components/QuizTemplate";
import QuizHeader from "components/QuizHeader";
import QuizMain from "components/QuizMain";
import QuizList from "components/QuizList";

function App() {
  return (
    <QuizTemplate
      headerComponent={<QuizHeader />}
      bodyComponent={<QuizMain />}
      footerComopnent={<h1>footer</h1>}
    />
  );
}

export default App;
