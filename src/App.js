import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { getIssues } from "./api/gitHub";

function App() {
  let results = Results({
    values: ["Issue A", "Issue B"],
  });
  const searchBox = SearchBox({
    onChange: async (value) => {
      const issues = await getIssues();
      console.log(issues);

      const newResults = Results({
        values: ["123", "3245345"],
      });

      results.parentElement.replaceChild(newResults, results);
      results = newResults;
    },
    placeholder: "Enter search",
  });
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
