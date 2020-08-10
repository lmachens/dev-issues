import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { getIssues } from "./api/gitHub";

function App() {
  let results = Results({
    values: [],
  });

  async function handleChange(query) {
    console.log(query);
    const issues = await getIssues(query);
    console.log(issues);

    // const items = [];
    // issues.items.forEach((issue) => {
    //   items.push(issue.title);
    // });
    // const items = issues.items.map((issue) => {
    //   return issue.title;
    // });
    const items = issues.items.map((issue) => issue.title);

    const newResults = Results({
      values: items,
    });

    results.parentElement.replaceChild(newResults, results);
    results = newResults;
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
