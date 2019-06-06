var travel = document.travel
travel.addEventListener("submit",function(event){
    event.preventDefault()
    var firstName = travel.firstName.value
    var lastName = travel.lastName.value
    var age = travel.age.value
    var gender = travel.gender.value
    // var female = travel.gender.value
    var location = travel.location.value
    var vegan = travel.value
    var carnivore =travel.diet.value
    var lactoseInt =travel.diet.value
    var chocolate =travel.diet.value
    window.alert(
        `"First Name:" ${firstName}
         "Last Name:" ${lastName} 
         "age:"       ${age}
         "gender"     ${gender} 
         "location"   ${location}`)
})
    