let imageAlt = localStorage.getItem("imageAlt")
let specificApi = localStorage.getItem("specificApi")
console.log(imageAlt,specificApi);

fetch(specificApi)
.then(resolve=>resolve.json())
.then(data=>{
    console.log(data.results)
    let matchedShowId = data.results.find((item)=>{
        return item.id.toString() === imageAlt;
    })
    console.log(matchedShowId)
    if(matchedShowId){
        document.querySelector(".bg").src = `https://image.tmdb.org/t/p/w500${matchedShowId.backdrop_path}`;
        document.querySelector("#imageId").src = `https://image.tmdb.org/t/p/w500${matchedShowId.poster_path}`;
        document.querySelector(".title").innerHTML = matchedShowId.title;
        document.querySelector(".vote_average").innerHTML = `${matchedShowId.vote_average.toFixed(1)}/10`;
        document.querySelector(".vote_count").innerHTML = `(${matchedShowId.vote_average.toFixed(1)}K Votes)`;
        document.querySelector(".title").innerHTML = matchedShowId.title;
    }
})

