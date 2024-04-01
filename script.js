let track = document.querySelector(".track")

fetch("./data/hero.json")
.then((resolve)=>resolve.json())
.then((data)=>{
    console.log(data)
    data.map((item)=>{
        track.insertAdjacentHTML("beforeend",`
        <div class="column">
            <img src="${item.img}" alt="">
        </div>
        `)
    })
})