import "./searchBox.css";
import { createElement } from "../utils/elements";

function SearchBox() {
  const input = createElement("input", { placeholder: "Enter search" });
  const button = createElement("button", { innerText: "🔎" });
  const container = createElement(
    "div",
    {
      className: "searchBox",
    },
    [input, button]
  );
  return container;
}

export default SearchBox;
