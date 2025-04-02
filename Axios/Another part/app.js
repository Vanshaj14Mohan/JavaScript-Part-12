//Same thing we could do for our dog API
let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=>{
    // let fact = await getDogImg();
    // console.log(fact);
    // let p = document.querySelector("#result");
    // p.innerText = fact;
    let link = await getDogImg();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getDogImg(){
    try{
    let res = await axios.get(url);
    // return res.data.fact;
    return res.data.message;
    }
    catch(err){
        // console.log("Error: ", err);
        return "NO Image Found";
    }
}

getDogImg();


