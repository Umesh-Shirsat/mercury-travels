class Register
{ 
    txtfirstname = "#acc_first_name";
    txtlastname = "#acc_last_name";
    txtemailadd = "#acc_user_email";
    txtpassword = "#acc_user_password";
    txtcpassword = "#acc_user_passconf";
    txtcountrycode = "select[name='countrycode']";
    pnumber = "#acc_mobile_no";
    register = "div[id='modalUserLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']";
    setUserName(FirstName){
        cy.get(this.txtfirstname).type(FirstName);
    }

    setUserName(LastName){
        cy.get(this.txtlastname).type(LastName);
    }

    SetEmail(emailaddress){
        cy.get(this.txtemailadd).type(emailaddress);

    }

    SetPassword(Password){
        cy.get(this.txtpassword).type(Password);

    }
    ConfirmPassword(CPassword){
        cy.get(this.txtcpassword).type(CPassword);

    }
    CountryCode(ccode){
        cy.get(this.txtcountrycode);
    }
    PhoneNumber(Phnumber){
        cy.get(this.pnumber).type(Phnumber);

    }
    clickRegister()
    {
        cy.get(this.register).click();
    }

}
export default Register