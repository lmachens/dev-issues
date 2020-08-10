import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { getIssues } from "./api/gitHub";

function App() {
  let results = Results({
    issues: [],
  });

  function updateResults(issues) {
    const newResults = Results({
      issues: issues,
    });
    results.parentElement.replaceChild(newResults, results);
    results = newResults;
  }

  async function handleChange(query) {
    try {
      if (!query.length) {
        updateResults([]);
        return;
      }
      const issues = await getIssues(query);
      updateResults(issues.items);
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
