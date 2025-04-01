import { Counter } from "./Counter";
import { CountProvider } from "./CountProvider";

const App = () => {
  return (
    <>
      <CountProvider>
      <Counter />
      </CountProvider>
    </>
  );
};

export default App;
