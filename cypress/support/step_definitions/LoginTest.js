import  Login "../pageObjects/Login.js"

cy.fixture('LoginFixture').then((data)=>{
    const ln=new Login();
    ln.setUserName("data.emailaddress");
    ln.setPassword("data.password");
    ln.clickSubmit();
    ln.verifylogin();
})
//pom with fixtures
