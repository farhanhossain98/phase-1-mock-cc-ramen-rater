// write your code here

//Get the ramen info from the json file to here

//constants
const baseUrl = "http://localhost:3000"
const ramenUrl = baseUrl + "/ramens"
const newRamenForm = document.getElementById("new-ramen")
const ramenMenu = document.getElementById("ramen-menu")
const ratingDisplay = document.getElementById("rating-display")
const commentDisplay = document.getElementById("comment-display")
const ramenImg = document.getElementById("ramen-image")
const ramenName = document.getElementById("ramen-name")
const restaurantName = document.getElementById("restaurant-name")
    

//have to get all the images and info from the json file to appear onto the screen.
//When the page loads, request the data from the server to get all the ramen objects
//Using the 

//Main Code
renderRamens()
addSubmitListener()

//get ramen menu

//get ramen from server
function renderRamens(){
fetch(ramenUrl)
.then((r) => r.json())
.then(ramens => {
    ramens.forEach(renderNewRamen)
})
}
//display image for each ramen
function renderNewRamen(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.alt = ramen.name
    ramenMenu.appendChild(img)

    //event listener
    img.addEventListener('click', (e => {
        displayRamen(ramen)
    }))


}
//function renderNewRamen(ramen)
//create image tag for each ramen

function displayRamen(ramen) {
//details of ramen elements
//this is so all the details will be shown 
 //this will show all the inner text of the array from the json file
    ramenImg.src = ramen.image
    ramenImg.alt = ramen.name
    restaurantName.innerText = ramen.restaurant
    ramenName.innerText = ramen.name
    ratingDisplay.innerText = ramen.rating
    commentDisplay.innerText = ramen.comment

}

function addSubmitListener() {
    newRamenForm.addEventListener('submit', (e)=>{
        e.preventDefault()

        //create new ramen object with data 
       const newRamenName =  document.getElementById('new-name').value
       const newRamenRestaurant = document.getElementById('new-restaurant').value
       const newRamentImage = document.getElementById('new-image').value
       const newRamenRating = document.getElementById('new-rating').value
       const newRamenComment = document.getElementById('new-comment').value

       // create new object 
       const newRamen = {
        
    "name": newRamenName,
    "restaurant": newRamenRestaurant,
    "image": newRamentImage,
    "rating": newRamenRating,
    "comment": newRamenComment
       }
renderNewRamen(newRamen)
    })
}