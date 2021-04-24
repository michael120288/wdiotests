import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.clickLogin();
    });

    afterEach(()=>{
        browser.execute('window.localStorage.clear()')
    })

    it('user log in with valid data', () => {
        LoginPage.setLogin('jocefip492@tlhao86.com');
        LoginPage.setPassword('345678');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });

    it('Submit button is disabled if login and password are absent', ()=>{

        LoginPage.submitButtonIsDisabled()
    });

    it('fails if invalid data provided', ()=>{
      LoginPage.setLogin('example@example.com');
      LoginPage.setPassword('123123');
      LoginPage.clickSubmitButton();
      LoginPage.errorToastAppeared();
    })

    it('"*Required" alert appear  ', () => {
        LoginPage.setLogin('yecomel462@grokleft.com');
        LoginPage.clearLogin()
        LoginPage.errorMessageAppeared();

    });

    it('"*Email" alert appear  ', () => {
        LoginPage.setLogin('yecomel462@grokleft.com');
        LoginPage.clearLogin()
        LoginPage.errorEmailMessage();

    });

    it('"*Password" alert appear  ', () => {
        LoginPage.setPassword('123123');
        LoginPage.clearPass();
        LoginPage.errorMessageAppeared();

    });

    it("Login input is required", ()=> {
        LoginPage.setLogin('yecomel462@grokleft.com')
        LoginPage.emptyLoginInput()
        LoginPage.loginRequiredError()
    })

});


