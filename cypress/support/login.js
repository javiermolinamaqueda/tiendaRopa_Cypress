Cypress.Commands.add('login', (email,pass)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginLink).click();
        cy.get(login.email).type(email);
        cy.get(login.pass).type(pass);
        cy.get(login.loginButton).click();
        
    })
})