import UIStore from "./UIStore";
import SessionStore from "./sessionStore";

const uiStore = UIStore.getInstance();
const sessionStore = new SessionStore();

const store = {
    uiStore,
    sessionStore
}

export default store;