import {noUser} from "./users";
//returns true or false if there's an active user saved in Local Storage
function isSomeoneLogged() {
    if (localStorage.getItem('activeUser')) {
        return true;
    } else {
        return false;
    }
};

//true or false for adming being logged in
function isAdminLogged() {
    const activeUser = parseActiveUser();
    if (!activeUser) {
        return false; // User not logged in
    }
    return activeUser.role === "super"; // Check if active user email matches admin email
};

//returns the active user for use if there's an active one, returns null otherwise
function parseActiveUser() {
    const userString = localStorage.getItem('activeUser');
    if (!userString) {
        return noUser; // User not logged in
    }
    try {
        return JSON.parse(userString);
    } catch (error) {
        console.error("Error parsing active user data:", error);
        return noUser; // Handle parsing errors gracefully
    }
};


export {isSomeoneLogged, isAdminLogged, parseActiveUser};


