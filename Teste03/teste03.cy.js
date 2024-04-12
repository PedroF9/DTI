describe('Login Validation', () => {

  it('Validates login via email and password', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication');

    // Type the email into the 'email address' on the sign in box
    cy.get('input[id="email"]').type('email@test.com');//testing email
    //cy.get('input[id="email"]').type('1 OR 1=1');
    
    // Type the password into the 'password' on the sign in box
    cy.get('input[id="passwd"]').type('pswordT123');//testing password

    // Click on 'sign in' button
    cy.get('button[id="SubmitLogin"]').click();

    // Check if the email validation message appears
    cy.get('.alert.alert-danger:contains("Invalid email address.")')
    .should('not.exist')
    .then(() => {
      cy.log("Is a valid email");
    });

    //check if any of the password validation messages appears
    cy.get('.alert.alert-danger:contains("Authentication")')
    .should('exist')
    .then(() => {
      cy.log("Is NOT the correct password for this account");
    });

  });
});
