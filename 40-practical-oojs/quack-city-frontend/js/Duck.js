class Duck {

  static all = []

  constructor(duckObj) {
    this.id = duckObj.id
    this.name = duckObj.name
    this.rating = duckObj.rating
    this.image_url = duckObj.image_url
    this.category_name = duckObj.category_name

    Duck.all.push(this)
  }

  renderLi(duckListUl) {
    const duckLi = document.createElement("li")
    duckLi.classList.add("item")
    duckLi.innerHTML = `
       <span data-id="${this.id}" class="name">${this.name}</span>
       <button data-id="${this.id}" class="delete">X</button>
    `
    duckListUl.append(duckLi)
  }

  renderDetail(detailDiv) {
    this.detailEl = detailDiv
    detailDiv.innerHTML = `
      <h1>${this.name}</h1>
      <p class="category">
        Category: <span>${this.category_name}</span>
      </p>
      <div class="image">
        <h2 class="rating">${this.rating}</h2>
        <img src="${this.image_url}">
      </div>
      <h2 id="duck-rating">Rate That Duck</h2>
      <form id="score-form" data-id="${this.id}">
        <input type="number" name="score" value="${this.rating}" min="0" max="10" step="1">
        <input type="submit" value="Rate">
      </form>
    `
  }

  updateRating(newRating) {
    this.rating = newRating
    this.detailEl.querySelector(".rating").textContent = this.rating
  }

}

// Duck.all = []