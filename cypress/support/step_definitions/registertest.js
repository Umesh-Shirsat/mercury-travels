import Register from "../pageObjects/Registration.js"

cy.fixture('Registerfixtures').then((info)=>{
    const rg=new Register();
    ln.setUserName("data.emailaddress");
    ln.setPassword("data.password");
    ln.clickSubmit();
    ln.verifylogin();
})