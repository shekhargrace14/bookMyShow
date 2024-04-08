let track = document.querySelector(".track")
let movies = document.querySelector(".movies")
let moviesRow = document.querySelector(".moviesRow")
let premiereRow = document.querySelector(".premiereRow")

// console.log(moviesRow)


fetch("./data/hero.json")
.then((resolve)=>resolve.json())
.then((data)=>{
    // console.log(data)
    // slice 4 has stopped the showing of the hero images 
    let newData = data.slice(2)
    newData.map((item)=>{
        track.insertAdjacentHTML("beforeend",`
        <div class="column w-full flex justify-center">
            <img class="w-full rounded" src="${item.img}" alt="">
        </div>
        `)
    })
})



const apiEndpoints = {
    movies : "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666",
    discover : {
      tv :"https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62",
      movies : "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
    },
    trending : {
      tv : "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62",
      movies : "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
    },
}

  
// ApiData starts here 

async function ApiData(){
    let resolve = await fetch(apiEndpoints.movies);
    let data = await resolve.json();
    // console.log(data)
    showMoviesData(data)
    return data
}
ApiData()

// ApiData ends here 


// movies slider starts here 

function showMoviesData(data){

    data.results.map((items)=>{
        moviesRow.insertAdjacentHTML("beforeend",`
        <div class="column card ">
          <figure class="relative">
            <img class="rounded" src=" https://image.tmdb.org/t/p/w500${items.poster_path}" alt="">
            <div class="w-[100%] bg-black text-white  grid grid-flow-col px-16 py-1 rounded absolute bottom-0 left-0 ">
              <ion-icon class="pt-1 text-[primaryColor]" name="star"></ion-icon> 
              ${items.vote_average.toFixed(1)}/10 	&nbsp; 
              ${items.vote_count}  
            </div>
          </figure>
          
          <div class="info">
            <h4 class="font-semibold text-2xl py-4">${items.title}</h4>
            <p class="genre">Action/Adventure/Animation/Comedy</p>
          </div>
        </div>
        `)
    })
    let movieCard = document.querySelector(".card")
    // console.log(movieCard,"Movies Card")
    let movieCardWidth = movieCard.offsetWidth
    movieSlider(movieCardWidth)
}

function movieSlider(movieCardWidth){


  console.log(movieCardWidth,"movieCardWidth")

  let arrows = movies.querySelectorAll(" .movies .arrow")
  // console.log(arrows,"arrows")
  arrows.forEach((singleArrow)=>{
    singleArrow.addEventListener("click",event=>{
      // console.log(event.id);
      // console.log(singleArrow.id);
      if(singleArrow.id === "left"){
        console.log("left");
        moviesRow.scrollLeft -= movieCardWidth*4 
      }else{
        console.log("right");
        moviesRow.scrollLeft += movieCardWidth*4

      }
    })
  })

}
movieSlider()
// movies slider ends  here 

// premiere slider starts  here 

// ApiData starts here 

async function secApiData(){
  let resolve = await fetch(apiEndpoints.discover.tv);
  let data = await resolve.json();
  console.log(data)
  premiereData(data)
  return data
}
secApiData()
// console.log("helllooooooo")
// console.log(apiEndpoints.discover.movies)
// ApiData ends here 

function premiereData(data){

  data.results.map((items)=>{
    if(items.poster_path === null){
      return
    }else{

    premiereRow.insertAdjacentHTML("beforeend",`
      <div class="column card ">
        <figure class="relative">
          <img class="rounded" src=" https://image.tmdb.org/t/p/w500${items.poster_path}" alt="">
          <div class="w-[100%] bg-black text-white grid grid-flow-col px-16 py-1 rounded absolute bottom-0 left-0 ">
            <ion-icon class="pt-1 text-[primaryColor]" name="star"></ion-icon> 
            ${items.vote_average.toFixed(1)}/10 	&nbsp; 
            ${items.vote_count}  
          </div>
        </figure>
        
        <div class="info">
          <h4 class="font-semibold text-white text-2xl py-4">${items.name}</h4>
          <p class="genre text-white">Action/Adventure/Animation/Comedy</p>
        </div>
      </div>
      `)
    }

  })
  let premiereCard = premiereRow.querySelector(".card")
  console.log(premiereCard,"premiereCard")
  premiereSlider(premiereCard)
}

function premiereSlider(premiereCard){
  let premiereCardWidth = premiereCard.offsetWidth
  let arrow = document.querySelectorAll(".premiereArrow")
  console.log(arrow)
  arrow.forEach((singleArrow)=>{
    singleArrow.addEventListener("click",()=>{
      console.log(singleArrow.id, "hello")
      if(singleArrow.id=== "left"){
        premiereRow.scrollLeft -= premiereCardWidth*4;
      }else{
        premiereRow.scrollLeft += premiereCardWidth*4;
      }
    })
  })
}
premiereSlider()
// premiere slider ends  here 