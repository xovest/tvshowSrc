function searchShow(query) {
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = data.map(el => el.name);
      console.log(results); //change with async and await or something, still don't know what's going on with this var or whatever it is but i can't map it, that's for sure.. need to work on that and see how to get json info and also stop overcommenting lmao
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