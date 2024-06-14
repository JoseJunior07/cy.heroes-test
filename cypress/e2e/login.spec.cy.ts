import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Teste de Login ', () => {

  beforeEach(() => { 
    cy.visit('/')
  })


  it('Login com usuário e senha válidos', () => {
    loginPage.clickLoginButton()
    loginPage.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
 })
  it('Login com usuário inválido e senha válida', () => {
    loginPage.clickLoginButton()
    loginPage.loginWithUser(userData.userFailure.email, userData.userSuccess.password)
    loginPage.errorMessageLogin() 
  })
  it('Login com usuário válido e senha inválida', () => {
    loginPage.clickLoginButton()
    loginPage.loginWithUser(userData.userSuccess.email, userData.userFailure.password)
    loginPage.errorMessageLogin()   
  })
  it('Login com usuário e senha inválidos', () => {
    loginPage.clickLoginButton()
    loginPage.loginWithUser(userData.userFailure.email, userData.userFailure.password)
    loginPage.errorMessageLogin() 
  })
})