const getmore = document.getElementById("getmore");
const dogpic = document.getElementById("dog-img");

const url = fetch("https://dog.ceo/api/breeds/image/random");
url.then((data) => data.json())
.then((ele) => dogpic.innerHTML=`<img src=${ele.message} />`) 

getmore.addEventListener("click",()=>{
    const apiurl = fetch("https://dog.ceo/api/breeds/image/random");
    return new Promise((resolve,reject)=>{
        apiurl
        .then((data) => data.json())
        .then((ele) => {
            dogpic.innerHTML=`<img src=${ele.message} class="img-fluid"  />`
        }) 
    })
}) 
