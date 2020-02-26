// Get my bakes (use fetch to get the stuff that I want to slap on le DOM)
// Iterate through the json array
// While I iterate through array of json objects I am creating elements for each object
// and appending it to the DOM


// Variables
let allBakes;
let url = 'http://localhost:3000/bakes';
let newBakeForm = document.querySelector('#new-bake-form');

// Fetches
const getBakes = () => fetch(url).then( res => res.json());

const createNewBake = (e) => {
    fetch(url, {
        "method": 'POST',
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        "body": JSON.stringify({
            name: e.target.name.value,
            image_url: e.target.image_url.value,
            description: e.target.description.value
        })
    })
    .then( res => res.json())
    .then( newBake => {
        allBakes.push(newBake)
        renderBake(newBake)
    })
    
}

const editRating = (e) => {
    fetch(url+`/${e.target.dataset.id}/ratings`,{
        "method": 'POST',
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
        },
        "body": JSON.stringify({
            score: e.target.score.value
        })
    })
    .then( res => res.json())
    .then( updatedBake => {
        replaceBake(updatedBake);
    })
}



// Event Handlers
const handleClick = (e) => {
    let matchingBake = allBakes.find( bake => bake.id == e.target.dataset.id);

    appendToDetail(matchingBake)
    document.querySelector('.container').remove()
}

const handleSubmit = (e) => {
    e.preventDefault()
    e.target.id === 'new-bake-form' ? createNewBake(e) : null
    e.target.id === 'score-form' ? editRating(e) : null
}

// Event Listeners
newBakeForm.addEventListener('submit', handleSubmit)

// Render Functions
const renderBake = (bake) => {
    // Grab Element
    let bakesContainer = document.querySelector('#bakes-container');
    // Create my elements
    let bakeLi = document.createElement('li');

    // Set attribute
    bakeLi.setAttribute('class', 'item')
    bakeLi.setAttribute('data-id', bake.id)
    // Add information;
    bakeLi.innerText = bake.name

    // Append
    bakesContainer.append(bakeLi)

    // Event Listener
    bakesContainer.addEventListener("click", handleClick)

}

const appendToDetail = (bake) => {
    let detailDiv = document.querySelector('#detail');
    
    // Create Elements
    let bakeContainer = document.createElement('div');
    let bakeImg = document.createElement('img');
    let bakeName = document.createElement('h1');
    let bakeDescription = document.createElement('p');
    let bakeForm = document.createElement('form');
    let bakeInputNumber = document.createElement('input');
    let bakeInputSubmit = document.createElement('input');
    
    // Set attributes
    bakeContainer.setAttribute('class', 'container')
    bakeImg.setAttribute('src', bake.image_url);
    bakeImg.setAttribute('alt', bake.name);
    bakeDescription.setAttribute('class', 'description');
    bakeForm.setAttribute('id', 'score-form');
    bakeForm.setAttribute('data-id', bake.id);
    bakeInputNumber.setAttribute('value', bake.score);
    bakeInputNumber.setAttribute('type', 'number');
    bakeInputNumber.setAttribute('name', 'score');
    bakeInputNumber.setAttribute('min', '0');
    bakeInputNumber.setAttribute('max', '10');
    bakeInputNumber.setAttribute('step', '1');
    bakeInputSubmit.setAttribute('type', 'submit');
    bakeInputSubmit.setAttribute('value', 'Rate');
    
    // Add contents from bake
    bakeName.innerText = bake.name;
    bakeDescription.innerText = bake.description;
    
    // Append 
    bakeForm.append(bakeInputNumber, bakeInputSubmit);
    bakeContainer.append(bakeImg, bakeName, bakeDescription, bakeForm)
    detailDiv.append(bakeContainer)

    bakeForm.addEventListener('submit', handleSubmit)
}

const replaceBake = (updatedBake) => {
    let matchingBake = allBakes.find( bake => bake.id == updatedBake.id);
    matchingBake.score = updatedBake.score
}

// Initial render
getBakes().then( bakes => {
    allBakes = bakes
    appendToDetail(bakes[0])
    bakes.forEach(renderBake)
});