import Question from "./home/Question";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h3 className="text-7xl font-bold text-center">Quiz App</h3>
      <Question />
    </div>
  );
}

export default App;
