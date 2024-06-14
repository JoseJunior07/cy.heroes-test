import userData from '../fixtures/users/user-data.json'
import 'cypress-file-upload'
import LoginPage from '../pages/loginPage'
import CreateHeroPage from '../pages/createHeroPage'

const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()

describe('Create New Hero ', () => {

    beforeEach(() => { 
      cy.visit('/')
    })
  
  
    it('Criação de novo herói, com dados completos', () => {
        loginPage.clickLoginButton()
        loginPage.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        createHeroPage.clickCreateHeroButton()
        createHeroPage.dataHero({name:'Lord of Tests', price:'50', fans:'28', saves: '100', powers: '3', avatar:'avatar.jpg'})
        createHeroPage.submitHero()
        createHeroPage.confirmCreateHero()
      
   })
    it('Criação de novo herói, com dados incompletos', () => {
        loginPage.clickLoginButton()
        loginPage.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        createHeroPage.clickCreateHeroButton()
        createHeroPage.dataHero({name:'', price:'50', fans:'28', saves: '', powers: '3', avatar:'avatar.jpg'})
        createHeroPage.submitHero()
        createHeroPage.checkValidationError()
          
   })

  })