import Page from './page';


class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast(){return $('.ant-notification-notice-message')}
    get errorMessage(){return $('.ant-form-item-explain-error');}
    get loginValidationError(){return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]')}
    get loginButton () {return $('//a[@data-qa="login"]'); }

    open () {
        return super.open('/user/login');
    }

    setLogin(email){
        this.inputUsername.setValue(email);
    }

    clickLogin() {
        this.loginButton.click();
    }

    setPassword(password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton(){
        this.buttonSubmit.click();
    }
    submitButtonIsDisabled(){
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared(){
        expect(this.errorToast).toBeDisplayed();
    }

    errorMessageAppeared(){
        expect(this.errorMessage === 'Required');
    }

    errorEmailMessage(){
        expect(this.errorMessage === '\'email\' is not a valid email')
    }

    emptyLoginInput(){
        this.clearInput(this.inputUsername);
    }

    clearLogin(){
        this.inputUsername.clearValue();
    }

    clearPass(){
        this.inputPassword.clearValue();
    }

    loginRequiredError(){
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual("Required");
    }
}

export default new LoginPage();
