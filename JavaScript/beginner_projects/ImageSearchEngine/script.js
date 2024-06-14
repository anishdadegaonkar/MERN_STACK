const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const accesskey = "iUOvW_1d92FGcU1sGbNLpwywQVjww7R31Hv-cpuCHCI";
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  
  if(page === 1){
    searchResults.innerHTML = "";
  }

  results.map((result) =>{
    const imgage = document.createElement("img");
    imgage.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(imgage);
    searchResults.appendChild(imageLink);
  })
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})