var travel = document.travel
travel.addEventListener("submit",function(event){
    event.preventDefault()
    var firstName = travel.firstName.value
    var lastName = travel.lastName.value
    var age = travel.age.value
    var gender = travel.gender.value
    // var female = travel.gender.value
    var location = travel.location.value
    // var vegan = travel.vegan.value
    // var carnivore = travel.carnivore.value
    // var lactoseInt = travel.lactoseInt.value
    // var chocolate = travel.chocolate.value
    var checkDiet = travel.diet
    var checkRestrictions = []
        for (var i = 0;i < checkDiet.length; i++){
            if (checkDiet[i].checked){
                checkRestrictions.push(checkDiet[i].value)    
            }
        }
    window.alert(
        `"First Name:" ${firstName}
         "Last Name:" ${lastName} 
         "age:"       ${age}
         "gender:"     ${gender} 
         "location:"   ${location}
         "Diet:")     ${checkRestrictions}`)
})
    