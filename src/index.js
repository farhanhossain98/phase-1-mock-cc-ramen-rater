// write your code here


//constants
//These are the constants to keep that I will use later
const baseUrl = "http://localhost:3000"
const ramenUrl = baseUrl + "/ramens"
const newRamenForm = document.getElementById("new-ramen")
const ramenMenu = document.getElementById("ramen-menu")
const ratingDisplay = document.getElementById("rating-display")
const commentDisplay = document.getElementById("comment-display")
const ramenImg = document.getElementById("ramen-image")
const ramenName = document.getElementById("ramen-name")
const restaurantName = document.getElementById("restaurant-name")
    
//This is the fetch function athat will render in the ramen from server
//Remember to render in renderRamen()
function renderRamens(){
fetch(ramenUrl)
.then((r) => r.json())
.then(ramens => {
    ramens.forEach(renderNewRamen)
})
}
renderRamens()


function renderNewRamen(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.alt = ramen.name
    ramenMenu.appendChild(img)

    img.addEventListener('click', (e) => {
        displayRamen(ramen)
    })


}

//This is to display ramen info 
function displayRamen(ramen) {
    ramenImg.src = ramen.image
    ramenImg.alt = ramen.name
    restaurantName.innerText = ramen.restaurant
    ramenName.innerText = ramen.name
    ratingDisplay.innerText = ramen.rating
    commentDisplay.innerText = ramen.comment

}
//this will be to add any new ramen 
//when we add new items remember to add e.preventDefault so page does not refresh
function addSubmitListener() {
    newRamenForm.addEventListener('submit', (e)=>{
        e.preventDefault()
       const newRamenName =  document.getElementById('new-name').value
       const newRamenRestaurant = document.getElementById('new-restaurant').value
       const newRamentImage = document.getElementById('new-image').value
       const newRamenRating = document.getElementById('new-rating').value
       const newRamenComment = document.getElementById('new-comment').value
       
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
addSubmitListener()