import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="p-6 max-w-md bg-white shadow-md rounded-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to Grema App
          </h1>
          <p className="text-gray-600">
            This is a simple example to test Tailwind and ShadCN integration.
          </p>
          <Button className="mt-6 px-4 py-2">Click Me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
