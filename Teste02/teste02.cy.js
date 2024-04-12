describe('Account creation restriction', () => {

  it('Prevents the creation of new accounts on the same email', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication');

    // Type the email into the 'email address' on the create an account in box
    cy.get('input[id="email_create"]').type('email@test.com');//testing email

    // Click on 'create an account' button
    cy.get('button[id="SubmitCreate"]').click();

    // Check if the email validation message appears
    cy.get('[id="create_account_error"]')
    .should('exist')
    .then(() => {
      cy.log("Is a already registered email");
    });

  });
});
