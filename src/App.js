import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";

function App() {
  const searchBox = SearchBox({
    onChange: (value) => {
      alert(value);
    },
    placeholder: "Enter search",
  });
  const results = Results();
  const main = createElement(
    "main",
    {
      className: "app",
    },
    [searchBox, results]
  );

  return main;
}

export default App;
