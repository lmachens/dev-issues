import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";

function App() {
  const searchBox = SearchBox();
  const main = createElement(
    "main",
    {
      className: "app",
    },
    [searchBox]
  );
  return main;
}

export default App;
