




var ldsers = [
    {
    name: "David",
    age: 57,
    jack: "yes",
    rebellious: "yes",
    interests: [[ "poker", "craps", "slots", "roulette"],
                [ "drinking", "gaming", "coding"]],     
    friends: {
           name: "Don",
           age: 55,
           sex: "male", 
           interests: [["reading", "drinking"],
                        ["[Mount-Everest", "Canyon", "Pyrenees"]]
    },
 }, {    
    name: "John",
    age: 36,
    jack: "no",
    rebellious: "no",
    interests: [["Matrix", "Roadhouse", "John Quick" ],
                [ "singing", "dancing"]],           
    friends:{ 
            name: "Jim",
            age: "40",       
            interests: ["surfing", "skiing", "hiking"]
    }
}]  

console.log(ldsers[1].friends.interests[1])
    
