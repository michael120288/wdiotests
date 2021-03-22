import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(()=>{
        LoginPage.open();
    })

    afterEach(()=>{
        browser.execute('window.localStorage.clear()')
    })

    it('user logs in with valid data', () => {
        LoginPage.setLogin('yecomel462@grokleft.com');
        LoginPage.setPassword('123123123');
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

});


