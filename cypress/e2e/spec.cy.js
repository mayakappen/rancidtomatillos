describe('/App/App.js', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('should visit ', () => {
    cy.visit('localhost:3000')
  })
  it('Should have a title', () => {
    cy.get('nav').find('div').find('.heading').contains('Rancid Tomatillos')
    
  })
  it('Should display all movies', () => {
    cy.intercept('GET', ' https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('movies')
    cy.wait('@movies')
    expect('movies.length' > 2);
})

  it('Should see a movies detail when the cover is clicked', () => {
    cy.get('a[id="337401"]')
    .contains('Mulan')
    .click()
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 200,
      body: {
        "movie": {
        "id": 337401,
        "title": "Mulan",
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "release_date": "2020-09-04",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "budget": 200000000,
        "revenue": 57000000,
        "runtime": 115,
        "tagline": "",
        "average_rating": 5.1
      }
    }
    })
    .get('h2')
    .contains('Mulan')
    .get('p[class="description"]')
    .contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
  })
})