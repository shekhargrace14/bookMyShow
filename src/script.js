// hero starts here 
fetch("./data/hero.json")
.then((resolve)=>resolve.json())
.then((data)=>{
  // console.log(data)
  // slice 4 has stopped the showing of the hero images 
    let heroTrack = document.querySelector(".heroTrack")
    let newData = data.slice(0)
    newData.map((item)=>{
      heroTrack.insertAdjacentHTML("beforeend",`
        <div class="column w-full flex justify-center">
            <img class="w-full rounded" src="${item.img}" alt="">
        </div>
        `)
    })

  })
  
function heroSlider(){
  // console.log(trackWidth)
  
  let hero = document.querySelector(".hero")
  let arrow = hero.querySelectorAll(".arrow")
  // console.log(arrow)
  
  arrow.forEach((singleArrow)=>{
    let heroTrack = document.querySelector(".heroTrack")
    let heroTrackWidth = heroTrack.clientWidth
    // console.log(heroTrackWidth)
  
    singleArrow.addEventListener("click",()=>{
      // console.log(singleArrow.id)
      heroTrack.scrollLeft += singleArrow.id === "left" ? -heroTrackWidth -8 : + heroTrackWidth +8;
      // if(singleArrow.id === "left"){
        // heroTrack.scrollLeft += heroTrackWidth;      

      // }else{
        // heroTrack -= 
      // }
    })
  })

}
heroSlider()

// hero ends here 



let apiEndPoint = [

  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",

]

let carousel = [
  ".carouselBox1",
  ".carouselBox2",
  ".carouselBox3",
  ".carouselBox4",
  ".carouselBox5",
]

apiEndPoint.forEach((apiEndPoint,index)=>{
    fetchAndDisplay(apiEndPoint,carousel[index], handleImageClick);
});



// fetch and display images 

function fetchAndDisplay(apiEndPoint, carousel,handleImageClick ){

  fetch(apiEndPoint)
  .then((Response)=> Response.json())
  .then((data)=>{
    if(apiEndPoint===apiEndPoint[2]){
      data.results.reverse();
    }
    // console.log(data.results)
    data.results.map((item)=>{
      const box = document.querySelector(carousel);
      const html = `
      <div class="column card ">
      <a href="./singleShowPage.html">
      <figure class="relative">
        <img class="rounded" src=" https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.id}" data-author="${apiEndPoint}">
        <div class="w-[100%] bg-black text-white  grid grid-flow-col px-8 py-1 rounded absolute bottom-0 left-0 ">
          <ion-icon class="pt-1 text-[primaryColor]" name="star"></ion-icon> 
          ${item.vote_average.toFixed(1)}/10 	&nbsp; 
          ${item.vote_count}  
        </div>
      </figure>  
      <div class="info">

        <h4 class="font-semibold text-2xl py-1 line-clamp-1 truncate text-ellipsis">${item.title}</h4>
        <p class="genre line-clamp-2 truncate text-ellipsis">${item.overview}</p>
      </div>
      </a>
      </div>
      `;
      box.insertAdjacentHTML("beforeend", html);
    })
    const images = document.querySelectorAll(`${carousel} img`);
    images.forEach((img) => {
      img.addEventListener("click", handleImageClick);
    });
  })
}


// event to store data in local Storage start
function handleImageClick(event){
  let imageAlt = event.target.getAttribute("alt");
  let specificApi = event.target.getAttribute("data-author");
  console.log(imageAlt)
  console.log(specificApi)
  localStorage.setItem("imageAlt", imageAlt);
  localStorage.setItem("specificApi", specificApi);
}
handleImageClick()
// event to store data in local Storage end

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
    const scrollAmount = slider.clientWidth;
    slider.scrollTo({
      left: slider.scrollLeft - scrollAmount -30,
      behavior: "smooth",
    });
  });

  switchRight.addEventListener("click", () => {
    const scrollAmount = slider.clientWidth;
    slider.scrollTo({
      left: slider.scrollLeft + scrollAmount + 30,
      behavior: "smooth",
    });
  });
});

// =============================xxxx===================================

