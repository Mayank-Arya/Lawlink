function generatePassword() { 
    const charset = '12345678910abcdefgnijklmnop'
    let password = '';
    for(let i=0; i<8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password
}
module.exports = generatePassword;