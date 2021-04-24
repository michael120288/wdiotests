import PortalPage from "./portal.page";

class MainPage extends PortalPage {
    open(path) {
        return super.open('/');
    }
}

export default new MainPage()