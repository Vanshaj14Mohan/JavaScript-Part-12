//Sending Headers with API requests.
const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        //console.log(res.data); //it will return the data in HTML format. But we want it to be in application json format
        console.log("Joke found: ", res.data.joke);
    }
    catch (err){
        console.log("Error found", err);
    }
}

getJokes();