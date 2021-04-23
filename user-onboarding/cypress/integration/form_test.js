describe('app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('[name="name"]');
    const emailInput = () => cy.get('[name="email"]');
    const passwordInput = () => cy.get('[name="password"]');
    const termsInput = () => cy.get('[name="terms"]');
    const submitBtn = () => cy.get('button');
    

    it('sanity', () => {
        expect (2 + 2).to.equal(4)
    })

   it('correct elements', () => {

    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    termsInput().should('exist')
    submitBtn().should('exist')
    })

    it('type in inputs', () => {
        nameInput()
        .should('have.value', "")
        .type('Humza')
        .should('have.value', "Humza")

        emailInput()
        .should('have.value', "")
        .type('email')
        .should('have.value', "email")

        passwordInput()
        .should('have.value', "")
        .type('password')
        .should('have.value', "password")

    })
    it('check terms', () => {
        termsInput().check()

    })

    it('submit', () => {
        termsInput().check()
        submitBtn().should('not.be.disabled')
        submitBtn().click()
    })

    it("will show errors for invalid inputs", () => {
        nameInput().clear();
        submitBtn().should("be.disabled");

})
})