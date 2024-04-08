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
      let card = document.querySelector(".card")
      let cardWidth = card.offsetWidth
      // console.log(card, "card")
      // console.log(cardWidth, "cardWidth")
      slider(cardWidth)
    })
}

// let arrow = document.querySelectorAll(".arrow")
// console.log(arrow, "arrow")

// function slider(cardWidth){

  // let carousels = document.querySelectorAll(".carousel")
  // console.log(carousels, "carousels")

  // let arrow = document.querySelectorAll(".arrow")

  // console.log(arrow, "arrow")
  // loop through APIs to fetch and display images
  // arrow.forEach((singleArrow)=>{
  //   singleArrow.addEventListener("click",()=>{
  //     // console.log(singleArrow.id)
  //     // console.log("its arrow")
  //     if(arrow==="left"){
  //       console.log("its left")
  //     }else{
  //       console.log("its right")
  //     }
      
  //   })
  // })

//   carousels.forEach((singleCarousel)=>{
//     console.log(singleCarousel, "singleCarousel")
//     arrow.forEach((singleArrow)=>{
//       singleArrow.addEventListener("click",()=>{
//         // console.log(singleArrow.id)
//         // console.log("its arrow")
//         if(arrow==="left"){
//           console.log("its left")
//         }else{
//           console.log("its right")
//         }
        
//       })
//     })

//   })  
// }
// slider()

// fetchandDisplay()

// function handleImageClick(event){
//   const clickedId = event.target.getAttribute("alt");
//   const clickedId1 = event.target.getAttribute("data-author");
//   console.log("clicked ID:", clickedId);
  
// }