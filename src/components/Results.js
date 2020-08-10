import { createElement } from "../utils/elements";

function Results(props) {
  const listItems = props.issues.map((issue) => {
    const link = createElement("a", {
      href: issue.html_url,
      innerText: issue.title,
      target: "_blank",
    });
    return createElement("li", {}, [link]);
  });

  const list = createElement("ul", {}, listItems);
  return list;
}

export default Results;
