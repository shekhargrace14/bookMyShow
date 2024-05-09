// Define API endpoints and target boxes
const apiEndpoints = [
    "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62",
];

const targetBoxes = [
    ".carouselbox1",
    ".carouselbox2",
    ".carouselbox3",
    ".carouselbox4",
    ".carouselbox5",
];

// Loop through APIs to fetch and display images
apiEndpoints.forEach((endpoint, index) => {
    fetchandDisplay(endpoint, targetBoxes[index], handleImageClick);
});


// -------------------------- Fetch and display images --------------------------

function fetchandDisplay(apiEndpoint, targetBox, clickHandler) {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((item) => {
          const box = document.querySelector(targetBox);
          const html = `
          <div class="images1">
            <img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}" alt="${item.id}" data-author="${apiEndpoint}"/>
          </div>`;
          box.insertAdjacentHTML("beforeend", html);
        });
  
        //image clicked
  
        const images = document.querySelectorAll(`${targetBox} img`);
        images.forEach((img) => {
          img.addEventListener("click", clickHandler);
        });
    });
}
// Click event handler to store clicked ID and redirect
function handleImageClick(event) {
    const clickedId = event.target.getAttribute("alt");
    const clickedId1 = event.target.getAttribute("data-author");
    console.log("Clicked ID:", clickedId);
    console.log("Clicked API:", clickedId1);
    localStorage.setItem("clickedId", clickedId);
    localStorage.setItem("clickedId1", clickedId1);
    window.location.href = "series.html";
}