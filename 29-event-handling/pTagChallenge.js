// on clicking *any* p tag, change the font of that one p tag to comic sans
// use this for the font family: "Comic Sans MS", cursive, sans-serif
// HINT: you might need to loop over all the p tags somehow...
// HINT 2: document.querySelectorAll will let you select a collection of elements

// grab the elements using querySelectorAll using the tag you want
const allPs = document.querySelectorAll("p")
// on the elements collection, iterate through and get access to each individual element
allPs.forEach(function (pTag) {
  // take the object and add an event listener for clicks
  // give it a callback function 
  pTag.addEventListener("click", function () {
    // in the callback function, use element variable and change font style
    pTag.style.fontFamily = '"Comic Sans MS", cursive, sans-serif'
  })
})
