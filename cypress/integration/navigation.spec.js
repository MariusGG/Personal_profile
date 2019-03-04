describe('page navigation', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('laucnches website', () => {
    cy.visit('http://localhost:3000')
  })
  it('should contain navigation links', () => {
    cy.get('.nav-links').find('ul')
  })
  it('should contain my name as the title', () => {
    cy.get('.name')
    cy.should('contain', 'Marius (G) Guei')
  })

  it('has a profile image', () =>{
    cy.get('.myImage')
    cy.should('exist', 'D50_8017.jpg')
  })
  it('should contain a short about content', () => {
    cy.get('.short-about-me')
  })

  it('can render the about me component', () => {
    cy.get('.about').click()
  })

  it('can render the contact component', () => {
    cy.get('.contact').click()
  })

  it('can render the projects component', () => {
    cy.get('.projects').click()
  })

})
