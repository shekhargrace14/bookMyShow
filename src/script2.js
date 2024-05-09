let apiEndpoint =[
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62",
]

const targetBoxes = [
  ".carouselBox1",
  ".carouselBox2",
  ".carouselBox3",
  ".carouselBox4",
  ".carouselBox5",
]




apiEndpoint.forEach((endpoint, index)=>{
  fetchandDisplay(endpoint, targetBoxes[index], handleImageClick);
});

// --------------------------------------- fetch and display images ---------------------------------------

function fetchandDisplay(apiEndpoint, targetBox, clickHandler){
  fetch(apiEndpoint)
    .then((response)=> response.json())
    .then((data)=>{
      data.results.map((item)=>{
        const box = document.querySelector(targetBox);
        const html = `
        <div class="column card ">
        <figure class="relative">
          <img class="rounded" src=" https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.id}" data-author="${apiEndpoint}">
          <div class="w-[100%] bg-black text-white  grid grid-flow-col px-16 py-1 rounded absolute bottom-0 left-0 ">
            <ion-icon class="pt-1 text-[primaryColor]" name="star"></ion-icon> 
            ${item.vote_average.toFixed(1)}/10 	&nbsp; 
            ${item.vote_count}  
          </div>
        </figure>  
        <div class="info">
          <h4 class="font-semibold text-2xl py-4">${item.title}</h4>
          <p class="genre">Action/Adventure/Animation/Comedy</p>
        </div>
        </div>
        `;
        box.insertAdjacentHTML("beforeend", html);
      })
  })
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


const sliders = document.querySelectorAll(".carousel");

sliders.forEach((slider) => {
  const switchLeft = slider.parentElement.querySelector("#left");
  const switchRight = slider.parentElement.querySelector("#right");

  slider.addEventListener("scroll", function () {
    if (slider.scrollLeft === 0) {
      switchLeft.style.display = "none";
    } else {
      switchLeft.style.display = "block";
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      switchRight.style.display = "none";
    } else {
      switchRight.style.display = "block";
    }
  });

  switchLeft.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  });

  switchRight.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  });
});
