fetch("./components/footer.html")
.then(resolve=> resolve.text())
.then(data=> {
    document.querySelector("footer").innerHTML= data;
})