import LoginPage from '../pageObjects/psgeFunctions/globalNav'
describe('SauceDemo', () => {
    it('LogIn Page', () => {
      
      cy.visit('https://www.saucedemo.com')
      cy.wait(5000)
      LoginPage.fillLoginPage()
     
    })
  })
