describe('login', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Login with incorrect email', ()=>{
        cy.login('something', 'other')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email')
        })
    })

    it('search for elements with special code', ()=>{
        cy.readFile('cypress/support/text/search.txt').then((text) =>{
            cy.search(text);
        })
    })
})