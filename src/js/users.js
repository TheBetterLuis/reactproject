import {encryptPassword} from "./encryption";

const adminUser = {
    username: "thebetterluis",
    email: "luismiguelromero3096@gmail.com",
    password: "Hello123!",
    role: "super",
    stats: {
        wins: {scissors: 5, rock: 0, paper: 7},
        losses: {scissors: 0, rock: 8, paper: 1},
        total: {wins: 12, losses: 9, draws: 0, matches: 21}
    }
};

const noUser = {
    username: "no-user",
    email: "-",
    password: "-",
    role: "user",
    stats: {
        wins: {scissors: 0, rock: 0, paper: 0},
        losses: {scissors: 0, rock: 0, paper: 0},
        total: {wins: 0, losses: 0, draws: 0, matches: 0}
    }
}

class User {
    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;

        this.stats = {
            wins: {scissors: 0, rock: 0, paper: 0},
            losses: {scissors: 0, rock: 0, paper: 0},
            total: {wins: 0, losses: 0, draws: 0, matches: 0},
        };
    }
}

adminUser.password = encryptPassword(adminUser.password);

const usersJSON = localStorage.getItem('users');
let users;
if (usersJSON) {
    users = JSON.parse(usersJSON);
} else {
    users = [adminUser];
    localStorage.setItem("users", JSON.stringify(users));

}

export {users, adminUser, noUser, User};




