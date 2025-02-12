const encryptPassword = (password) => {
    const key = 'your_encryption_key'; // Replace with a more secure key
    let encryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
        encryptedPassword += String.fromCharCode(password.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return encryptedPassword;
};

const decryptPassword = (encryptedPassword) => {
    const key = 'your_encryption_key'; // Replace with the same key used for encryption
    let decryptedPassword = '';
    for (let i = 0; i < encryptedPassword.length; i++) {
        decryptedPassword += String.fromCharCode(encryptedPassword.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decryptedPassword;
};

export {encryptPassword, decryptPassword};

