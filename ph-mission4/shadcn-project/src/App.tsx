import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello there</h1>
      <Button variant={"secondary"} size={"lg"}>
        Click Me
      </Button>
    </>
  );
}

export default App;
