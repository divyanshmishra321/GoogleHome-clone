const searchButton = document.querySelector("#searchbutton");
searchButton.addEventListener("click", function() {
  const searchTerm = document.querySelector("#searchTerm").value;
  window.open(`https://www.google.com/search?q=${searchTerm}`);
});