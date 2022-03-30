import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.getElementById("focus").focus();
  }, []);

  return (
    <div
      id="focus"
      tabIndex="1"
      className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen"
    >
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default App;
