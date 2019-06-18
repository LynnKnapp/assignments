const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){

    if (xhr.readyState == 4 && xhr.status == 200){
        
        const response =JSON.parse(xhr.responseText) 
        const pokeArr = response.objects[0].pokemon
        for (let i = 0; i <= 50; i++){
            //dig down to the namee
            const pokeName =pokeArr[i].name
            console.log(pokeName)
            //create a new h1 element and save it to
            //a variable called h1
            const h1 =document.createElement("h1")
            //set the text content of my h1 to the pokemon name
            h1.innerText = pokeName
            //append h1 to body
            document.body.appendChild(h1)

        }
    }
}

xhr.open("GET","https://api.vschool.io/pokemon", true ); 
xhr.send()



