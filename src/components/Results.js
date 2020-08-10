import { createElement } from "../utils/elements";

function Results(props) {
  const listItems = [];
  props.values.forEach((value) => {
    listItems.push(createElement("li", { innerText: value }));
  });

  const list = createElement("ul", {}, listItems);
  return list;
}

export default Results;
