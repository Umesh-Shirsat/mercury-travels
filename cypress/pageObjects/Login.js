class Login
{
   txtemailaddress = "#sign_user_email";
   txtpassword = "#sign_user_password";
   txtsubmitbutton= "div[id='modalLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']";
    

    setUserName (emailadd)
    {
        cy.get(this.txtemailaddress).type(emailadd);
    }
    setPassword (password)
    {
        cy.get(this.txtpassword).type(password);
    }
    clickSubmit()
    {
        cy.get(this.txtsubmitbutton).click();
    }
   // verifylogin()
   // {
    //cy.get("add element here").should('have.text','add text here');
   // }
}
export default Login;