function searchShow(query) {
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = data.map(el => el.name);
      console.log(results); //change with async and await
    });
}

function renderResults(results) {
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  results.forEach(result => {
    const element = document.createElement("li");
    element.innerText = result;
    list.appendChild(element);
  });
}

window.onload = () => {
  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onkeyup = (event) => {
    searchShow(searchFieldElement.value)
  };
}