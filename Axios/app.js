//Using fetch with async/await

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    // console.log("Button was clicked");
    let fact = await getCatFact();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getCatFact(){
    try{
    let res = await axios.get(url);
    //let data = await res.json(); //It's also an asynchronous function it also returns a promise.
    // console.log(res.data.fact);
    return res.data.fact;

    //Doing Chaining now
    // let res2 = await fetch(url); //We can call fetch function multiple times.
    // let data2 = await res2.json(); 
    // console.log(data2.fact);
    }
    catch(err){
        // console.log("Error: ", err);
        return "NO Fact Found";
    }
}

getCatFact();

//We can also write this whole code in try and catch block tho only to deal with error.
// async function getCatFact(){
//     try{
//     let res = await fetch(url);
//     let data = await res.json(); //It's also an asynchronous function it also returns a promise.
//     console.log(data.fact);

//     //Doing Chaining now
//     let res2 = await fetch(url); //We can call fetch function multiple times.
//     let data2 = await res2.json(); 
//     console.log(data2.fact);
//     }
//     catch(err){
//         console.log("Error: ", err);
//     }
// }

// getCatFact();