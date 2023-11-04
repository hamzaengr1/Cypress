import Elements from "../Elements/Elements"

class LoginPage{
    userNames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"];

    fillLoginPage(){
        cy.log(this.userNames.length)
       
        cy.xpath(Elements.elem_username).type(this.userNames[0])
        cy.xpath(Elements.elem_pass).type("secret_sauce")
        cy.xpath(Elements.elem_loginButton).click() 
        cy.wait(5000)
        cy.xpath(Elements.elem_header).then(($hdr) => {
            if ($hdr.hasClass("xy")) {
              cy.log("IF Passed")
        }   
        else{
            cy.log("passed")
        }   
        })
        
    }
}
export default new LoginPage 