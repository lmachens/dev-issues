import { createElement } from "../utils/elements";

function Results() {
  const issue1 = createElement("li", { innerText: "Issue1" });
  const issue2 = createElement("li", { innerText: "Issue2" });

  const list = createElement("ul", {}, [issue1, issue2]);
  return list;
}

export default Results;
