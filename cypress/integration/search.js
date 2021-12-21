
describe('Search elements',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('search for elements with multiple results',()=>{
        cy.search('dress')
        cy.fixture('searchResults').then((searchResults)=>{
            cy.get(searchResults.title).should('contain','dress');
        })
        
    })

    it('search for elements with no results', ()=>{
        cy.search('qwerty')
        cy.fixture('searchResults').then((searchResults)=>{
            cy.get(searchResults.alert).should('contain','No results were');
        })
    })
})