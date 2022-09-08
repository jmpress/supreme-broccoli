const bcrypt = require('bcrypt');

async function makeSaltedHash(plain_pass){
    const saltRounds = 10;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(plain_pass, salt);
        return hash;
    } catch(err){
        console.log(err);
    }
}

async function comparePasswords(password, hash){
    try{
        const matchFound = await bcrypt.compare(password, hash);
        return matchFound;
    } catch(err) {
        console.log(err);
    }
    return false;
}

module.exports = { makeSaltedHash, comparePasswords };