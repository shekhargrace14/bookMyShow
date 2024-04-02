let track = document.querySelector(".track")

fetch("./data/hero.json")
.then((resolve)=>resolve.json())
.then((data)=>{
    console.log(data)
    // slice 4 has stopped the showing of the hero images 
    let newData = data.slice(4)
    newData.map((item)=>{
        track.insertAdjacentHTML("beforeend",`
        <div class="column w-[100%] flex justify-center">
            <img w-[100%]  src="${item.img}" alt="">
        </div>
        `)
    })
})



// movies slider starts here 
async function moviesData(){
    let resolve = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666");
    let data = await resolve.json();
    console.log(data)
    showMoviesData(data)
    return data
}
moviesData()

function showMoviesData(data){
    let moviesRow = document.querySelector(".moviesRow");

    data.results.map((items)=>{
        moviesRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
          <figure>
            <img class="rounded" src=" https://image.tmdb.org/t/p/w500${items.poster_path}" alt="">
          </figure>
          <div class="info">
            <h4 class="font-semibold">Kung Fu Panda 4</h4>
            <p class="genre">Action/Adventure/Animation/Comedy</p>
          </div>
        </div>

        `)
    })
}
// movies slider ends  here 