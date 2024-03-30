const accessKey = "RqcMMLoGBtBSpRQYe46PNon5z8h-igw-kjXxZDwrbtg";

const formEl = document.querySelector("form ");

const inputEl = document.getElementById("search-input");

const serchResults = document.querySelector(".search-results");

const showMore = document.getElementById("show-more-button");

let inputData ="";
let page = 1;

 async function seachImagess(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)

    const data = await response.json()

    const results = data.results
    if(page === 1){
        serchResults.innerHTML = "";

    }
    results.map((result) =>{
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src= result.urls.small
        image.alt = result.alt_descripation

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_descripation;


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        serchResults.appendChild(imageWrapper)

    })

    page++
    if(page > 1){
        showMore.style.display = "block";

    }

}

formEl.addEventListener("submit", (e) =>{
    e.preventDefault()
    page = 1;
    seachImagess()
})

showMore.addEventListener("click", () =>{
   
    seachImagess()
})






