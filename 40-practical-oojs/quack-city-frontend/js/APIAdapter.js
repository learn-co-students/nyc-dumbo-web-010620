class APIAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  fetchAndParse(url, options) {
    return fetch(url, options).then(r => r.json())
  }

  getDucks() {
    return this.fetchAndParse(this.baseUrl + "/ducks")
  }

  deleteDuck(duckId) {
    return this.fetchAndParse(this.baseUrl + `/${duckId}`, {
      method: "DELETE"
    })
  }

  updateDuck(id, rating) {
    return this.fetchAndParse(this.baseUrl + `/${id}`, {
      method: "PATCH",
      headers: this.defaultHeaders,
      body: JSON.stringify({
        rating: rating
      })
    })
  }

  createDuck(newDuckObj) {
    return this.fetchAndParse(this.baseUrl + "/ducks", {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(newDuckObj)
    })
  }
}