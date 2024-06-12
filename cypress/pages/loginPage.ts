class LoginPage {
    selectorsList() {
        return {
            loginButton: "li > .undefined",
            emailField: "input[type='email']",
            passwordField: "input[type='password']",
            signInButton: "div button.text-white",
            errorMessage: ".text-red-500"
        }
    }

    clickLoginButton() {
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithUser(email: string, password: string) {
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    errorMessageLogin() {
        cy.get(this.selectorsList().errorMessage).should('have.text', 'Invalid email or password')
    }
}

export default LoginPage 