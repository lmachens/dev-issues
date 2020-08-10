import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { getIssues } from "./api/gitHub";

function App() {
  let results = Results({
    issues: [],
  });

  async function handleChange(query) {
    try {
      const issues = await getIssues(query);

      const newResults = Results({
        issues: issues.items,
      });

      results.parentElement.replaceChild(newResults, results);
      results = newResults;
    } catch (error) {
      console.error(error);
    }
  }

  const searchBox = SearchBox({
    onChange: handleChange,
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
