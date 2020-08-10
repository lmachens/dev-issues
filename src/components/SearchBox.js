import "./searchBox.css";
import { createElement } from "../utils/elements";

function SearchBox(props) {
  const input = createElement("input", {
    placeholder: props.placeholder,
  });
  const button = createElement("button", { innerText: "🔎" });
  const container = createElement(
    "div",
    {
      className: "searchBox",
    },
    [input, button]
  );

  button.addEventListener("click", () => {
    props.onChange(input.value);
  });

  return container;
}

export default SearchBox;
