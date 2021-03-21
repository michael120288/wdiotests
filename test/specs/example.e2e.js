import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('yecomel462@grokleft.com');
        LoginPage.setPassword('123123123');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


