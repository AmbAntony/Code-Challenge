//fetching beer data and rendering elements to the DOM
url='http://localhost:3000/beers'
 
 function getBeers(beerID=1){
  fetch(`${url}/${beerID}`)
  .then(res => res.json())
  .then(data => {
document.querySelector('#beer-name').textContent = data.name
document.querySelector('#beer-image').src = data.image_url
//document.querySelector('beer-name').dataset.id=data.id
document.querySelector('#beer-description').textContent=data.description
renderBeerReview(data.reviews)

}
)}
//Updating reviews
function renderBeerReview(review){
document.querySelector('#review-list').innerHTML = ''
for(let i=0; i<review.length; i++){
  let li = document.createElement('li')
  li.innerHTML=review
  let list = document.querySelector('#review-list')
  list.appendChild(li)
};
}
//updating menu
document.querySelector('#beer-list').innerHTML = ''
function replaceBeer(beers){
  for(const element in beers){
    let beerID=beers[element].beerID
    let li=document.createElement('li')
    li.addEventListener('click', (e)=>{
      e.prevemtDefault()
      displayBeer(beerID)
    })

    li.textContent = beers[element].name
    document.querySelector('#beer-list').appendChild(li)
  }
}



getBeers()

  