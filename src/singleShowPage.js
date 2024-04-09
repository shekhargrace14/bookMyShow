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
        document.querySelector("#imageId").src = matchedShowId.poster_path
    }

})