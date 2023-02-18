import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      {/* <div className="bg-yellow-500 w-screen h-40"></div> */}
    </div>
  );
}

export default App;
