export async function getIssues() {
  const response = await fetch("https://api.github.com/search/issues?q=test");
  const result = await response.json();
  return result;
}
